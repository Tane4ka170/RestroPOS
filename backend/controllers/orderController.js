const Order = require("../models/orderModel");
const createHttpError = require("http-errors");

const addOrder = async (req, res, next) => {
  try {
    // const { customerDetails, orderStatus, bills, items } = req.body;
    const order = new Order(req.body);
    await order.save();
    res.status(201).json({
      success: true,
      message: "Order successfully placed!",
      data: order,
    });
  } catch (error) {
    next(error);
  }
};

const getOrderById = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      const error = createHttpError(404, "Unable to locate order!");
      return next(error);
    }
    res.status(200).json({ success: true, data: order });
  } catch (error) {
    next(error);
  }
};

const getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find();
    res.status(200).json({ data: orders });
  } catch (error) {
    next(error);
  }
};

const updateOrder = async (req, res, next) => {
  try {
    const { orderStatus } = req.body;
  } catch (error) {
    next(error);
  }
};

module.exports = { addOrder, getOrderById, getOrders, updateOrder };
