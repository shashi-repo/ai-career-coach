import "./FeaturesPage.css";
import featuresData from "../../data/featuresData";

function FeaturesPage() {
  return (
    <div className="features-page">

      <div className="page-header">
        <h1>Our Features</h1>
        <p>
          Everything you need to crack interviews and
          accelerate your career growth.
        </p>
      </div>

      <div className="feature-grid">
        {featuresData.map((feature) => (
          <div className="feature-card" key={feature.id}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default FeaturesPage;