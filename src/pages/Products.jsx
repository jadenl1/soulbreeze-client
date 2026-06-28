import { useState, useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa6";
import can from "../assets/can-transparent.png";
import canYellow from "../assets/can-transparent-yellow.png";
import { PRODUCTS, VARIETY_PACKS } from "../data/products";
import "../styles/Products.css";

export default function Products() {
	const [activeTab, setActiveTab] = useState("cans");
	const tabRefs = useRef({});
	const [indicator, setIndicator] = useState({ left: 0, width: 0 });

	useLayoutEffect(() => {
		const el = tabRefs.current[activeTab];
		if (el) setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
	}, [activeTab]);

	return (
		<>
			<section className="products-hero">
				<div className="products-hero-content">
					<div className="products-hero-label-row" data-aos="fade-up" data-aos-delay="0">
						<span className="products-hero-rule" />
						<span className="products-hero-label">The Lineup</span>
						<span className="products-hero-rule" />
					</div>
					<h1 className="products-hero-heading" data-aos="fade-up" data-aos-delay="100">
						Find Your
						<br />
						Breeze.
					</h1>
					<div className="products-hero-callouts" data-aos="fade-up" data-aos-delay="200">
						<span>5% ABV</span>
						<span className="products-hero-dot">·</span>
						<span>100 Cal</span>
						<span className="products-hero-dot">·</span>
						<span>Gluten Free</span>
						<span className="products-hero-dot">·</span>
						<span>Zero Sugar</span>
					</div>
				</div>
				<div className="products-hero-cans">
					{[0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1].map((isYellow, i) => (
						<img
							key={i}
							src={isYellow ? canYellow : can}
							alt=""
							className="products-hero-can-img"
							style={{ animationDelay: `${Math.abs(i - 6) * 60}ms` }}
						/>
					))}
				</div>
			</section>

			<section className="products-grid-section">
				<div className="products-type-tabs" data-aos="fade-up" data-aos-delay="0">
					{[{ id: "cans", label: "Cans" }, { id: "variety", label: "Variety Packs" }].map((tab) => (
						<button
							key={tab.id}
							ref={(el) => (tabRefs.current[tab.id] = el)}
							className={`products-type-tab${activeTab === tab.id ? " products-type-tab-active" : ""}`}
							onClick={() => setActiveTab(tab.id)}
						>
							{tab.label}
						</button>
					))}
					<div className="products-type-tab-indicator" style={{ left: indicator.left, width: indicator.width }} />
				</div>

				{activeTab === "cans" && (
					<div className="products-grid">
						{PRODUCTS.map((flavor, i) => (
							<Link
								key={flavor.id}
								to={`/products/${flavor.id}`}
								className="product-card"
								data-aos="fade-up"
								data-aos-delay={i * 80}
							>
								<div className="product-can-wrap">
									<img src={can} alt={flavor.name} className="product-can" />
								</div>
								<div className="product-card-body">
									<h3 className="product-name">{flavor.name}</h3>
									<p className="product-subtitle">{flavor.subtitle}</p>
									<div className="product-stars">
										{Array.from({ length: 5 }, (_, i) =>
											i < flavor.rating ? (
												<FaStar key={i} className="product-star product-star-filled" />
											) : (
												<FaRegStar key={i} className="product-star" />
											),
										)}
									</div>
									<div className="product-stats">
										<div className="product-stat">
											<span className="product-stat-value">5%</span>
											<span className="product-stat-label">ABV</span>
										</div>
										<div className="product-stat-divider" />
										<div className="product-stat">
											<span className="product-stat-value">100</span>
											<span className="product-stat-label">CAL</span>
										</div>
										<div className="product-stat-divider" />
										<div className="product-stat">
											<span className="product-stat-value">0g</span>
											<span className="product-stat-label">SUGAR</span>
										</div>
									</div>
								</div>
							</Link>
						))}
					</div>
				)}

				{activeTab === "variety" && (
					<div className="products-grid products-grid-variety">
						{VARIETY_PACKS.map((vp, i) => (
							<Link
								key={vp.id}
								to={`/products/variety/${vp.id}`}
								className="variety-card"
								data-aos="fade-up"
								data-aos-delay={i * 80}
							>
								<div className="variety-card-img" />
								<div className="variety-card-body">
									<h3 className="product-name">{vp.name}</h3>
									<p className="product-subtitle">
										{vp.flavors.map((fid) => PRODUCTS.find((p) => p.id === fid)?.name).join(" · ")}
									</p>
								</div>
							</Link>
						))}
					</div>
				)}
			</section>
		</>
	);
}
