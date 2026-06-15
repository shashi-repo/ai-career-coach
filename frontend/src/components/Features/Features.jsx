import "./Features.css";
function Features() {
  return (
    <section className="features">

      <h2>Features</h2>

      <div className="cards">

        <div className="card">
          <h3>AI Mock Interview</h3>
          <p>Practice technical interviews.</p>
        </div>

        <div className="card">
          <h3>Resume Analysis</h3>
          <p>Get ATS score instantly.</p>
        </div>

        <div className="card">
          <h3>Career Coach</h3>
          <p>Receive career guidance.</p>
        </div>

      </div>

    </section>
  );
}

export default Features;