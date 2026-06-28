import { FaInstagram, FaTiktok } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import SocialGallery from "../components/SocialGallery";
import logo from "../assets/soulbreeze-logo.png";
import agaveClassic from "../assets/agave-classic.jpg";
import agavePeach from "../assets/agave-peach.jpg";
import agaveRaspberry from "../assets/agave-raspberry.jpg";
import agaveYellow from "../assets/agave-yellow.jpg";
import can from "../assets/can-transparent.png";
import agaveBlue from "../assets/agave-blue-transparent.png";
import cheers from "../assets/Desktop-Cheers.jpg";
import "../styles/Home.css";

export default function Home() {
	return (
		<>
			<div className="hero">
				<div className="hero-content">
					<img
						src={logo}
						alt="Soulbreeze"
						className="hero-logo"
						data-aos="fade-up"
						data-aos-delay="0"
					/>
					<div className="hero-callouts" data-aos="fade-up" data-aos-delay="100">
						<span>Premium Tequila</span>
						<span className="hero-callout-dot">·</span>
						<span>Brewed Tea</span>
						<span className="hero-callout-dot">·</span>
						<span>Refreshing Taste</span>
					</div>
					<div className="hero-buttons" data-aos="fade-up" data-aos-delay="200">
						<button className="btn btn-filled">
							<span className="btn-label">
								<span className="btn-label-top">Our Locations</span>
								<span className="btn-label-bottom">Our Locations</span>
							</span>
						</button>
						<Link to="/ambassador" className="btn btn-outline-bordered">
							<span className="btn-label">
								<span className="btn-label-top">Become an Ambassador</span>
								<span className="btn-label-bottom">Become an Ambassador</span>
							</span>
						</Link>
					</div>
				</div>
				<div className="hero-ribbon" data-aos="fade-up" data-aos-delay="300">
					<div
						className="ribbon-segment ribbon-1"
						style={{ backgroundImage: `url(${agaveClassic})` }}
					>
						<img src={can} alt="" className="ribbon-can" />
					</div>
					<div
						className="ribbon-segment ribbon-2"
						style={{ backgroundImage: `url(${agavePeach})` }}
					>
						<img src={can} alt="" className="ribbon-can" />
					</div>
					<div
						className="ribbon-segment ribbon-3"
						style={{ backgroundImage: `url(${agaveRaspberry})` }}
					>
						<img src={can} alt="" className="ribbon-can" />
					</div>
					<div
						className="ribbon-segment ribbon-4"
						style={{ backgroundImage: `url(${agaveYellow})` }}
					>
						<img src={can} alt="" className="ribbon-can" />
					</div>
				</div>
			</div>
			<SocialGallery />
			<section className="feature-grid">
				<div className="feature-row">
					<div
						className="feature-card feature-light"
						style={{ flex: 1.5 }}
						data-aos="fade-up"
						data-aos-delay="0"
					>
						<h2 className="feature-heading feature-heading-dark">Real Blue Agave</h2>
						<p className="feature-text feature-text-accent">
							Sourced from the heart of Jalisco, our tequila provides a smooth, earthy
							backbone to every flavor profile.
						</p>
					</div>
					<div
						className="feature-card feature-dark"
						style={{ flex: 1 }}
						data-aos="fade-up"
						data-aos-delay="120"
					>
						<div
							className="feature-card-bg"
							style={{ backgroundImage: `url(${agaveBlue})` }}
						/>
						<h2 className="feature-heading feature-heading-accent">Artisanal Tea</h2>
						<p className="feature-text feature-text-light">
							Steeped with love to preserve the flavor that makes soul breeze.
						</p>
					</div>
				</div>
				<div className="feature-row">
					<div
						className="feature-card feature-dark"
						style={{ flex: 1 }}
						data-aos="fade-up"
						data-aos-delay="0"
					>
						<div
							className="feature-card-bg"
							style={{ backgroundImage: `url(${agaveBlue})` }}
						/>
						<h2 className="feature-heading feature-heading-accent">Zero</h2>
						<p className="feature-text feature-text-light">Added sugars</p>
					</div>
					<div
						className="feature-card feature-light"
						style={{ flex: 2.2 }}
						data-aos="fade-up"
						data-aos-delay="120"
					>
						<h2 className="feature-heading feature-heading-dark">The Classic</h2>
						<p className="feature-text feature-text-accent">
							Our signature blend of Tequila + Black Tea + Lime
						</p>
					</div>
					<Link
						to="/products"
						className="feature-card feature-lineup-card"
						data-aos="fade-up"
						data-aos-delay="200"
					>
						<div className="feature-lineup-can-wrap">
							<img src={can} alt="" className="feature-lineup-can" />
						</div>
						<h2 className="feature-heading feature-heading-dark feature-lineup-heading">Our Lineup</h2>
						<MdArrowOutward className="feature-lineup-arrow" />
					</Link>
				</div>
			</section>
			<hr className="section-divider" />
			<section className="story-section">
				<div className="story-image-wrap" data-aos="fade-up" data-aos-delay="0">
					<img src={cheers} alt="Cheers with Soul Breeze cans" className="story-image" />
					<div className="story-badge">
						<span>EST. 2026</span>
						<span>EAST COAST</span>
					</div>
				</div>
				<div className="story-content">
					<span className="story-label" data-aos="fade-up" data-aos-delay="0">
						OUR STORY
					</span>
					<h2 className="story-heading" data-aos="fade-up" data-aos-delay="100">
						Created With Soul.
					</h2>
					<p className="story-text" data-aos="fade-up" data-aos-delay="180">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat.
					</p>
					<p className="story-text" data-aos="fade-up" data-aos-delay="240">
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
						eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
						sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
			</section>
			<hr className="section-divider" />
			<section className="ambassador-section">
				<span className="ambassador-label" data-aos="fade-up" data-aos-delay="0">
					FOLLOW THE BREEZE
				</span>
				<h2 className="ambassador-heading" data-aos="fade-up" data-aos-delay="100">
					Repping Soulbreeze.
				</h2>
				<p className="ambassador-text" data-aos="fade-up" data-aos-delay="180">
					Already posting about us? Tag us and join the crew. Ambassadors get early access
					to new flavors, exclusive merch, and a cut of every sale they bring in.
				</p>
				<div className="ambassador-social" data-aos="fade-up" data-aos-delay="260">
					<a href="#" aria-label="Instagram" className="ambassador-icon">
						<FaInstagram />
					</a>
					<a href="#" aria-label="TikTok" className="ambassador-icon">
						<FaTiktok />
					</a>
				</div>
				<div className="ambassador-buttons" data-aos="fade-up" data-aos-delay="340">
					<button className="btn btn-filled">
						<span className="btn-label">
							<span className="btn-label-top">Our Locations</span>
							<span className="btn-label-bottom">Our Locations</span>
						</span>
					</button>
					<button className="btn btn-outline-bordered">
						<span className="btn-label">
							<span className="btn-label-top">Become an Ambassador</span>
							<span className="btn-label-bottom">Become an Ambassador</span>
						</span>
					</button>
				</div>
			</section>
		</>
	);
}
