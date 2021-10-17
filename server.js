// var express = require("express");
// var app = express();
// app.use(express.static(__dirname + "/"));
// app.listen(process.env.PORT || 8080);

const path = require("path");
const express = require("express");
const app = express();

const buildPath = path.join(__dirname, "/", "build");
app.use(express.json());
app.use(express.static(buildPath));

app.post("/send", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(3030, () => {
  console.log("server start on port 3030");
});
