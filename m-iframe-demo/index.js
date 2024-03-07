let fs = require("fs");
let path = require("path");
const express = require("express");
const app = express();
const port = 4000;
app.get("/father", (req, res) => {
  let sourceCode = fs.readFileSync(
    path.resolve(__dirname, "father.html"),
    "utf8"
  );
  res.send(sourceCode);
});
app.get("/son1", (req, res) => {
  let sourceCode = fs.readFileSync(
    path.resolve(__dirname, "son1.html"),
    "utf8"
  );
  res.send(sourceCode);
});
app.get("/son2", (req, res) => {
  let sourceCode = fs.readFileSync(
    path.resolve(__dirname, "son2.html"),
    "utf8"
  );
  res.send(sourceCode);
});
app.get("/son3", (req, res) => {
  let sourceCode = fs.readFileSync(
    path.resolve(__dirname, "son3.html"),
    "utf8"
  );
  res.send(sourceCode);
});
app.get("/grandson1", (req, res) => {
  let sourceCode = fs.readFileSync(
    path.resolve(__dirname, "grandson1.html"),
    "utf8"
  );
  res.send(sourceCode);
});
app.get("/grandson2", (req, res) => {
  let sourceCode = fs.readFileSync(
    path.resolve(__dirname, "grandson2.html"),
    "utf8"
  );
  res.send(sourceCode);
});

app.listen(port);
