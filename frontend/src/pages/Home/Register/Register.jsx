import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../../../services/authService";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await registerUser({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      alert("Registration Successful");
      navigate("/login");
    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Registration Failed"
      );
    }
  };

  return (
    <div className="register-page">
      <div className="register-card">

        <div className="register-header">
          <h1>AI Career Coach</h1>
          <h2>Create Your Account 🚀</h2>
          <p>Start your journey towards a successful career.</p>
        </div>

        <form className="register-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
          />

          <button type="submit" className="register-btn">
            Create Account
          </button>

        </form>

        <p className="login-text">
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Register;