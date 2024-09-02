const mongoose = require("mongoose");



const userSchema = new mongoose.Schema(
    {
      firstName: {
        type: "string",
        require: true,
      },
      lastName: {
        type: "string",
      },
      email: {
        type: "string",
        require: true,
        unique: true,
      },
    },
    { timestamps: true }
  );

  // Model

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel