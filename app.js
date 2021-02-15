var express = require("express");
const svg2png = require("svg2png");

var app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/", (req, res, next) => {
  if (req.query.url) {
    svg2png(req.query.url, { width: 300, height: 400 })
      .then((buffer) => {
        var img = Buffer.from(buffer, "base64");
        res.writeHead(200, {
          "Content-Type": "image/png",
        });
        res.end(img);
      })
      .catch((e) => console.error(e));
  } else {
    res.json(["Error"]);
  }
});
