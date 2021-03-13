const { readFile, rename, writeFile } = require("fs");
const { exec } = require("child_process");
const { join } = require("path");
const { promisify } = require("util");
const ex = promisify(exec);
const rn = promisify(rename);
const rf = promisify(readFile);
const wf = promisify(writeFile);

const pluck = (obj, keys, def = {}, overrides = {}) => {
  return {
    ...keys.reduce((m, key) => {
      m[key] = obj[key];
      return m;
    }, def),
    ...overrides,
  };
};
const stringify = (obj = {}, spaces = 2) => JSON.stringify(obj, null, spaces);
const packageBaseKeys = [
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
];
const extBaseKeys = [
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
];
module.exports = {
  pluck,
  ex,
  rn,
  rf,
  wf,
  join,
  stringify,
  packageBaseKeys,
  extBaseKeys,
};
