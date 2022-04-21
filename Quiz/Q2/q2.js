const express = require("express");
const app = express();

app.get("/Math/:num1/:num2", (req, res) => {
  let { num1, num2 } = req.params;

  res.send(`<h1>Final is ${num1 * num2}</h1>`);
});

app.listen("3066", (req, res) => {
  console.log("Davinchi's Code");
});
