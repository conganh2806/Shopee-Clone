const authService = require("../services/authService");

exports.register = async (req, res) => {
  try {
    const { phone, password } = req.body;

    const response = await authService.register(phone, password);

    return res.status(response.statusCode).json(response);
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { phone, password } = req.body;

    const response = await authService.login(phone, password);

    return res.status(response.statusCode).json(response);
  } catch (error) {
    next(error);
  }
};

exports.getMe = async (req, res, next) => {
  try {
    const userData = {
      phone: req.user.phone,
      username: req.user.username,
      avatar: req.user.avatar,
    };

    const response = new BaseResponse(
      "Lấy thông tin người dùng thành công",
      200,
      userData
    );

    return res.status(response.statusCode).json(response);
  } catch (error) {
    next(error);
  }
};
