const fs = require("fs");

console.log("Start Reading...");

try {
  const data = fs.readFileSync("./data/diary.txt", "utf-8");
  console.log("file content :");
  console.log(data);
} catch (err) {
  console.error(err.message);
}

console.log("Finished");
