const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const dotenv = require("dotenv");
const userRouter = require("./routes/user.route");
const authRouter = require("./routes/auth.route");
dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("conected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("listening");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
