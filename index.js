import express from "express";
import "dotenv/config";
import connectDB from "./db/db.js";
import userRouter from "./router/user.router.js";

const app = express();

app.use(express.json());

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("error", error);
  });

app.get("/", (req, res) => {
  res.send("<h1>Ashish</h1>");
});

app.use("", userRouter);
