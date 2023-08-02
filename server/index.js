import express from "express";
import mongoose from "mongoose";
import { portfoliosRouter } from "./routes/portfolios.js";
import config from "./config/dev.js";
const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect(config.DB_URI).then(() => console.log("Connected to DB!"));

app.use(portfoliosRouter);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log("Listening on port :", PORT);
});
