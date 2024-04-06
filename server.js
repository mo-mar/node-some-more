const fs = require("fs");
const http = require("http");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    const homepagePath = path.join(__dirname, "public", "index.html");
    fs.readFile(homepagePath, "utf8", (err, content) => {
      if (err) {
        throw err;
      }
      res.end(content);
    });
  }

  // Serve CSS

  if (path.extname(req.url) === ".css") {
    res.writeHead(200, { "Content-Type": "text/css" });
    const cssPath = path.join(__dirname, "public", "style.css");
    fs.readFile(cssPath, "utf8", (err, content) => {
      if (err) {
        throw err;
      }
      res.end(content);
    });
  }

  // Serve JS

  if (path.extname(req.url) === ".js") {
    res.writeHead(200, { "Content-Type": "text/javascript" });
    const cssPath = path.join(__dirname, "public", "index.js");
    fs.readFile(cssPath, "utf8", (err, content) => {
      if (err) {
        throw err;
      }
      res.end(content);
    });
  }
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
