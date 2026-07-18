import axios from "axios";

const API_URL = "http://localhost:5000/api/resume";

// Upload Resume
export const uploadResume = async (formData) => {
  return await axios.post(
    `${API_URL}/upload`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
};

// Get All Resumes
export const getResumes = async () => {
  return await axios.get(API_URL);
};

// Delete Resume
export const deleteResume = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};