import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        destination: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thanks! We\'ll get back to you within 24 hours.');
    };

    return (
        <section id="contact" className="contact-editorial-section">
            <div className="container">
                {/* Section Label */}
                <div className="editorial-label">
                    <span className="label-line"></span>
                    <span className="label-text">GET IN TOUCH</span>
                </div>

                <h2 className="editorial-heading">
                    CONTACT<span className="heading-dot text-mustard">.</span>
                </h2>

                <div className="contact-editorial-grid">
                    {/* Left — Bold CTA */}
                    <div className="contact-editorial-left">
                        <h3 className="editorial-tagline">
                            READY FOR<br />
                            YOUR NEXT<br />
                            <span className="text-mustard">ADVENTURE?</span>
                        </h3>

                        <p className="editorial-body">
                            Drop us a message and our crew will reach out 
                            within 24 hours to plan your perfect trip.
                        </p>

                        <div className="contact-info-list">
                            <a href="https://wa.me/919999999999" className="contact-info-item" target="_blank" rel="noreferrer">
                                <div className="contact-info-icon">
                                    <i className="ph ph-whatsapp-logo"></i>
                                </div>
                                <div>
                                    <span className="contact-info-label">WhatsApp Us</span>
                                    <span className="contact-info-value">+91 99999 99999</span>
                                </div>
                            </a>
                            <a href="mailto:hello@backpackers.in" className="contact-info-item">
                                <div className="contact-info-icon">
                                    <i className="ph ph-envelope-simple"></i>
                                </div>
                                <div>
                                    <span className="contact-info-label">Email Us</span>
                                    <span className="contact-info-value">hello@backpackers.in</span>
                                </div>
                            </a>
                            <a href="https://www.instagram.com/backpackers.destinations/" className="contact-info-item" target="_blank" rel="noreferrer">
                                <div className="contact-info-icon">
                                    <i className="ph ph-instagram-logo"></i>
                                </div>
                                <div>
                                    <span className="contact-info-label">Follow Us</span>
                                    <span className="contact-info-value">@backpackers.destinations</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right — Contact Form */}
                    <div className="contact-editorial-right">
                        <form className="contact-form" onSubmit={handleSubmit} id="register-form">
                            <div className="form-row-split">
                                <div className="form-group">
                                    <label htmlFor="contact-name">Your Name</label>
                                    <input
                                        type="text"
                                        id="contact-name"
                                        name="name"
                                        placeholder="e.g. Rahul Singh"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="contact-phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="contact-phone"
                                        name="phone"
                                        placeholder="+91 98765 43210"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="contact-email">Email Address</label>
                                <input
                                    type="email"
                                    id="contact-email"
                                    name="email"
                                    placeholder="your@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="contact-destination">Dream Destination</label>
                                <select
                                    id="contact-destination"
                                    name="destination"
                                    value={formData.destination}
                                    onChange={handleChange}
                                >
                                    <option value="">Select a destination...</option>
                                    <option>Ladakh Bike Expedition</option>
                                    <option>Kerala Backwaters</option>
                                    <option>Chikmagalur Group Trip</option>
                                    <option>Coorg Weekend</option>
                                    <option>Gokarna Beach Trip</option>
                                    <option>Custom Trip</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="contact-message">Message</label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    placeholder="Tell us about your travel plans, group size, dates..."
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <button type="submit" className="btn-submit editorial-submit">
                                SEND MESSAGE <i className="ph ph-paper-plane-tilt"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
