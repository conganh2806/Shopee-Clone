const User = require("../models/User");
const jwt = require("jsonwebtoken");
const BaseResponse = require("../utils/BaseResponse");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

/**
 * Handle logic register
 * @param {string} phone
 * @param {string} password
 * @returns {object} { token, phone }
 */
const register = async (phone, password) => {
  const userExists = await User.findOne({ phone });
  if (userExists) {
    return new BaseResponse("Số điện thoại đã được đăng ký", 409, {
      phone: userExists.phone,
      username: userExists.username,
      avatar: userExists.avatar,
    });
  }

  const randomSuffix = Math.floor(100000 + Math.random() * 900000);
  const newUsername = `user${randomSuffix}`;

  const user = await User.create({
    phone,
    password,
    username: newUsername,
  });

  return new BaseResponse("Đăng ký thành công!", 201, {
    token: generateToken(user._id),
    user: {
      phone: user.phone,
      username: user.username,
      avatar: user.avatar,
    },
  });
};

/**
 * Handle logic login
 * @param {string} phone
 * @param {string} password
 * @return {object} {token, phone}
 */
const login = async (phone, password) => {
  const user = await User.findOne({ phone }).select("+password");

  if (!user || !(await user.comparePassword(password))) {
    return new BaseResponse("Số điện thoại hoặc mật khẩu không đúng", 401);
  }

  return new BaseResponse("Đăng nhập thành công!", 200, {
    token: generateToken(user._id),
    user: {
      phone: user.phone,
      username: user.username,
      avatar: user.avatar,
    },
  });
};

module.exports = {
  register,
  login,
};
