const mongoose = require("mongoose");

const tableModel = new mongoose.Schema({
  tableNo: { type: Number, required: true, unique: true },
  status: { type: String, required: true, default: "Available" },
  currentOrder: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
});

module.exports = mongoose.model("table", tableModel);
