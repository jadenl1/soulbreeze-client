import { NavLink } from "react-router-dom";
import logo from "../assets/soulbreeze-logo.png";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Soulbreeze" className="navbar-logo" />
        <NavLink to="/" end className="navbar-link">HOME</NavLink>
        <NavLink to="/products" className="navbar-link">PRODUCTS</NavLink>
        <NavLink to="/locations" className="navbar-link">LOCATIONS</NavLink>
      </div>
      <div className="navbar-right">
        <NavLink to="/contact" className="navbar-link navbar-link-contact">CONTACT US</NavLink>
      </div>
    </nav>
  );
}
