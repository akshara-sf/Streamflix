import React from "react";
import "./Navbar.css";

const Navbar = ({ onSearch }) => {
  return (
    <nav className="navbar">
      <div className="logo">Streamflix</div>

      <div className="nav-middle">
        <input
          type="text"
          placeholder="Search..."
          className="search-bar"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      <div className="nav-right">
        <button className="join-btn">Join Streamflix</button>
        <div className="profile-icon">👤</div>
      </div>
    </nav>
  );
};

export default Navbar;
