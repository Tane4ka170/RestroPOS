require("dotenv").config();

const config = Object.freeze({
  port: process.env.PORT || 8259,
  database_url: process.env.MONGODB_URL || "mongodb://localhost:3741",
  node_env: process.env.NODE_ENV || "development",
  accessTokenSecret: process.env.JWT_SECRET,
});

module.exports = config;
