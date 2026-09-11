const { Resend } = require("resend");

const TEAM_EMAIL    = "shekhar.dixit@datacircles.in";
const FROM_TEAM     = "Copper Studio <hello@thecopperstudio.com>";
const FROM_USER     = "Copper Studio <hello@thecopperstudio.com>";

/**
 * Send 2 emails after a successful MongoDB insert:
 * 1. Notification to team with full submission data
 * 2. Confirmation to the user that we received their message
 *
 * Fails silently — NEVER throws, so the caller's response is unaffected.
 *
 * @param {"contact-enquiry"|"tell-us"} type
 * @param {object} data — the saved MongoDB document
 */
const sendNotification = async (type, data) => {
  if (!process.env.RESEND_API_KEY) {
    console.warn("RESEND_API_KEY not set — skipping email notification.");
    return;
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    if (type === "contact-enquiry") {

      // ── 1. Team notification ────────────────────────────────
      await resend.emails.send({
        from:    FROM_TEAM,
        to:      TEAM_EMAIL,
        subject: `New Contact Enquiry — ${data.firstName} ${data.lastName}`,
        html: `
          <h2 style="font-family:sans-serif;">New Contact Enquiry</h2>
          <table cellpadding="8" cellspacing="0" style="font-family:sans-serif;border-collapse:collapse;">
            <tr><td><strong>Name</strong></td><td>${data.firstName} ${data.lastName}</td></tr>
            <tr><td><strong>Email</strong></td><td>${data.email}</td></tr>
            <tr><td><strong>Message</strong></td><td>${data.message}</td></tr>
            <tr><td><strong>Submitted At</strong></td><td>${data.createdAt}</td></tr>
          </table>
        `,
      });

      // ── 2. User confirmation ────────────────────────────────
      await resend.emails.send({
        from:    FROM_USER,
        to:      data.email,
        subject: `We've received your message — Copper Studio`,
        html: `
          <div style="font-family:sans-serif;max-width:560px;margin:0 auto;">
            <h2>Hi ${data.firstName},</h2>
            <p>Thank you for reaching out to <strong>Copper Studio</strong>.</p>
            <p>We've received your message and will get back to you within <strong>24 hours</strong>.</p>
            <p style="color:#888;font-size:13px;">Your message: "${data.message}"</p>
            <br/>
            <p>Warm regards,<br/><strong>Copper Studio Team</strong></p>
          </div>
        `,
      });

    } else if (type === "tell-us") {

      const services = Array.isArray(data.selectedServices)
        ? data.selectedServices.join(", ") || "—"
        : "—";

      // ── 1. Team notification ────────────────────────────────
      await resend.emails.send({
        from:    FROM_TEAM,
        to:      TEAM_EMAIL,
        subject: `New Scope Builder Submission — ${data.name}`,
        html: `
          <h2 style="font-family:sans-serif;">New Scope Builder Submission</h2>
          <table cellpadding="8" cellspacing="0" style="font-family:sans-serif;border-collapse:collapse;">
            <tr><td><strong>Name</strong></td><td>${data.name}</td></tr>
            <tr><td><strong>Email</strong></td><td>${data.email}</td></tr>
            <tr><td><strong>Phone</strong></td><td>${data.phone}</td></tr>
            <tr><td><strong>Company</strong></td><td>${data.company}</td></tr>
            <tr><td><strong>Message</strong></td><td>${data.message}</td></tr>
            <tr><td><strong>Industry</strong></td><td>${data.industry || "—"}</td></tr>
            <tr><td><strong>What To Build</strong></td><td>${data.whatToBuild || "—"}</td></tr>
            <tr><td><strong>What Brings You</strong></td><td>${data.whatBrings || "—"}</td></tr>
            <tr><td><strong>Selected Services</strong></td><td>${services}</td></tr>
            <tr><td><strong>Submitted At</strong></td><td>${data.createdAt}</td></tr>
          </table>
        `,
      });

      // ── 2. User confirmation ────────────────────────────────
      await resend.emails.send({
        from:    FROM_USER,
        to:      data.email,
        subject: `We've received your project scope — Copper Studio`,
        html: `
          <div style="font-family:sans-serif;max-width:560px;margin:0 auto;">
            <h2>Hi ${data.name},</h2>
            <p>Thank you for sharing your project details with <strong>Copper Studio</strong>.</p>
            <p>We've received your scope and will review it carefully. Our team will get back to you within <strong>24 hours</strong>.</p>
            <br/>
            <p>Warm regards,<br/><strong>Copper Studio Team</strong></p>
          </div>
        `,
      });

    }

    console.log(`[Resend] Both emails sent for ${type}`);
  } catch (err) {
    // Log but never rethrow — email failure must not affect the API response
    console.error(`[Resend] Failed to send email for ${type}:`, err.message);
  }
};

module.exports = { sendNotification };
