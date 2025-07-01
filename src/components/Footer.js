import React from "react";
import "./Footer.css";

const Footer = () => {
  const handleLinkClick = (e) => e.preventDefault();

  return (
    <footer className="footer">
      <div className="footer-sections">

        <div className="footer-column">
          <h3>Streamflix</h3>
          <p>Your go-to platform for movies, web series & TV shows worldwide.</p>
        </div>

        <div className="footer-column">
          <h4>Browse</h4>
          <ul>
            <li><a href="#!" onClick={handleLinkClick}>Movies</a></li>
            <li><a href="#!" onClick={handleLinkClick}>TV Shows</a></li>
            <li><a href="#!" onClick={handleLinkClick}>Web Series</a></li>
            <li><a href="#!" onClick={handleLinkClick}>Top Rated</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#!" onClick={handleLinkClick}>About Us</a></li>
            <li><a href="#!" onClick={handleLinkClick}>Careers</a></li>
            <li><a href="#!" onClick={handleLinkClick}>Contact</a></li>
            <li><a href="#!" onClick={handleLinkClick}>Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Help</h4>
          <ul>
            <li><a href="#!" onClick={handleLinkClick}>Support Center</a></li>
            <li><a href="#!" onClick={handleLinkClick}>Account</a></li>
            <li><a href="#!" onClick={handleLinkClick}>FAQs</a></li>
            <li><a href="#!" onClick={handleLinkClick}>Feedback</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="footer-socials">
            <a href="#!" onClick={handleLinkClick}><i className="fa-brands fa-instagram"></i> streamf_</a>
            <a href="#!" onClick={handleLinkClick}><i className="fa-brands fa-facebook"></i> stream_flix</a>
            <a href="#!" onClick={handleLinkClick}><i className="fa-brands fa-square-twitter"></i> streamFlix</a>
            <a href="#!" onClick={handleLinkClick}><i className="fa-brands fa-google"></i> steamflix_official</a>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Streamflix. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
