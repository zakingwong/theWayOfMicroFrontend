let fs = require("fs");
let path = require("path");
const express = require("express");
const app = express();
const port = 4000;
app.get("/index1", (req, res) => {
  let sourceCode = fs.readFileSync(
    path.resolve(__dirname, "index1.html"),
    "utf8"
  );
  res.send(sourceCode);
});
app.get("/index2", (req, res) => {
  let sourceCode = fs.readFileSync(
    path.resolve(__dirname, "index2.html"),
    "utf8"
  );

  res.send(sourceCode);
});

app.listen(port);
