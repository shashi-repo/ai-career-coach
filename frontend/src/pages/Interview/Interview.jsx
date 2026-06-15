import "./Interview.css";

function Interview() {
  return (
    <div className="interview-page">

      <div className="interview-header">
        <h1>AI Mock Interview</h1>

        <p>
          Practice technical and HR interviews powered by AI.
          Improve confidence, communication, and job readiness.
        </p>
      </div>

      <div className="interview-grid">

        <div className="interview-card">
          <h3>Technical Interview</h3>
          <p>
            Practice coding, DSA, DBMS, OS and OOPs questions.
          </p>
          <button>Start Practice</button>
        </div>

        <div className="interview-card">
          <h3>HR Interview</h3>
          <p>
            Prepare for behavioral and HR round questions.
          </p>
          <button>Start Practice</button>
        </div>

        <div className="interview-card">
          <h3>Mock Assessment</h3>
          <p>
            Simulate a complete interview experience.
          </p>
          <button>Start Assessment</button>
        </div>

      </div>

    </div>
  );
}

export default Interview;