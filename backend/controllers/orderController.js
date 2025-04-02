const Order = require("../models/orderModel");

const addOrder = async (req, res, next) => {
  try {
    // const { customerDetails, orderStatus, bills, items } = req.body;
    const order = new Order(req.body);
    await order.save();
    res
      .status(201)
      .json({
        success: true,
        message: "Order successfully placed!",
        data: order,
      });
  } catch (error) {
    next(error);
  }
};

const getOrder = async (req, res, next) => {};

const getOrders = async (req, res, next) => {};

const updateOrder = async (req, res, next) => {};

module.exports = { addOrder, getOrder, getOrders, updateOrder };
