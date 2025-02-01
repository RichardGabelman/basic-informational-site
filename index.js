const http = require("http");
const url = require("url");

http
  .createServer((req, res) => {
    const q = url.parse(req.url, true);

    switch(q.pathname) {
      case '/':
        return res.end('/index.html');
      case '/about':
        return res.end('/about.html');
      case '/contact-me':
        return res.end('/contact-me.html');
      default:
        return res.end('/404.html');
    }
  })
  .listen(8080);
