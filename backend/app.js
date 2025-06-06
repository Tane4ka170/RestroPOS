require("dotenv").config();
const express = require("express");
const connectDb = require("./config/database");
const config = require("./config/config");
const globalErrorHandler = require("./middlewares/globalErrorHandler");
const cookieParser = require("cookie-parser");
const app = express();
const cors = require("cors");

const PORT = config.port;
connectDb();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: ["http://localhost:5173"] }));

app.get("/", (req, res) => {
  res.json({ message: "Hey, it's me — back-end made you look!" });
});

app.use("/api/user", require("./routes/userRoute"));
app.use("/api/order", require("./routes/orderRoute"));
app.use("/api/table", require("./routes/tableRoute"));
app.use("/api/payment", require("./routes/paymentRoute"));

app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`POS Server is up and running on port ${PORT}`);
});
