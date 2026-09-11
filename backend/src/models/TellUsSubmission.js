const mongoose = require("mongoose");

const tellUsSubmissionSchema = new mongoose.Schema(
  {
    // ── Contact fields ──────────────────────────────
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 100,
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
        /^\+?\d{1,4}[\s-]?\d[\d\s-]{5,13}\d$/,
        "Please enter a valid phone number.",
      ],
    },
    company: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 100,
    },
    message: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
      maxlength: 2000,
    },

    // ── ScopeBuilder selections (optional) ──────────
    industry: {
      type: String,
      trim: true,
      default: null,
    },
    whatToBuild: {
      type: String,
      trim: true,
      default: null,
    },
    whatBrings: {
      type: String,
      trim: true,
      default: null,
    },
    selectedServices: {
      type: [mongoose.Schema.Types.Mixed],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("TellUsSubmission", tellUsSubmissionSchema);