import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Testimonials from "./components/Testimonials/Testimonials";
import CTA from "./components/CTA/CTA";

import Home from "./pages/Home/Home";
import FeaturesPage from "./pages/FeaturesPage/FeaturesPage";
import Interview from "./pages/Interview/Interview";
import CareerCoach from "./pages/CareerCoach/CareerCoach";
import Contact from "./pages/Contact/Contact";

import Login from "./pages/Home/Login/Login";
import Register from "./pages/Home/Register/Register";
import ForgotPassword from "./pages/Home/ForgotPassword/ForgotPassword";
import Dashboard from "./pages/Home/Dashboard/Dashboard";

import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/career-coach" element={<CareerCoach />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;