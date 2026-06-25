import LocationsMap from "../components/LocationsMap";
import "../styles/Locations.css";

export default function Locations() {
	return (
		<>
			<section className="page-header">
				<span className="page-header-label">WHERE TO FIND US</span>
				<h1 className="page-header-heading">
					Feel the Breeze,
					<br />
					Wherever You Are.
				</h1>
				<p className="page-header-text">
					From coastal taprooms to your neighborhood store, find the nearest spot to grab a
					Soulbreeze and bring the breeze with you.
				</p>
			</section>
			<LocationsMap />
		</>
	);
}
