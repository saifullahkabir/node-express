const fs = require("fs");

// sync
const content1 = " This is a content \n nodejs is awesome!!!";

try {
  fs.writeFileSync("./output/test-sync.txt", content1);
  console.log("file written sync");
} catch (err) {
  console.error(err.message);
}

// async

const content2 = " This is as content too \n asynchronous!!!";

fs.writeFile("./output/test-async.txt", content2, (error) => {
  if (error) {
    console.error(error.message);
  } else {
    console.log("file written asynchronously");
  }
});


