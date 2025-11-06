const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema(
  {
    phone: {
      type: String,
      required: [true, "Vui lòng nhập số điện thoại"],
      unique: true,
      match: [
        /(03|05|07|08|09|01[2|6|8|9])[0-9]{8}\b/,
        "Số điện thoại không hợp lệ",
      ],
    },
    password: {
      type: String,
      required: [true, "Vui lòng nhập mật khẩu"],
      minlength: 6,
      select: false,
    },
    username: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: "https://i.imgur.com/6VBx3io.png",
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", UserSchema);
