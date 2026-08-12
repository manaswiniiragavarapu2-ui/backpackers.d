import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let current = 'home';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 250) {
                    current = section.getAttribute('id');
                }
            });
            
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        // Call it once on mount to set initial state correctly
        handleScroll();
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="navbar" id="navbar">
            <div className="container nav-container">
                <a href="#home" className="logo-link" style={{ gap: '0.75rem', alignItems: 'center' }}>
                    <img src="/assets/logo.png" alt="Backpackers Destinations Logo" className="brand-logo" style={{ height: '32px' }} />
                    <span style={{ color: 'white', fontWeight: '800', fontSize: '1.35rem', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em' }}>Backpackers.Destinations</span>
                </a>

                <ul className="nav-links">
                    <li><a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
                    <li><a href="#destinations" className={activeSection === 'destinations' ? 'active' : ''}>Destinations</a></li>
                    <li><a href="#group-trips" className={activeSection === 'group-trips' ? 'active' : ''}>Group Trips</a></li>
                    <li><a href="#about" className={activeSection === 'about' ? 'active' : ''}>About Us</a></li>
                    <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
                </ul>

                <div className="nav-actions">
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
