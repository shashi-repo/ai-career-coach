const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ✅ Middleware
app.use(cors({
  origin: "*",   // allow frontend (Vercel) to connect
  credentials: true
}));

app.use(express.json());

// ✅ Routes
app.use("/api/auth", require("./routes/authRoutes"));

// ✅ Health check route
app.get("/", (req, res) => {
  res.send("Backend Running Successfully 🚀");
});

// ✅ PORT (IMPORTANT for Render)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});