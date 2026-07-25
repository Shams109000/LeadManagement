const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    budget: {
      type: String,
      required: true,
      enum: [
        "Below ₹10,000",
        "₹10,000 - ₹50,000",
        "₹50,000 - ₹1,00,000",
        "Above ₹1,00,000",
      ],
    },

    message: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
    },

    status: {
      type: String,
      enum: ["New", "Contacted", "Closed"],
      default: "New",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Lead", leadSchema);