import "./Hero.css";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">

      <div className="hero-content">

        <span className="badge">
          🚀 AI-Powered Career Development
        </span>

        <h1>
          Crack Your Dream Job With Career Coach
        </h1>

        <p>
          Practice real interview questions, improve your resume,
          discover skill gaps, and receive personalized career guidance
          powered by Artificial Intelligence.
        </p>

        <div className="hero-buttons">

          <button
            className="primary-btn"
            onClick={() => navigate("/interview")}
          >
            Start Interview
          </button>

          <button
            className="secondary-btn"
            onClick={() => navigate("/features")}
          >
            Explore Features
          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;