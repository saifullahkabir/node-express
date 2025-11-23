// const {add} = require("./add");
// const {subs} = require("./subs");

// module.exports = { add, subs};

import { add } from "./add.mjs";
import miunus from "./subs.mjs";

// console.log(add(1, 2));
// console.log(miunus(10, 4));

export default {
  add,
  miunus,
};
