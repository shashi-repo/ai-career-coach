const fs = require("fs");
const pdfParse = require("pdf-parse");
const mammoth = require("mammoth");
const db = require("../config/db");

// =======================
// Upload Resume
// =======================
exports.uploadResume = async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    console.log("========== UPLOAD DEBUG ==========");
    console.log("FILE NAME :", file.originalname);
    console.log("FILE PATH :", file.path);
    console.log("MIME TYPE :", file.mimetype);
    console.log("==================================");

    // Save resume in database first
    db.query(
      "INSERT INTO resumes (user_id, file_name, file_path) VALUES (?, ?, ?)",
      [1, file.originalname, file.path],
      async (err, result) => {
        if (err) {
          console.error("INSERT ERROR:", err);

          return res.status(500).json({
            success: false,
            message: "Database Insert Failed",
            error: err.message,
          });
        }

        let text = "";

        try {
          if (file.mimetype === "application/pdf") {
            const dataBuffer = fs.readFileSync(file.path);
            const data = await pdfParse(dataBuffer);
            text = data.text;
          }

          else if (
            file.mimetype ===
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          ) {
            const result = await mammoth.extractRawText({
              path: file.path,
            });

            text = result.value;
          }

        } catch (parseError) {
          console.log("Parsing Error:", parseError.message);

          // Don't stop upload if parsing fails
          text = "";
        }

        return res.status(200).json({
          success: true,
          message: "Resume uploaded successfully",
          text,
        });
      }
    );

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Upload Failed",
      error: error.message,
    });
  }
};

// =======================
// Get All Resumes
// =======================
exports.getResumes = (req, res) => {

  db.query(
    "SELECT * FROM resumes ORDER BY uploaded_at DESC",
    (err, result) => {

      if (err) {
        return res.status(500).json({
          success: false,
          error: err.message,
        });
      }

      return res.status(200).json(result);

    }
  );

};

// =======================
// Delete Resume
// =======================
exports.deleteResume = (req, res) => {

  const { id } = req.params;

  db.query(
    "SELECT * FROM resumes WHERE id = ?",
    [id],
    (err, result) => {

      if (err) {
        return res.status(500).json({
          success: false,
          error: err.message,
        });
      }

      if (result.length === 0) {
        return res.status(404).json({
          success: false,
          message: "Resume not found",
        });
      }

      const resume = result[0];

      db.query(
        "DELETE FROM resumes WHERE id = ?",
        [id],
        (deleteErr) => {

          if (deleteErr) {
            return res.status(500).json({
              success: false,
              error: deleteErr.message,
            });
          }

          // Delete uploaded file
          fs.unlink(resume.file_path, (fileErr) => {
            if (fileErr) {
              console.log("File delete warning:", fileErr.message);
            }
          });

          return res.status(200).json({
            success: true,
            message: "Resume deleted successfully",
          });

        }
      );

    }
  );

};