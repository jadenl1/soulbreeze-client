import logo from "../assets/soulbreeze-logo.png";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="hero">
      <img src={logo} alt="Soulbreeze" className="hero-logo" />
      <h1 className="hero-heading">
        Feel the<br />Breeze
      </h1>
      <div className="hero-buttons">
        <button className="btn btn-filled">Our Locations</button>
        <button className="btn btn-outline">Get Us in Your Store</button>
      </div>
      <p className="hero-subtext">
        Real ingredients, real flavor,<br />directly from the source.
      </p>
      <div className="hero-bottom-box" />
    </div>
  );
}
