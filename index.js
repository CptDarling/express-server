const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Home</h1><p>Hello world!</p>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About</h1>");
});

app.listen(3000, () => {
  console.log("Listen on port 3000...");
});
