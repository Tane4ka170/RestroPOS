const config = require("../config/config");
const stripe = require("stripe")(config.stripeSecretKey);

const createOrder = async (req, res, next) => {
  try {
    const { amount } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: "usd",
      metadata: {
        integration_check: "accept_a_payment",
      },
    });

    res.json({
      success: true,
      clientSecret: paymentIntent.client_secret,
      amount: paymentIntent.amount,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { createOrder };
