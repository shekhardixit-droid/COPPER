require("dotenv").config();

const express = require("express");
const cors    = require("cors");
const connectDB = require("./config/db");

const tellUsRoutes          = require("./routes/TellUsRoutes");
const contactEnquiryRoutes  = require("./routes/ContactEnquiryRoutes");

const app  = express();
const PORT = process.env.PORT || 5000;

// ── Middleware ────────────────────────────────────────────────
app.use(cors({
  origin: "http://localhost:5173",
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ── Routes ───────────────────────────────────────────────────
app.use("/api/tell-us", tellUsRoutes);
app.use("/api/contact-enquiry", contactEnquiryRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Copper Studio API is running." });
});

// ── Start ────────────────────────────────────────────────────
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
