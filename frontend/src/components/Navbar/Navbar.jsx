import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
   <nav className="navbar">

  <div className="logo">
  <Link to="/">AI Career Coach</Link>
</div>

  {/* Desktop Menu */}
  <ul className="nav-links desktop-menu">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/features">Features</Link></li>
    <li><Link to="/interview">Interview</Link></li>
    <li><Link to="/career-coach">Career Coach</Link></li>
    <li><Link to="/contact">Contact</Link></li>

  {isLoggedIn ? (
  <li>
    <button className="navbar-login-btn" onClick={handleLogout}>
      Logout
    </button>
  </li>
) : (
  <li>
    <Link to="/login" className="navbar-login-btn">
      Login
    </Link>
  </li>
)}
  </ul>

  {/* Hamburger */}
  <div
    className="hamburger" onClick={() => setMenuOpen(!menuOpen)}
  >
    {menuOpen ? <FiX /> : <FiMenu />}
  </div>

  {/* Mobile Sidebar */}
  <div className={`mobile-sidebar ${menuOpen ? "active" : ""}`}>

    <Link to="/" onClick={() => setMenuOpen(false)}>
      Home
    </Link>

    <Link to="/features" onClick={() => setMenuOpen(false)}>
      Features
    </Link>

    <Link to="/interview" onClick={() => setMenuOpen(false)}>
      Interview
    </Link>

    <Link to="/career-coach" onClick={() => setMenuOpen(false)}>
      Career Coach
    </Link>

    <Link to="/contact" onClick={() => setMenuOpen(false)}>
      Contact
    </Link>

    {isLoggedIn ? (
  <button
    className="sidebar-login-btn"
    onClick={() => {
      handleLogout();
      setMenuOpen(false);
    }}
  >
    Logout
  </button>
) : (
  <Link to="/login" className="sidebar-login-btn" onClick={() => setMenuOpen(false)} >
    Login
  </Link>
)}

  </div>

  {menuOpen && (
    <div className="overlay" onClick={() => setMenuOpen(false)}>
    </div>
  )}

</nav>
  );
}

export default Navbar;