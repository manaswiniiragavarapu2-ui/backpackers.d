import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-bg">
                <img src="/assets/hero.png" alt="Landscape" />
            </div>
            
            <div className="container relative z-10">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <a href="#home" className="logo-link" style={{ gap: '0.75rem', alignItems: 'center' }}>
                            <img src="/assets/logo.png" alt="Backpackers Destinations Logo" className="brand-logo footer-logo" style={{ height: '32px' }} />
                            <span style={{ color: 'white', fontWeight: '800', fontSize: '1.35rem', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em' }}>Backpackers.Destinations</span>
                        </a>
                        <p className="cursive-accent small mt-6">Adventure. Community. Experiences.</p>
                        <div className="social-links" style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                            <a href="#!" style={{ color: 'var(--color-mustard)', fontSize: '1.8rem', transition: 'var(--transition)' }} className="hover-scale"><i className="ph ph-instagram-logo"></i></a>
                            <a href="#!" style={{ color: 'var(--color-mustard)', fontSize: '1.8rem', transition: 'var(--transition)' }} className="hover-scale"><i className="ph ph-facebook-logo"></i></a>
                            <a href="#!" style={{ color: 'var(--color-mustard)', fontSize: '1.8rem', transition: 'var(--transition)' }} className="hover-scale"><i className="ph ph-youtube-logo"></i></a>
                        </div>
                    </div>
                    
                    <div className="footer-links-group">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#destinations">Destinations</a></li>
                            <li><a href="#packages">Packages</a></li>
                            <li><a href="#group-trips">Group Trips</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-links-group">
                        <h4>Popular</h4>
                        <ul>
                            <li><a href="#!">Ladakh Bike Expedition</a></li>
                            <li><a href="#!">Kerala Backwaters</a></li>
                            <li><a href="#!">Karnataka Wild</a></li>
                            <li><a href="#!">Tamil Nadu Temples</a></li>
                        </ul>
                    </div>

                    <div className="footer-links-group">
                        <h4>Connect</h4>
                        <ul className="contact-links">
                            <li><a href="#!"><i className="ph ph-camera"></i> @backpackers.destinations</a></li>
                            <li><a href="#!"><i className="ph ph-phone"></i> Chat on WhatsApp</a></li>
                            <li><a href="#!"><i className="ph ph-envelope-simple"></i> hello@backpackers.in</a></li>
                        </ul>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <p>© 2026 Backpackers Destinations. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
