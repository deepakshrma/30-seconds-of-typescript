const {
  pluck,
  ex,
  rn,
  rf,
  wf,
  join,
  stringify,
  packageBaseKeys,
} = require("./util");

async function main() {
  const packageStr = (await rf(join(process.cwd(), "package.json"))).toString();
  const packageJSON = JSON.parse(packageStr);
  try {
    const npmJSON = stringify(
      pluck(
        packageJSON,
        packageBaseKeys,
        {},
        {
          dependencies: {},
          devDependencies: {},
          scripts: {
            tsc: "tsc",
            test: "node test",
            postpublish: "node scripts/npm.js --back",
          },
        }
      )
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
