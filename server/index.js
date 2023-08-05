import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import { portfoliosRouter } from "./routes/portfolios.js";
import config from "./config/dev.js";
const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect(config.DB_URI).then(() => console.log("Connected to DB!"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(bodyParser.json());
app.use(portfoliosRouter);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log("Listening on port :", PORT);
});
