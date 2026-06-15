import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../../../services/authService";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser(formData);

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert("Login Successful");

      navigate("/dashboard");
    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-header">
          <h1>AI Career Coach</h1>
          <h2>Welcome Back 👋</h2>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleChange}
          />

          <button
            type="submit"
            className="login-submit-btn"
          >
            Sign In
          </button>

        </form>

        <p className="register-text">
          Don't have an account?
          <Link to="/register">
            Register Now
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;