import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar" id="navbar">
            <div className="container nav-container">
                <a href="#home" className="logo-link" style={{ gap: '0.75rem' }}>
                    <img src="/assets/logo.png" alt="Backpackers Destinations Logo" className="brand-logo" />
                    <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem', fontFamily: 'var(--font-sans)', letterSpacing: '0.05em' }}>backpackers.destinations</span>
                </a>

                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#destinations">Destinations</a></li>
                    <li><a href="#group-trips">Group Trips</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <div className="nav-actions">
                    <button className="icon-btn" aria-label="Call us">
                        <i className="ph ph-phone"></i>
                    </button>
                    <button className="btn-primary flex-center">
                        PLAN YOUR TRIP <i className="ph ph-arrow-right"></i>
                    </button>
                </div>

                <button className="mobile-menu-btn" aria-label="Menu">
                    <i className="ph ph-list"></i>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
