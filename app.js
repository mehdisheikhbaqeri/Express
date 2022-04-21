const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("Here");
  res.render("index", { text: "Mazlom" });
});

const userRouter = require("./routes/users");
const userRouter = require("./routes/posts");

app.use("/users", userRouter);
app.use("/posts", userRouter);

app.listen(3023);
