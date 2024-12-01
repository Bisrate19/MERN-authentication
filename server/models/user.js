const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema({
  name: string,
  email: {
    type: string,
    unique: true,
  },
  password: string,
});

const UserModel = mongoose.model("User, userSchema");
module.exports = UserModel;
