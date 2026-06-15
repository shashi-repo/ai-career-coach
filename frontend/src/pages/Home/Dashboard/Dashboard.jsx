import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      <div className="dashboard-header">
        <h1>Dashboard</h1>
      </div>

      <div className="dashboard-grid">

        <div className="dashboard-card">
          <h3>Profile</h3>
        </div>

        <div className="dashboard-card">
          <h3>Resume Analysis</h3>
        </div>

        <div className="dashboard-card">
          <h3>Job Matches</h3>
        </div>

        <div className="dashboard-card">
          <h3>Interview Preparation</h3>
        </div>

        <div className="dashboard-card">
          <h3>AI Career Coach</h3>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;