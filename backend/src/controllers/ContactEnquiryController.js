const ContactEnquiry = require("../models/ContactEnquiry");
const { sendNotification } = require("../utils/sendNotification");

const submitContactEnquiry = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;

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
      phone,
      message,
    });

    // Send notification email — fires after successful insert, fails silently
    sendNotification("contact-enquiry", enquiry);

    return res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully.",
      data: enquiry,
    });

  } catch (error) {
    console.error("Contact enquiry error:", error);

    // Mongoose validation error
    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map(
        (err) => err.message
      );

      return res.status(400).json({
        success: false,
        message: errors[0],
      });
    }

    return res.status(500).json({
      success: false,
      message: "Failed to save enquiry.",
    });
  }
};

module.exports = { submitContactEnquiry };