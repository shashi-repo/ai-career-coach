import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home/Home";
import FeaturesPage from "./pages/FeaturesPage/FeaturesPage";
import Interview from "./pages/Interview/Interview";
import CareerCoach from "./pages/CareerCoach/CareerCoach";
import Contact from "./pages/Contact/Contact";

import Login from "./pages/Home/Login/Login";
import Register from "./pages/Home/Register/Register";
import ForgotPassword from "./pages/Home/ForgotPassword/ForgotPassword";
import Dashboard from "./pages/Home/Dashboard/Dashboard";

import ResumeAnalysis from "./pages/ResumeAnalysis/ResumeAnalysis";
import Profile from "./pages/Profile/Profile";

import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/career-coach" element={<CareerCoach />} />
        <Route path="/contact" element={<Contact />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/resume-analysis"
          element={
            <ProtectedRoute>
              <ResumeAnalysis />
            </ProtectedRoute>
          }
        />
      </Routes>

      {/* Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </>
  );
}

export default App;