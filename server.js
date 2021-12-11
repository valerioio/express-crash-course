const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

const userRouter = require("./routes/users");

app.use("/users", userRouter);

app.get("/data", (req, res) => {
  res.status(200).json({ name: "kyle", favoriteFood: "rice" });
});

app.listen(3000);
