const http = require("http");
const url = require("url");
const fc = require("fs");
const path = require("path");
// console.log(http)

const server = http.createServer(function (req, res) {
  console.log("Request recived");

  const parsedUrl = url.parse(req.url, true);
  //   console.log(parsedUrl);

  const filePath = parsedUrl.path;
  console.log(filePath);

  const requestedFile = __dirname + filePath;

  if (filePath === "/html.html") {
    fc.readFile(requestedFile, function (err, content) {
      if (err) {
        res.end("404");
      } else {
        // res.writeHead("200")
        res.end(content);
      }
    });
  } else {
    res.end("Hi there idiot");
  }
});

server.listen(8821, function () {
  console.log("It Is Working");
});
console.log(__dirname);
console.log(__filename);
