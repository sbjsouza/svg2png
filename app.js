var express = require("express");
const svg2png = require("svg2png");

var app = express();

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.get("/", (req, res, next) => {
  svg2png(req.query.url, { width: 300, height: 400 })
    .then((buffer) => {
      var img = Buffer.from(buffer, "base64");
      res.writeHead(200, {
        "Content-Type": "image/png",
      });
      res.end(img);
    })
    .catch((e) => console.error(e));
});
