import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";
import logo from "../assets/soulbreeze-logo-light.png";
import agaveBlue from "../assets/agave-blue-transparent.png";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-bg" style={{ backgroundImage: `url(${agaveBlue})` }} />
      <div className="footer-content">
        <img src={logo} alt="Soul Breeze" className="footer-logo" />

        <div className="footer-col">
          <span className="footer-col-title">EXPLORE</span>
          <Link to="/products" className="footer-link">Products</Link>
          <Link to="/locations" className="footer-link">Locations</Link>
          <a href="#our-story" className="footer-link">Our Story</a>
          <a href="#ingredients" className="footer-link">Ingredients</a>
        </div>

        <div className="footer-col">
          <span className="footer-col-title">SUPPORT</span>
          <a href="#shipping" className="footer-link">Shipping</a>
          <a href="#contact" className="footer-link">Contact Us</a>
        </div>

        <div className="footer-col">
          <span className="footer-col-title">SOCIAL</span>
          <div className="footer-social">
            <a href="#" aria-label="Instagram" className="footer-icon">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Facebook" className="footer-icon">
              <FaFacebook />
            </a>
            <a href="#" aria-label="X" className="footer-icon">
              <FaXTwitter />
            </a>
          </div>
        </div>

        <div className="footer-meta">
          <span>© 2026 Soul Breeze</span>
          <span>Drink Responsibly.</span>
        </div>
      </div>
    </footer>
  );
}
