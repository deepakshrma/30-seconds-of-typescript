import { mask } from "../";

console.log(mask(1234567890)); // '******7890'
console.log(mask(1234567890, 3)); // '*******890'
console.log(mask(1234567890, -4, "$")); // '$$$$567890'

console.log("✅ TS looks good!");
