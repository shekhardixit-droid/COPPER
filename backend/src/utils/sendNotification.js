const { Resend } = require("resend");

const TEAM_EMAIL = "shekhar.dixit@datacircles.in";
const FROM       = "Copper Studio <hello@thecopperstudio.com>";

// ── Helpers ───────────────────────────────────────────────────

const esc = (str) => {
  if (str === null || str === undefined) return "—";
  return String(str)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
};

const serviceName = (item) => {
  if (!item) return null;
  if (typeof item === "string") return item;
  if (typeof item === "object") return item.name || item.label || item.title || item.value || String(item);
  return String(item);
};

const formatIST = (date) => {
  try {
    return new Date(date).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata", day: "numeric", month: "short",
      year: "numeric", hour: "numeric", minute: "2-digit", hour12: true,
    });
  } catch (_) { return String(date); }
};

// ── Compact row ───────────────────────────────────────────────
const r = (label, value) =>
  `<tr><td style="color:#888;font-size:13px;padding:5px 8px;white-space:nowrap;vertical-align:top;">${label}</td><td style="font-size:13px;color:#111;padding:5px 8px;">${value}</td></tr>`;

// ── Email builders ────────────────────────────────────────────

const contactTeam = (d) => `<!DOCTYPE html><html><body style="margin:0;padding:16px;font-family:Arial,sans-serif;background:#f4f4f4;">
<table width="560" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:8px;overflow:hidden;margin:0 auto;">
<tr><td style="background:#111;padding:20px 24px;"><h2 style="margin:0;color:#fff;font-size:18px;">New Contact Enquiry</h2></td></tr>
<tr><td style="padding:20px 24px;">
<table cellpadding="0" cellspacing="0">
${r("Name",    esc(d.firstName)+" "+esc(d.lastName))}
${r("Email",   esc(d.email))}
${r("Phone",   esc(d.phone||"—"))}
${r("Date",    esc(formatIST(d.createdAt)))}
</table>
<p style="font-size:12px;color:#888;margin:16px 0 4px;">Message</p>
<p style="font-size:13px;color:#333;border-left:3px solid #e05c18;padding-left:10px;margin:0;">${esc(d.message)}</p>
</td></tr>
<tr><td style="background:#f0f0f0;padding:10px 24px;font-size:11px;color:#aaa;text-align:center;">Copper Studio — automated notification</td></tr>
</table></body></html>`;

const contactUser = (d) => `<!DOCTYPE html><html><body style="margin:0;padding:16px;font-family:Arial,sans-serif;background:#f4f4f4;">
<table width="560" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:8px;overflow:hidden;margin:0 auto;">
<tr><td style="background:#111;padding:20px 24px;"><h2 style="margin:0;color:#fff;font-size:18px;">Message Received</h2></td></tr>
<tr><td style="padding:20px 24px;">
<p style="font-size:14px;color:#111;margin:0 0 12px;">Hi ${esc(d.firstName)},</p>
<p style="font-size:14px;color:#444;margin:0 0 12px;">Thank you for reaching out to <strong>Copper Studio</strong>. We've received your message and will get back to you within <strong>24 hours</strong>.</p>
<p style="font-size:14px;color:#444;margin:0;">Warm regards,<br/><strong>Copper Studio Team</strong></p>
</td></tr>
<tr><td style="background:#f0f0f0;padding:10px 24px;font-size:11px;color:#aaa;text-align:center;">This is an automated confirmation. Please do not reply.</td></tr>
</table></body></html>`;

const tellUsTeam = (d) => {
  const services = Array.isArray(d.selectedServices) && d.selectedServices.length > 0
    ? d.selectedServices.map((s) => `• ${esc(serviceName(s))}`).join("<br/>")
    : "—";
  return `<!DOCTYPE html><html><body style="margin:0;padding:16px;font-family:Arial,sans-serif;background:#f4f4f4;">
<table width="560" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:8px;overflow:hidden;margin:0 auto;">
<tr><td style="background:#111;padding:20px 24px;"><h2 style="margin:0;color:#fff;font-size:18px;">New Scope Builder Submission</h2></td></tr>
<tr><td style="padding:20px 24px;">
<p style="font-size:11px;font-weight:700;color:#888;letter-spacing:1px;margin:0 0 8px;">CONTACT</p>
<table cellpadding="0" cellspacing="0">
${r("Name",    esc(d.name))}
${r("Email",   esc(d.email))}
${r("Phone",   esc(d.phone))}
${r("Company", esc(d.company))}
</table>
<p style="font-size:11px;font-weight:700;color:#888;letter-spacing:1px;margin:16px 0 8px;">PROJECT</p>
<table cellpadding="0" cellspacing="0">
${r("Industry",        esc(d.industry||"—"))}
${r("What To Build",   esc(d.whatToBuild||"—"))}
${r("What Brings You", esc(d.whatBrings||"—"))}
${r("Services",        services)}
${r("Date",            esc(formatIST(d.createdAt)))}
</table>
<p style="font-size:12px;color:#888;margin:16px 0 4px;">Message</p>
<p style="font-size:13px;color:#333;border-left:3px solid #e05c18;padding-left:10px;margin:0;">${esc(d.message)}</p>
</td></tr>
<tr><td style="background:#f0f0f0;padding:10px 24px;font-size:11px;color:#aaa;text-align:center;">Copper Studio — automated notification</td></tr>
</table></body></html>`;
};

const tellUsUser = (d) => `<!DOCTYPE html><html><body style="margin:0;padding:16px;font-family:Arial,sans-serif;background:#f4f4f4;">
<table width="560" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:8px;overflow:hidden;margin:0 auto;">
<tr><td style="background:#111;padding:20px 24px;"><h2 style="margin:0;color:#fff;font-size:18px;">Scope Received</h2></td></tr>
<tr><td style="padding:20px 24px;">
<p style="font-size:14px;color:#111;margin:0 0 12px;">Hi ${esc(d.name)},</p>
<p style="font-size:14px;color:#444;margin:0 0 12px;">Thank you for sharing your project details with <strong>Copper Studio</strong>. We've received your scope and will review it carefully. Our team will get back to you within <strong>24 hours</strong>.</p>
<p style="font-size:14px;color:#444;margin:0;">Warm regards,<br/><strong>Copper Studio Team</strong></p>
</td></tr>
<tr><td style="background:#f0f0f0;padding:10px 24px;font-size:11px;color:#aaa;text-align:center;">This is an automated confirmation. Please do not reply.</td></tr>
</table></body></html>`;

// ── Main ──────────────────────────────────────────────────────

const sendNotification = async (type, data) => {
  if (!process.env.RESEND_API_KEY) {
    console.warn("[Resend] RESEND_API_KEY not set — skipping.");
    return;
  }
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    if (type === "contact-enquiry") {
      await resend.emails.send({ from: FROM, to: TEAM_EMAIL, subject: `New Contact Enquiry — ${esc(data.firstName)} ${esc(data.lastName)}`, html: contactTeam(data) });
      await resend.emails.send({ from: FROM, to: data.email, subject: `Copper Studio`, html: contactUser(data) });
    } else if (type === "tell-us") {
      await resend.emails.send({ from: FROM, to: TEAM_EMAIL, subject: `New Scope Builder — ${esc(data.name)}`, html: tellUsTeam(data) });
      await resend.emails.send({ from: FROM, to: data.email, subject: `Copper Studio`, html: tellUsUser(data) });
    }
    console.log(`[Resend] Both emails sent for ${type}`);
  } catch (err) {
    console.error(`[Resend] Failed for ${type}:`, err.message);
  }
};

module.exports = { sendNotification };
