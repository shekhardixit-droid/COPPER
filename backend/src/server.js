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
  "https://thecopperstudio.com",
  "https://www.thecopperstudio.com",
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    // allow requests with no origin (server-to-server, curl, Postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error(`CORS: origin ${origin} not allowed`));
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

// Handle OPTIONS preflight explicitly so it never falls through to routes
app.options("*", cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error(`CORS: origin ${origin} not allowed`));
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ── DB middleware — connect before every request ──────────────
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    return res.status(500).json({ success: false, message: "Database connection failed." });
  }
});

// ── Routes ───────────────────────────────────────────────────
app.use("/api/tell-us", tellUsRoutes);
app.use("/api/contact-enquiry", contactEnquiryRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Copper Studio API is running." });
});

// ── Start server ─────────────────────────────────────────────
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => console.log(`Server running on port ${PORT}`));

module.exports = app;
