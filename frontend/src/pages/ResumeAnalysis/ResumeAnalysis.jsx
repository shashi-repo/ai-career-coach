import { useState } from "react";
import { uploadResume } from "../../services/resumeService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function ResumeAnalysis() {
  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [resumeText, setResumeText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    try {
      if (!file) {
        toast.warning("Please select a PDF or DOCX file.");
        return;
      }

      const formData = new FormData();
      formData.append("resume", file);

      setLoading(true);

      const res = await uploadResume(formData);

      setResumeText(res.data.text || "");

      toast.success("Resume uploaded successfully!");

      setTimeout(() => {
        navigate("/dashboard");
      }, 1200);

    } catch (error) {
      console.error(error);

      if (error.response) {
        toast.error(
          error.response.data.message ||
          error.response.data.error ||
          "Upload failed."
        );
      } else {
        toast.error("Unable to connect to the server.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">

      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-lg">

        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Resume Analysis
        </h1>

        <input
          type="file"
          accept=".pdf,.docx"
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full border rounded-lg p-3 mb-4"
        />

        {file && (
          <div className="mb-4 text-sm text-gray-600">
            <strong>Selected File:</strong> {file.name}
          </div>
        )}

        <button
          onClick={handleUpload}
          disabled={loading}
          className={`w-full py-3 rounded-lg text-white font-semibold transition ${
            loading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Uploading..." : "Upload Resume"}
        </button>

        {resumeText && (
          <div className="mt-6">
            <h2 className="font-bold text-lg mb-2">
              Extracted Resume Text
            </h2>

            <div className="border rounded-lg p-4 bg-gray-50 max-h-72 overflow-auto whitespace-pre-wrap text-sm">
              {resumeText}
            </div>
          </div>
        )}
      </div>

    </div>
  );
}

export default ResumeAnalysis;