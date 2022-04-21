const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("Here");
  res.render("index", { text: "Mazlom" });
});

app.get("/users", (req, res) => {});

app.listen(3023);
