const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

// ✅ Middleware
app.use(cors({
  origin: "*",   // allow frontend (Vercel) to connect
  credentials: true
}));

app.use(express.json());


app.use(
  "/uploads",
  express.static(
    path.join(__dirname, "uploads")
  )
);
// ✅ Routes
app.use("/api/auth", require("./routes/authRoutes"));

app.use( "/api/resume",require("./routes/resumeRoutes"));

// ✅ Health check route
app.get("/", (req, res) => {
  res.send("Backend Running Successfully 🚀");
});

// ✅ PORT (IMPORTANT for Render)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});