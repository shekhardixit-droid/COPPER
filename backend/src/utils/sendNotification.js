const { Resend } = require("resend");

const TEAM_EMAIL = "shekhar.dixit@datacircles.in";
const FROM       = "Copper Studio <hello@thecopperstudio.com>";

// ── Helpers ───────────────────────────────────────────────────

/**
 * Escape user-submitted text for safe HTML insertion.
 * Prevents XSS in email clients.
 */
const esc = (str) => {
  if (str === null || str === undefined) return "—";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
};

/**
 * Extract a human-readable name from a selectedServices item.
 * Each item is an object with a `name` property (e.g. "Brand Identity").
 * Falls back gracefully if the shape is unexpected.
 */
const serviceName = (item) => {
  if (!item) return null;
  if (typeof item === "string") return item;
  if (typeof item === "object") {
    return item.name || item.label || item.title || item.value || JSON.stringify(item);
  }
  return String(item);
};

/**
 * Format a MongoDB createdAt timestamp to IST for email display.
 * Example output: "11 Sep 2026, 1:06 PM"
 * Does NOT change how the timestamp is stored in MongoDB.
 */
const formatIST = (date) => {
  try {
    return new Date(date).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      day:      "numeric",
      month:    "short",
      year:     "numeric",
      hour:     "numeric",
      minute:   "2-digit",
      hour12:   true,
    });
  } catch (_) {
    return String(date);
  }
};

// ── Shared styles ─────────────────────────────────────────────
const styles = {
  wrapper:    "font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#ffffff;",
  header:     "background:#0f0f0f;padding:32px 40px;border-radius:12px 12px 0 0;",
  headerH1:   "margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:-0.3px;",
  headerSub:  "margin:8px 0 0;color:#888888;font-size:14px;",
  body:       "padding:32px 40px;background:#fafafa;",
  section:    "margin-bottom:28px;",
  sectionH2:  "margin:0 0 14px;font-size:11px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:#888888;border-bottom:1px solid #e5e5e5;padding-bottom:8px;",
  row:        "display:flex;gap:12px;margin-bottom:10px;",
  label:      "min-width:130px;font-size:13px;color:#888888;font-weight:500;",
  value:      "font-size:13px;color:#111111;flex:1;word-break:break-word;",
  messageBox: "background:#f5f5f5;border-left:3px solid #e05c18;padding:14px 18px;border-radius:4px;font-size:13px;color:#333333;line-height:1.6;white-space:pre-wrap;",
  footer:     "padding:20px 40px;background:#f0f0f0;border-radius:0 0 12px 12px;text-align:center;font-size:12px;color:#aaaaaa;",
};

// ── Row helper ────────────────────────────────────────────────
const row = (label, value) => `
  <div style="${styles.row}">
    <span style="${styles.label}">${label}</span>
    <span style="${styles.value}">${value}</span>
  </div>`;

// ── Email builders ────────────────────────────────────────────

const buildContactEnquiryTeamEmail = (d) => `<!DOCTYPE html>
<html><body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f4f4f4;">
<table width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:20px;">
<table width="580" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;">
  <tr><td style="background:#0f0f0f;padding:24px 32px;">
    <h1 style="margin:0;color:#fff;font-size:20px;">New Contact Enquiry</h1>
    <p style="margin:6px 0 0;color:#999;font-size:13px;">Submitted through thecopperstudio.com</p>
  </td></tr>
  <tr><td style="padding:24px 32px;">
    <table width="100%" cellpadding="6" cellspacing="0">
      <tr><td style="color:#888;font-size:13px;width:120px;">Name</td><td style="font-size:13px;color:#111;">${esc(d.firstName)} ${esc(d.lastName)}</td></tr>
      <tr><td style="color:#888;font-size:13px;">Email</td><td style="font-size:13px;color:#111;">${esc(d.email)}</td></tr>
      <tr><td style="color:#888;font-size:13px;">Phone</td><td style="font-size:13px;color:#111;">${esc(d.phone || "—")}</td></tr>
      <tr><td style="color:#888;font-size:13px;">Date</td><td style="font-size:13px;color:#111;">${esc(formatIST(d.createdAt))}</td></tr>
      <tr><td style="color:#888;font-size:13px;vertical-align:top;padding-top:12px;">Message</td>
          <td style="font-size:13px;color:#333;padding-top:12px;border-left:3px solid #e05c18;padding-left:12px;">${esc(d.message)}</td></tr>
    </table>
  </td></tr>
  <tr><td style="background:#f0f0f0;padding:12px 32px;font-size:11px;color:#aaa;text-align:center;">
    This notification was generated automatically from the website.
  </td></tr>
</table>
</td></tr></table>
</body></html>`;

