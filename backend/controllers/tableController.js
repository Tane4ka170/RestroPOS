const createHttpError = require("http-errors");
const Table = require("../models/tableModel");

const addTable = async (req, res, next) => {
  try {
    const { tableNo } = req.body;
    if (!tableNo) {
      const error = createHttpError(400, "Kindly enter the table number!");
      return next(error);
    }
    const isTablePresent = await Table.findOne({ tableNo });
    if (isTablePresent) {
      const error = createHttpError(400, "Table already exists!");
      return next(error);
    }

    const newTable = new Table({ tableNo });

    await newTable.save();

    res.status(201).json({
      success: true,
      message: "Table successfully added!",
      data: newTable,
    });
  } catch (error) {
    next(error);
  }
};
const getTables = async (req, res, next) => {
  try {
    const tables = await Table.find().populate({
      path: "currentOrder",
      select: "customerDetails",
    });
    res.status(200).json({ success: true, data: tables });
  } catch (error) {
    next(error);
  }
};
const updateTable = async (req, res, next) => {
  try {
    const { status, orderId } = req.body;

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      const error = createHttpError(404, "Invalid ID provided!");
      return next(error);
    }

    const table = await Table.findByIdAndUpdate(
      id,
      { status, currentOrder: orderId },
      { new: true }
    );

    if (!table) {
      const error = createHttpError(404, "The table does not exist!");
      return error;
    }

    res
      .status(200)
      .json({ success: true, message: "Table has been updated!", data: table });
  } catch (error) {
    next(error);
  }
};

module.exports = { addTable, getTables, updateTable };
