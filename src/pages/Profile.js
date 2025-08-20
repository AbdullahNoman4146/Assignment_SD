import React from "react";
import "./Profile.css";
import profilePic from "../images/pic.jpg";

const Profile = () => {
  return (
    <div className="profile-card">
      <img src={profilePic} alt="profile" className="profile-pic" />
      <h2>ABDULLAH AL NOMAN</h2>
      <p>abdullaalnoman270@gmail.com</p>
      <p>From 2025-01-01</p>
      <hr></hr>
      <hr></hr>
      <p>A passionate writer and developer, Abdullah loves to explore new ideas and share his thoughts through articles. He enjoys coding, reading, and traveling.</p>
    </div>
  );
};

export default Profile;
