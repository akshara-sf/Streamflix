import React from "react";
import "./Footer.css";
 
const Footer = () => {
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
            <li><a href="#">Movies</a></li>
            <li><a href="#">TV Shows</a></li>
            <li><a href="#">Web Series</a></li>
            <li><a href="#">Top Rated</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Help</h4>
          <ul>
            <li><a href="#">Support Center</a></li>
            <li><a href="#">Account</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Feedback</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="footer-socials">
            <a href="#"><i class="fa-brands fa-instagram"></i> streamf_</a>
            <a href="#"><i class="fa-brands fa-facebook"></i> stream_flix</a>
            <a href="#"><i class="fa-brands fa-square-twitter"></i> streamFlix</a>
            <a href="#"><i class="fa-brands fa-google"></i> steamflix_official</a>
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
