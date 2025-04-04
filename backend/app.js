require("dotenv").config();
const express = require("express");
const connectDb = require("./config/database");
const config = require("./config/config");
const globalErrorHandler = require("./middlewares/globalErrorHandler");
const cookieParser = require("cookie-parser");
const app = express();

const PORT = config.port;
connectDb();

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({ message: "He said forever, but the summer died, and so did we" });
});

app.use("/api/user", require("./routes/userRoute"));
app.use("/api/order", require("./routes/orderRoute"));
app.use("/api/table", require("./routes/tableRoute"));

app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`POS Server is up and running on port ${PORT}`);
});
