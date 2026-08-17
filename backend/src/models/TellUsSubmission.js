const mongoose = require("mongoose");

const tellUsSubmissionSchema = new mongoose.Schema(
  {
    // ── Contact fields ──────────────────────────────
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
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    company: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
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
