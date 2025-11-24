const path = require("path");

console.log("Current file info: \n");
console.log("filename: ", __filename);
console.log("directory: ", __dirname);

console.log("\n" + "-".repeat(50) + "\n");

const filePath = "/rana/documents/nextLevel.pdf";

console.log("analyzing path :", filePath, "\n");     // /rana/documents/nextLevel.pdf
console.log("Directory: ", path.dirname(filePath));   // /rana/documents
console.log("Base name: ", path.basename(filePath));  // nextLevel.pdf
console.log("File extension: ", path.extname(filePath));  // .pdf
console.log("File name: ", path.basename(filePath, path.extname(filePath)));  // nextLevel

console.log("\n" + "-".repeat(50) + "\n");

const parsed = path.parse(filePath);
console.log("Parsed path object: ", parsed);

console.log("\n" + "-".repeat(50) + "\n");

console.log("Formatted path: ", path.format(parsed));