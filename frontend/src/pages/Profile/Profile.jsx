import { useState } from "react";
import "./Profile.css";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [profile, setProfile] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "",
    college: "",
    skills: "",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    alert("Profile Updated Successfully");
  };

  return (
    <div className="profile-container">
      <div className="profile-card">

        <h1>👤 My Profile</h1>

        <div className="profile-form">

          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            placeholder="Full Name"
          />

          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            placeholder="Email"
          />

          <input
            type="text"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            placeholder="Phone Number"
          />

          <input
            type="text"
            name="college"
            value={profile.college}
            onChange={handleChange}
            placeholder="College Name"
          />

          <textarea
            name="skills"
            value={profile.skills}
            onChange={handleChange}
            placeholder="Skills (Java, React, Node, SQL)"
          />

          <button onClick={handleSave}>
            Save Profile
          </button>

        </div>

      </div>
    </div>
  );
}

export default Profile;