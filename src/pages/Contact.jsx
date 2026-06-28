import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "../styles/Contact.css";

export default function Contact() {
	const [form, setForm] = useState({
		firstName: "",
		lastName: "",
		email: "",
		type: "",
		message: "",
	});

	const handleChange = (e) => {
		setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className="contact-page">
			<div className="contact-left" data-aos="fade-up" data-aos-delay="0">
				<h1 className="contact-heading">Contact Us.</h1>
				<p className="contact-ambassador-note">
					Looking for the Ambassador application?{" "}
					<Link to="/ambassador" className="contact-ambassador-link">Apply here →</Link>
				</p>
			</div>

			<form className="contact-form" onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="100">
				<div className="contact-row">
					<div className="contact-field">
						<label className="contact-label">First Name <span className="contact-required">*</span></label>
						<input className="contact-input" type="text" name="firstName" value={form.firstName} onChange={handleChange} placeholder="Jane" required />
					</div>
					<div className="contact-field">
						<label className="contact-label">Last Name <span className="contact-required">*</span></label>
						<input className="contact-input" type="text" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Doe" required />
					</div>
				</div>

				<div className="contact-row">
					<div className="contact-field">
						<label className="contact-label">Email <span className="contact-required">*</span></label>
						<input className="contact-input" type="email" name="email" value={form.email} onChange={handleChange} placeholder="jane@email.com" required />
					</div>
					<div className="contact-field">
						<label className="contact-label">I am a… <span className="contact-required">*</span></label>
						<select className="contact-input contact-select" name="type" value={form.type} onChange={handleChange} required>
							<option value="" disabled>Select one</option>
							<option value="customer">Customer</option>
							<option value="retailer">Retailer / Wholesaler</option>
							<option value="ambassador">Ambassador / Influencer</option>
							<option value="press">Press / Media</option>
							<option value="other">Other</option>
						</select>
					</div>
				</div>

				<div className="contact-field contact-field-full">
					<label className="contact-label">Message <span className="contact-required">*</span></label>
					<textarea className="contact-input contact-textarea" name="message" value={form.message} onChange={handleChange} placeholder="Tell us what's on your mind…" required />
				</div>

				<p className="contact-note">We typically respond within 1–3 business days.</p>

				<button type="submit" className="btn btn-filled contact-submit">
					<span className="btn-label">
						<span className="btn-label-top">Send Message <FaPaperPlane style={{ marginLeft: 6, fontSize: 11 }} /></span>
						<span className="btn-label-bottom">Send Message <FaPaperPlane style={{ marginLeft: 6, fontSize: 11 }} /></span>
					</span>
				</button>
			</form>
		</div>
	);
}
