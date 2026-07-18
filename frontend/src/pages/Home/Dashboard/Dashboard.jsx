import "./Dashboard.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getResumes,
  deleteResume,
} from "../../../services/resumeService";

import { FiTrash2, FiEye } from "react-icons/fi";
import { toast } from "react-toastify";

function Dashboard() {

  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    loadResumes();
  }, []);

  const loadResumes = async () => {
    try {
      const res = await getResumes();
      setResumes(res.data);
    } catch (error) {
      console.log(error);
      toast.error("Unable to load resumes");
    }
  };

  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this resume?"
    );

    if (!confirmDelete) return;

    try {

      await deleteResume(id);

      toast.success("Resume deleted successfully");

      loadResumes();

    } catch (error) {

      console.log(error);

      toast.error("Unable to delete resume");

    }
  };

  return (
    <div className="dashboard">

      <div className="dashboard-header">
        <h1>Dashboard</h1>
      </div>

      <div className="dashboard-grid">

        <Link to="/profile" className="dashboard-link">
          <div className="dashboard-card">
            <h3>👤 Profile</h3>
          </div>
        </Link>

        <Link
          to="/resume-analysis"
          className="dashboard-link"
        >
          <div className="dashboard-card">
            <h3>📄 Resume Analysis</h3>
          </div>
        </Link>

        <div className="dashboard-card">
          <h3>💼 Job Matches</h3>
        </div>

        <div className="dashboard-card">
          <h3>🎯 Interview Preparation</h3>
        </div>

        <div className="dashboard-card">
          <h3>🤖 AI Career Coach</h3>
        </div>

      </div>

      <div className="resume-section">

        <h2>Uploaded Resumes</h2>

        {resumes.length === 0 ? (

          <p>No resumes uploaded yet.</p>

        ) : (

          resumes.map((resume) => (

            <div
              key={resume.id}
              className="resume-card"
            >

              <div>

                <h4>📄 {resume.file_name}</h4>

              </div>

              <div className="resume-buttons">

                <a
                  href={`http://localhost:5000/${resume.file_path}`}
                  target="_blank"
                  rel="noreferrer"
                  className="view-btn"
                >
                  <FiEye />
                  View
                </a>

                <button
                  className="delete-btn"
                  onClick={() =>
                    handleDelete(resume.id)
                  }
                >
                  <FiTrash2 />
                  Delete
                </button>

              </div>

            </div>

          ))

        )}

      </div>

    </div>
  );
}

export default Dashboard;