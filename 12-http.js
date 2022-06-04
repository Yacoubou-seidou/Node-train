const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Homepage");
  } else if (req.url === "/about") {
    res.end("About Page");
  } else {
    res.end(`
  <h1>OOPS ERROR</h1>
  <p>Not found</p>
  <a href="/">Back home</a>
  `);
  }
});
server.listen(3000);
