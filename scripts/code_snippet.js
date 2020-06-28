const { readFile, writeFile } = require("fs");
const { join } = require("path");

const { promisify } = require("util");
const rf = promisify(readFile);
const wf = promisify(writeFile);

async function main() {
  const file = (await rf(join(process.cwd(), "util.ts"))).toString();
  const snippetJSON = {};
  const snippets = file
    .split("\n/*")
    .slice(1)
    .map((x) => "/*" + x);
  snippets.map((snippet) => {
    snippet = snippet.trim() + "\n";
    const name =
      snippet.match(/export function (.+)</) ||
      snippet.match(/export function (.+)\(/) ||
      snippet.match(/export const (.+) = \(/) ||
      snippet.match(/export const (.+) = </) ||
      snippet.match(/export const (.+) = /);
    const description = snippet.match(/\/\*+(\S|\s|\n)*\//);
    if (name) {
      snippetJSON[`30_${name[1]}`] = {
        prefix: `30_${name[1]}`,
        body: snippet.split("\n"),
        description:
          description && description[0]
            ? description[0].replace(/\/?\s?[\*]+\s?\/?|@.+/g, "")
            : name[1],
      };
    }
  });
  await wf(
    join(process.cwd(), "snippets/typescript.json"),
    JSON.stringify(snippetJSON, null, 2)
  );
}
main();
