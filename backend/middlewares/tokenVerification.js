const createHttpError = require("http-errors");

const isVerifiedUser = async (req, res, next) => {
  try {
    const { accessToken } = req.cookie;
    if (!accessToken) {
      const error = createHttpError(401, "Token is required!");
    }
  } catch (error) {
    next(error);
  }
};
