const http = require("http");
const server = http.createServer((req, res) => {
  res.write("welcome.txt");
  console.log("hello.txt");
});

server.listen(3000);
