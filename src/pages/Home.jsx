import logo from "../assets/soulbreeze-logo.png";
import agaveClassic from "../assets/agave-classic.jpg";
import agavePeach from "../assets/agave-peach.jpg";
import agaveRaspberry from "../assets/agave-raspberry.jpg";
import agaveYellow from "../assets/agave-yellow.jpg";
import can from "../assets/can-transparent.png";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="hero">
      <div className="hero-content">
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
      </div>
      <div className="hero-ribbon">
        <div className="ribbon-segment ribbon-1" style={{ backgroundImage: `url(${agaveClassic})` }}>
          <img src={can} alt="" className="ribbon-can" />
        </div>
        <div className="ribbon-segment ribbon-2" style={{ backgroundImage: `url(${agavePeach})` }}>
          <img src={can} alt="" className="ribbon-can" />
        </div>
        <div className="ribbon-segment ribbon-3" style={{ backgroundImage: `url(${agaveRaspberry})` }}>
          <img src={can} alt="" className="ribbon-can" />
        </div>
        <div className="ribbon-segment ribbon-4" style={{ backgroundImage: `url(${agaveYellow})` }}>
          <img src={can} alt="" className="ribbon-can" />
        </div>
      </div>
    </div>
  );
}
