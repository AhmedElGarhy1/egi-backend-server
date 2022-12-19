const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subscriber = Schema(
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
      default: 0,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Subscriber", subscriber);
