const TellUsSubmission = require("../models/TellUsSubmission");

const submitTellUsForm = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      company,
      message,
      industry,
      whatToBuild,
      whatBrings,
      selectedServices,
    } = req.body;

    if (!name || !email || !phone || !company || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const submission = await TellUsSubmission.create({
      name,
      email,
      phone,
      company,
      message,
      industry:         industry         || null,
      whatToBuild:      whatToBuild      || null,
      whatBrings:       whatBrings       || null,
      selectedServices: Array.isArray(selectedServices) ? selectedServices : [],
    });

    return res.status(201).json({
      success: true,
      message: "Form submitted successfully.",
      data: submission,
    });
  } catch (error) {
    console.error("TellUs submission error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to save form.",
    });
  }
};

module.exports = { submitTellUsForm };
