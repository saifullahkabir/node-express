const crypto = require("crypto");

const algorithm = "aes-256-cbc";

const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

function encrypt(text) {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, "utf-8", "hex");
  encrypted += cipher.final("hex");

  return {
    iv: iv.toString("hex"),
    encryptedData: encrypted,
  };
}

function decrypt(encryptedData, ivHex) {
  const decipher = crypto.createDecipheriv(
    algorithm,
    key,
    Buffer.from(ivHex, "hex")
  );
  let decrypted = decipher.update(encryptedData, "hex", "utf8");
  decrypted += decipher.final("utf-8");
  return decrypted;
}

console.log("Encryption Data : ");
const sensitiveData = "My credit card: 4242 4242 4242 4242";
console.log("original datac : ", sensitiveData);

const encrypted = encrypt(sensitiveData);
console.log("Encrypted : ", encrypted);

console.log("Decrypted data :");
const decrypted = decrypt(encrypted.encryptedData, encrypted.iv);
console.log("Decrypted : ", decrypted);
console.log('match : ', sensitiveData === decrypted);
