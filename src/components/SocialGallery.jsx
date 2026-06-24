import { useEffect, useState } from "react";
import { FaInstagram, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import placeholder1 from "../assets/gallery-photos/placeholder1.jpg";
import placeholder2 from "../assets/gallery-photos/placeholder2.jpg";
import placeholder3 from "../assets/gallery-photos/placeholder3.jpg";
import placeholder4 from "../assets/gallery-photos/placeholder4.jpg";
import placeholder5 from "../assets/gallery-photos/placeholder5.jpg";
import placeholder6 from "../assets/gallery-photos/placeholder6.jpg";
import placeholder7 from "../assets/gallery-photos/placeholder7.jpg";
import placeholder8 from "../assets/gallery-photos/placeholder8.jpg";
import placeholder9 from "../assets/gallery-photos/placeholder9.jpg";

const photos = [
	{
		img: placeholder1,
		username: "@coastalcrew",
		caption: "Friday nights taste better with a Soulbreeze in hand 🌊",
	},
	{
		img: placeholder2,
		username: "@sunset.sips",
		caption: "Peach season, but make it breezy.",
	},
	{
		img: placeholder3,
		username: "@thebeachhouse",
		caption: "Cheers to the weekend, every weekend.",
	},
	{
		img: placeholder4,
		username: "@laurenoutside",
		caption: "Raspberry + sunshine = the only combo I need.",
	},
	{
		img: placeholder5,
		username: "@dockside.dani",
		caption: "Soaking up the last of summer 🍋",
	},
	{
		img: placeholder6,
		username: "@reefandrum",
		caption: "Pour one for the crew 🍹",
	},
	{
		img: placeholder7,
		username: "@saltyandsweet",
		caption: "Tequila o'clock somewhere.",
	},
	{
		img: placeholder8,
		username: "@wanderlust.wave",
		caption: "Caught the breeze and didn't let go.",
	},
	{
		img: placeholder9,
		username: "@goldenhourgrace",
		caption: "Golden hour, golden flavor ✨",
	},
];

export default function SocialGallery() {
	const [activeIndex, setActiveIndex] = useState(2);

	useEffect(() => {
		const timer = setTimeout(() => {
			setActiveIndex((i) => (i + 1) % photos.length);
		}, 6000);
		return () => clearTimeout(timer);
	}, [activeIndex]);

	const goPrev = () => {
		setActiveIndex((i) => (i - 1 + photos.length) % photos.length);
	};

	const goNext = () => {
		setActiveIndex((i) => (i + 1) % photos.length);
	};

	return (
		<section className="social-gallery">
			<div className="social-gallery-row">
				{photos.map((photo, index) => {
					const isActive = index === activeIndex;
					return (
						<div
							key={photo.username}
							className={`social-photo${isActive ? " social-photo-active" : ""}`}
							onClick={() => setActiveIndex(index)}
						>
							{isActive && (
								<div className="social-photo-header">
									<FaInstagram />
									<span>{photo.username}</span>
								</div>
							)}
							<img
								src={photo.img}
								alt={photo.caption}
								className="social-photo-img"
							/>
							{isActive && (
								<p className="social-photo-caption">{photo.caption}</p>
							)}
						</div>
					);
				})}
			</div>
			<div className="social-gallery-controls">
				<button
					type="button"
					className="social-gallery-arrow"
					aria-label="Previous photo"
					onClick={goPrev}
				>
					<FaChevronLeft />
				</button>
				<button
					type="button"
					className="social-gallery-arrow"
					aria-label="Next photo"
					onClick={goNext}
				>
					<FaChevronRight />
				</button>
			</div>
		</section>
	);
}
