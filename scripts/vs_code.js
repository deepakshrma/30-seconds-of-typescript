const {
  pluck,
  ex,
  rn,
  rf,
  wf,
  join,
  stringify,
  extBaseKeys,
} = require("./util");

async function main() {
  const packageStr = (await rf(join(process.cwd(), "package.json"))).toString();
  const packageJSON = JSON.parse(packageStr);
  try {
    const vsCode = stringify(
      pluck(
        packageJSON,
        extBaseKeys.concat([
          "homepage",
          "displayName",
          "publisher",
          "engines",
          "categories",
          "contributes",
          "activationEvents",
        ]),
        {},
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
