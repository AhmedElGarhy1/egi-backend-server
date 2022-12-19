const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const message = Schema(
  {
    name: {
      type: String,
      required: true,
      default: "Unknown",
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
      default: 0,
    },
    subject: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Message", message);
