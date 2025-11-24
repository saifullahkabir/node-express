const fs = require("fs");

// sync
fs.writeFileSync("./output/temp.txt", "This is a temp file");
console.log("temp file created");

if (fs.existsSync("./output/temp.txt")) {
  console.log("file exits!!!");

  fs.unlinkSync("./output/temp.txt");
  console.log("file deleted");
}

try {
  fs.unlinkSync("./output/temp.txt");
  console.log("file deleted");
} catch (error) {
  console.error("ERROR :", error.message);
}

// async
fs.writeFile("./output/temp2.txt", "This is a temp2 file", (error) => {
  if (error) return console.log(error.message);

  console.log("temp2 file created");

  fs.unlink("./output/temp2.txt", (err) => {
    if (err) {
      console.log("Error :", err.message);
    } else {
      console.log("Temp2 deleted");
    }
  });
});
