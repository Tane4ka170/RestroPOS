const config = require("../config/config");
const stripe = require("stripe")(config.stripeSecretKey);

const createOrder = async (req, res, next) => {
  try {
    const { amount } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Order Payment",
            },
            unit_amount: Math.round(amount * 100), 
          },
          quantity: 1,
        },
      ],
      success_url: "http://localhost:5173/",
      cancel_url: "http://localhost:5173/,
    })

    res.json({
      success: true,
      sessionId: session.id,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { createOrder };
