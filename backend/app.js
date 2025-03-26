require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.json({ message: "He said forever, but the summer died, and so did we" });
});

app.listen(PORT, () => {
  console.log(`POS Server is up and running on port ${PORT}`);
});
