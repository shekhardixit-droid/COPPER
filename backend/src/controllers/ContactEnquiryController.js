const ContactEnquiry = require("../models/ContactEnquiry");

const submitContactEnquiry = async (req, res) => {
  try {
    const { firstName, lastName, email, message } = req.body;

    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const enquiry = await ContactEnquiry.create({
      firstName,
      lastName,
      email,
      message,
    });

    return res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully.",
      data: enquiry,
    });
  } catch (error) {
    console.error("Contact enquiry error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to save enquiry.",
    });
  }
};

module.exports = { submitContactEnquiry };
