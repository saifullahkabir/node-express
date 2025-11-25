const crypto = require("crypto");

// md5 --> not recommended
const md5Hash = crypto.createHash("md5").update("password123").digest("hex");
const md5Hash2 = crypto.createHash("md5").update("password123").digest("hex");
console.log("MD5 Hash: ");
console.log("Input: password123");
console.log("MD5 HashedPassword: ", md5Hash);
console.log("MD5 HashedPassword2: ", md5Hash);

// sha256
const sha256Hash = crypto
  .createHash("sha256")
  .update("password123")
  .digest("hex");
console.log("Input: password123");
console.log("SHA256 HashedPassword: ", sha256Hash);

// sha512
const sha512Hash = crypto
  .createHash("sha512")
  .update("password123")
  .digest("hex");
console.log("Input: password123");
console.log("SHA512 HashedPassword: ", sha512Hash);

console.log(2 ** 32 / 10 ** 9);
