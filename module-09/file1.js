const { a } = require("../module-09/file2");
const {a: x} = require("../module-09/file3")
// console.log(a, x);

// const {add} = require("./utils/add");
// const {subs} = require("./utils/subs");

const {add, subs} = require("./utils");

console.log(add(a , x));
console.log(subs(10, 1));
