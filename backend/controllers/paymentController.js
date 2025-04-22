const config = require("../config/config");
const stripe = require("stripe")(config.stripeSecretKey);
const Payment = require("../models/paymentModel");

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
      cancel_url: "http://localhost:5173/",
    });

    res.json({
      success: true,
      sessionId: session.id,
    });
  } catch (error) {
    next(error);
  }
};

const stripeWebhook = async (req, res, next) => {
  const sig = req.headers["stripe-signature"];

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.rawBody, sig, endpointSecret);
  } catch (err) {
    console.error("Webhook Error:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    const newPayment = new Payment({
      paymentId: session.payment_intent,
      orderId: session.id,
      amount: session.amount_total / 100,
      currency: session.currency,
      status: session.payment_status,
      email: session.customer_details.email,
      createdAt: new Date(),
    });

    try {
      await newPayment.save();
      console.log("✅ Оплата збережена в базу");
    } catch (err) {
      console.error("❌ Помилка при збереженні:", err);
    }
  }

  res.json({ received: true });
};

module.exports = { createOrder, stripeWebhook };
