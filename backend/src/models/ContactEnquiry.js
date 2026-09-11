const mongoose = require("mongoose");

const contactEnquirySchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 50,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please enter a valid email address.",
      ],
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      match: [
        /^\+\d{1,4}\s\d{6,14}$/,
        "Please enter a valid phone number with country code.",
      ],
    },
    message: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
      maxlength: 2000,
    },
  },
  {
    timestamps: true,
    collection: "contactenquiries",
  }
);

module.exports = mongoose.model("ContactEnquiry", contactEnquirySchema);