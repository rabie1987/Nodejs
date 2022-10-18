const fs = require("node:fs");
fs.rename("welcome.txt", "hello.txt", (err) => {
  if (err) throw err;
  console.log("Rename complete!");
  fs.readFile("hello.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
});
