const { readFile, rename, writeFile } = require("fs");
const { exec } = require("child_process");
const { join } = require("path");

const { promisify } = require("util");
const ex = promisify(exec);
const rn = promisify(rename);
const rf = promisify(readFile);
const wf = promisify(writeFile);

async function main() {
  const packageStr = (await rf(join(process.cwd(), "package.json"))).toString();
  const packageJSON = JSON.parse(packageStr);
  try {
    const pluck = (obj, keys, def = {}) =>
      keys.reduce((m, key) => {
        m[key] = obj[key];
        return m;
      }, def);
    const vsCode = JSON.stringify(
      pluck(
        packageJSON,
        [
          "name",
          "description",
          "version",
          "private",
          "repository",
          "keywords",
          "author",
          "license",
          "bugs",
          "icon",
          "homepage",
          "displayName",
          "publisher",
          "engines",
          "categories",
          "contributes",
          "main",
          "types",
          "files",
        ],
        {
          name: "30-seconds-of-typescript",
          devDependencies: {
            "@types/vscode": "^1.34.0",
            vsce: "^1.77.0",
          },
        }
      )
    );
    await ex("npm run code-gen ");
    await rn("package.json", "_package.json");
    await wf("package.json", vsCode);
    if (process.argv.includes("--publish")) {
      await ex("yarn vsce publish -p $VS_TOKEN");
    } else {
      await ex("yarn vsce package");
    }
    await rn("_package.json", "package.json");
  } catch (error) {
    console.log(error);
  } finally {
    await wf("package.json", packageStr);
  }
}
main();
