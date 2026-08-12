import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="hero">
            {/* Video Background — portrait video rotated to landscape via CSS */}
            <div className="hero-bg">
                <div className="hero-video-wrap">
                    <video
                        className="hero-video"
                        src="/hero-bg.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                </div>
                <div className="hero-gradient-b"></div>
                <div className="hero-gradient-r"></div>
            </div>

            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="display-title">
                        CHASE THE <br />
                        MOUNTAINS.
                    </h1>
                    <h2 className="sub-display">RIDE BEYOND LIMITS.</h2>
                    
                    <div className="hero-trip-info">
                        <h3>LADAKH BIKE EXPEDITION</h3>
                        <p><i className="ph-fill ph-map-pin text-mustard"></i> Leh • High Passes • Himalayan Roads</p>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-box">
                            <span className="stat-num">7 DAYS</span>
                            <span className="stat-label">6 NIGHTS</span>
                        </div>
                        <div className="stat-box">
                            <span className="stat-num">500+</span>
                            <span className="stat-label">KILOMETERS</span>
                        </div>
                        <div className="stat-box">
                            <span className="stat-num">UNLIMITED</span>
                            <span className="stat-label">MEMORIES</span>
                        </div>
                    </div>

                    <div className="hero-buttons">
                        <button className="btn-primary flex-center w-full">
                            EXPLORE LADAKH <i className="ph ph-arrow-right"></i>
                        </button>
                        <button className="btn-outline w-full">
                            UPCOMING TRIPS
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
