const { Resend } = require("resend");

const RECIPIENT = "contact@thecopperstudio.com";
const FROM      = "Copper Studio <onboarding@resend.dev>";

/**
 * Send an email notification after a successful MongoDB insert.
 * Fails silently — NEVER throws, so the caller's response is unaffected.
 *
 * @param {"contact-enquiry"|"tell-us"} type
 * @param {object} data  — the saved MongoDB document
 */
const sendNotification = async (type, data) => {
  if (!process.env.RESEND_API_KEY) {
    console.warn("RESEND_API_KEY not set — skipping email notification.");
    return;
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  let subject = "";
  let html    = "";

  if (type === "contact-enquiry") {
    subject = `New Contact Enquiry — ${data.firstName} ${data.lastName}`;
    html = `
      <h2>New Contact Enquiry</h2>
      <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;">
        <tr><td><strong>Name</strong></td><td>${data.firstName} ${data.lastName}</td></tr>
        <tr><td><strong>Email</strong></td><td>${data.email}</td></tr>
        <tr><td><strong>Message</strong></td><td>${data.message}</td></tr>
        <tr><td><strong>Submitted At</strong></td><td>${data.createdAt}</td></tr>
      </table>
    `;
  } else if (type === "tell-us") {
    subject = `New Scope Builder Submission — ${data.name}`;
    html = `
      <h2>New Scope Builder Submission</h2>
      <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;">
        <tr><td><strong>Name</strong></td><td>${data.name}</td></tr>
        <tr><td><strong>Email</strong></td><td>${data.email}</td></tr>
        <tr><td><strong>Phone</strong></td><td>${data.phone}</td></tr>
        <tr><td><strong>Company</strong></td><td>${data.company}</td></tr>
        <tr><td><strong>Message</strong></td><td>${data.message}</td></tr>
        <tr><td><strong>Industry</strong></td><td>${data.industry || "—"}</td></tr>
        <tr><td><strong>What To Build</strong></td><td>${data.whatToBuild || "—"}</td></tr>
        <tr><td><strong>What Brings You</strong></td><td>${data.whatBrings || "—"}</td></tr>
        <tr><td><strong>Selected Services</strong></td><td>${Array.isArray(data.selectedServices) ? data.selectedServices.join(", ") : "—"}</td></tr>
        <tr><td><strong>Submitted At</strong></td><td>${data.createdAt}</td></tr>
      </table>
    `;
  }

  try {
    await resend.emails.send({
      from:    FROM,
      to:      RECIPIENT,
      subject,
      html,
    });
    console.log(`[Resend] Notification sent for ${type}`);
  } catch (err) {
    // Log but never rethrow — email failure must not affect the API response
    console.error(`[Resend] Failed to send notification for ${type}:`, err.message);
  }
};

module.exports = { sendNotification };
