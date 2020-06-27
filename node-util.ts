const { mkdirSync, existsSync, mkdir, exists } = require("fs");
const { promisify } = require("util");
const mkdirP = promisify(mkdir);
const existsP = promisify(exists);

export const createDirIfNotExists = async (dir: string) =>
  !(await existsP(dir)) ? await mkdirP(dir) : undefined;

export const createDirIfNotExistsSync = (dir: string) =>
  !existsSync(dir) ? mkdirSync(dir) : undefined;
