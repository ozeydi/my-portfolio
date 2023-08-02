import express from "express";

const app = express();

const PORT = process.env.PORT || 3001;

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log("Listening on port :", PORT);
});
