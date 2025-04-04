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

    res
      .status(201)
      .json({
        success: true,
        message: "Table successfully added!",
        data: newTable,
      });
  } catch (error) {
    next(error);
  }
};
const getTables = async (req, res, next) => {};
const updateTable = async (req, res, next) => {};

module.exports = { addTable, getTables, updateTable };
