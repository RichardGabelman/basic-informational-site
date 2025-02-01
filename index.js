const http = require("http");
const url = require("url");
const fs = require("fs");

http
  .createServer((req, res) => {
    const q = url.parse(req.url, true);

    let filename = "";

    if (q.pathname === "/") {
      filename = "./index.html";
    } else {
      filename = "." + q.pathname + ".html";
    }

    fs.readFile(filename, (err, data) => {
      if (err) {
        fs.readFile("./404.html", (e, d) => {
          if (e) {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.write("<h1>404 Not Found</h1><p>Custom 404 page missing</p>");
          } else {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.write(d);
          }
          return res.end();
        });
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);
