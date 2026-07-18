const router = require("express").Router();
const multer = require("multer");
const path = require("path");

const {
  uploadResume,
  getResumes,
  deleteResume,
} = require("../controllers/resumeController");

// Multer Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// Allow only PDF & DOCX
const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    "application/pdf",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only PDF and DOCX files are allowed."), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
});

// ====================
// Routes
// ====================

// Upload Resume
router.post(
  "/upload",
  upload.single("resume"),
  uploadResume
);

// Get All Resumes
router.get("/", getResumes);

// Delete Resume
router.delete("/:id", deleteResume);

module.exports = router;