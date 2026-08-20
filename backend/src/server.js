require("dotenv").config();

const express = require("express");
const cors    = require("cors");
const connectDB = require("./config/db");

const tellUsRoutes          = require("./routes/TellUsRoutes");
const contactEnquiryRoutes  = require("./routes/ContactEnquiryRoutes");

const app = express();

// ── Middleware ────────────────────────────────────────────────
const allowedOrigins = [
  "http://localhost:5173",
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    // allow requests with no origin (curl, Postman, server-to-server)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    // return false instead of throwing — avoids empty response crashes
    return callback(null, false);
  },
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ── Routes ───────────────────────────────────────────────────
app.use("/api/tell-us", tellUsRoutes);
app.use("/api/contact-enquiry", contactEnquiryRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Copper Studio API is running." });
});

// ── Start (local only — Vercel uses module.exports) ──────────
connectDB().then(() => {
  const PORT = process.env.PORT || 5000;
  if (process.env.VERCEL !== "1") {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  }
});

module.exports = app;
