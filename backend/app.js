require("dotenv").config();
const express = require("express");
const connectDb = require("./config/database");
const config = require("./config/config");
const globalErrorHandler = require("./middlewares/globalErrorHandler");
const createHttpError = require("http-errors");
const app = express();

const PORT = config.port;
connectDb();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "He said forever, but the summer died, and so did we" });
});

app.use("/api/user", require("./routes/userRoute"));

app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`POS Server is up and running on port ${PORT}`);
});
