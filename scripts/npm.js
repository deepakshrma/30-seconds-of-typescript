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
    const npmJSON = JSON.stringify(
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
          "main",
          "types",
          "files",
        ],
        {
          dependencies: {},
          devDependencies: {},
          scripts: {
            tsc: "tsc",
            test: "node test",
            postpublish: "node scripts/npm.js --back",
          },
        }
      ),
      null,
      2
    );
    if (process.argv.includes("--prepare")) {
      await rn("package.json", "_package.json");
      await wf("package.json", npmJSON);
    }
    if (process.argv.includes("--back")) {
      await rn("_package.json", "package.json");
    }
  } catch (error) {
    console.log(error);
    await wf("package.json", packageStr);
  }
}
main();
