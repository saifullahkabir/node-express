// const { a } = require("../module-09/file2");
// const {a: x} = require("../module-09/file3")
// // console.log(a, x);

// // const {add} = require("./utils/add");
// // const {subs} = require("./utils/subs");

// const {add, subs} = require("./utils");

// console.log(add(a , x));
// console.log(subs(10, 1));

// using common js to esm

// import { a  } from "./file_es2.mjs";
// import { a as x } from "./file_es3.mjs";

// console.log(a, x);

import utils  from './utils_esm/index.mjs'
console.log(utils.add(10, 2));
console.log(utils.miunus(10, 5));
