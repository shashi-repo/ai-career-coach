import "./ForgotPassword.css";

function ForgotPassword() {
  return (
    <div className="forgot-container">
      <div className="forgot-card">
        <h2>Forgot Password</h2>

        <p className="forgot-text">
          Enter your registered email address and we'll send you a password reset link.
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          className="forgot-input"
        />

        <button className="forgot-btn">
          Reset Password
        </button>
      </div>
    </div>
  );
}

export default ForgotPassword;