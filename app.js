const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("mehdi");
  //   res.send("hi");
  //   res.sendStatus(500);
  //   res.status(500).send("Hi");
  //   res.status(500).send({ message: "Error" }); //--->Mistake
  //   res.json({ message: "Error" }); //--->This method gets the bug inside the box for when we want to have Jason
  res.download("app.js");
});

app.listen(3007);
