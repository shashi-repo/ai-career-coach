import "./CareerCoach.css";

function CareerCoach() {
  return (
    <div className="career-page">

      <div className="career-header">
        <h1>AI Career Coach</h1>

        <p>
          Get personalized career guidance, roadmap suggestions,
          skill recommendations, and job preparation strategies.
        </p>
      </div>

      <div className="career-form">

        <input
          type="text"
          placeholder="Enter your current skill or role"
        />

        <textarea
          placeholder="Describe your career goals..."
          rows="5"
        ></textarea>

        <button>Generate Career Roadmap</button>

      </div>

      <div className="career-result">

        <h2>Your AI Career Plan</h2>

        <div className="result-card">
          <p>
            Your personalized career roadmap will appear here.
          </p>
        </div>

      </div>

    </div>
  );
}

export default CareerCoach;