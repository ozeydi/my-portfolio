import express from "express";

const app = express();
const PORT = process.env.PORT || 3001;

app.get("/test", (req, res) => res.json({ message: "working" }));

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log("Listening on port :", PORT);
});