const buildContactEnquiryUserEmail = (d) => `
<div style="${styles.wrapper}">
  <div style="${styles.header}">
    
    <p style="${styles.headerSub}">Copper Studio</p>
  </div>
  <div style="${styles.body}">
    <p style="font-size:15px;color:#111111;margin:0 0 16px;">Hi ${esc(d.firstName)},</p>
    <p style="font-size:14px;color:#444444;line-height:1.7;margin:0 0 16px;">
      Thank you for reaching out to <strong>Copper Studio</strong>.
      We've received your message and will get back to you within <strong>24 hours</strong>.
    </p>
    <div style="${styles.messageBox}">${esc(d.message)}</div>
    <p style="font-size:14px;color:#444444;margin:24px 0 0;">Warm regards,<br/><strong>Copper Studio Team</strong></p>
  </div>
  <div style="${styles.footer}">This is an automated confirmation. Please do not reply to this email.</div>
</div>`;

const buildTellUsTeamEmail = (d) => {
  // Extract human-readable service names from selectedServices objects
  const servicesList = Array.isArray(d.selectedServices) && d.selectedServices.length > 0
    ? d.selectedServices
        .map((s) => `<li style="margin-bottom:4px;">${esc(serviceName(s))}</li>`)
        .join("")
    : "<li>—</li>";

  return `
<div style="${styles.wrapper}">
  <div style="${styles.header}">
    <h1 style="${styles.headerH1}">New Scope Builder Submission</h1>
    <p style="${styles.headerSub}">A new project inquiry has been submitted through the website.</p>
  </div>
  <div style="${styles.body}">
    <div style="${styles.section}">
      <h2 style="${styles.sectionH2}">Contact Information</h2>
      ${row("Name",    esc(d.name))}
      ${row("Email",   esc(d.email))}
      ${row("Phone",   esc(d.phone))}
      ${row("Company", esc(d.company))}
    </div>
    <div style="${styles.section}">
      <h2 style="${styles.sectionH2}">Project Details</h2>
      ${row("Industry",          esc(d.industry    || "—"))}
      ${row("What To Build",     esc(d.whatToBuild || "—"))}
      ${row("What Brings You",   esc(d.whatBrings  || "—"))}
      <div style="${styles.row}">
        <span style="${styles.label}">Selected Services</span>
        <ul style="margin:0;padding-left:18px;flex:1;">
          ${servicesList}
        </ul>
      </div>
    </div>
    <div style="${styles.section}">
      <h2 style="${styles.sectionH2}">Message</h2>
      <div style="${styles.messageBox}">${esc(d.message)}</div>
    </div>
    ${row("Submitted At", esc(formatIST(d.createdAt)))}
  </div>
  <div style="${styles.footer}">This notification was generated automatically from the website.</div>
</div>`;
};

const buildTellUsUserEmail = (d) => `
<div style="${styles.wrapper}">
  <div style="${styles.header}">
    <h1 style="${styles.headerH1}">We've received your project scope.</h1>
    <p style="${styles.headerSub}">Copper Studio</p>
  </div>
  <div style="${styles.body}">
    <p style="font-size:15px;color:#111111;margin:0 0 16px;">Hi ${esc(d.name)},</p>
    <p style="font-size:14px;color:#444444;line-height:1.7;margin:0 0 16px;">
      Thank you for sharing your project details with <strong>Copper Studio</strong>.
      We've received your scope and will review it carefully.
      Our team will get back to you within <strong>24 hours</strong>.
    </p>
    <p style="font-size:14px;color:#444444;margin:24px 0 0;">Warm regards,<br/><strong>Copper Studio Team</strong></p>
  </div>
  <div style="${styles.footer}">This is an automated confirmation. Please do not reply to this email.</div>
</div>`;

// ── Main function ─────────────────────────────────────────────

/**
 * Send 2 emails after a successful MongoDB insert:
 *   1. Team notification  → contact@thecopperstudio.com
 *   2. User confirmation  → the address the user submitted
 *
 * Fails silently — NEVER throws so the existing API response is unaffected.
 *
 * @param {"contact-enquiry"|"tell-us"} type
 * @param {object} data — the saved MongoDB document (Mongoose doc)
 */
const sendNotification = async (type, data) => {
  if (!process.env.RESEND_API_KEY) {
    console.warn("[Resend] RESEND_API_KEY not set — skipping email notification.");
    return;
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    if (type === "contact-enquiry") {

      await resend.emails.send({
        from:    FROM,
        to:      TEAM_EMAIL,
        subject: `New Contact Enquiry — ${esc(data.firstName)} ${esc(data.lastName)}`,
        html:    buildContactEnquiryTeamEmail(data),
      });

      await resend.emails.send({
        from:    FROM,
        to:      data.email,
        subject: `Copper Studio`,
        html:    buildContactEnquiryUserEmail(data),
      });

    } else if (type === "tell-us") {

      await resend.emails.send({
        from:    FROM,
        to:      TEAM_EMAIL,
        subject: `New Scope Builder Submission — ${esc(data.name)}`,
        html:    buildTellUsTeamEmail(data),
      });

      await resend.emails.send({
        from:    FROM,
        to:      data.email,
        subject: `Copper Studio`,
        html:    buildTellUsUserEmail(data),
      });

    }

    console.log(`[Resend] Both emails sent for ${type}`);
  } catch (err) {
    // Never rethrow — email failure must not affect the API response
    console.error(`[Resend] Failed to send email for ${type}:`, err.message);
  }
};

module.exports = { sendNotification };
