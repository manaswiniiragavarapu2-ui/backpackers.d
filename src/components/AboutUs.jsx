import React from 'react';

const AboutUs = () => {
    return (
        <section id="about" className="about-editorial-section">
            <div className="container">
                {/* Section Label */}
                <div className="editorial-label">
                    <span className="label-line"></span>
                    <span className="label-text">WHO WE ARE</span>
                </div>

                <h2 className="editorial-heading">
                    ABOUT US<span className="heading-dot text-mustard">.</span>
                </h2>

                <div className="about-editorial-grid">
                    {/* Left — Bold tagline + text + stats */}
                    <div className="about-editorial-left">
                        <h3 className="editorial-tagline">
                            TWO WHEELS.<br />
                            <span className="text-mustard">ONE MISSION.</span><br />
                            EXPLORE MORE.
                        </h3>

                        <p className="editorial-body">
                            Backpackers Destinations was built by travellers, for travellers. 
                            We're not a travel agency — we're a community of riders, hikers and 
                            explorers who believe the best stories happen off the beaten path. 
                            From South India's misty hills to the Himalayan high passes, 
                            we've been there and we'll take you there.
                        </p>
                        <p className="editorial-body mt-1">
                            Every trip is curated with care. Every crew is hand-picked. 
                            Every adventure is one you'll never forget.
                        </p>

                        <div className="editorial-stats">
                            <div className="editorial-stat">
                                <span className="editorial-stat-num">5+</span>
                                <span className="editorial-stat-label">YEARS OF<br />EXPERIENCE</span>
                            </div>
                            <div className="editorial-stat-divider"></div>
                            <div className="editorial-stat">
                                <span className="editorial-stat-num">10K+</span>
                                <span className="editorial-stat-label">HAPPY<br />TRAVELLERS</span>
                            </div>
                            <div className="editorial-stat-divider"></div>
                            <div className="editorial-stat">
                                <span className="editorial-stat-num">100+</span>
                                <span className="editorial-stat-label">ADVENTURES<br />DELIVERED</span>
                            </div>
                        </div>

                        <button className="editorial-btn">
                            OUR FULL STORY <i className="ph ph-arrow-right"></i>
                        </button>
                    </div>

                    {/* Right — image mosaic */}
                    <div className="about-editorial-right">
                        <div className="about-img-mosaic">
                            <div className="mosaic-main">
                                <img src="/assets/group_tour.png" alt="Group on expedition" />
                            </div>
                            <div className="mosaic-stack">
                                <div className="mosaic-sm">
                                    <img src="/assets/karnataka.png" alt="Karnataka mountains" />
                                </div>
                                <div className="mosaic-sm mosaic-accent">
                                    <div className="mosaic-text-card">
                                        <span className="cursive-accent text-mustard">Since</span>
                                        <span className="mosaic-year">2019</span>
                                        <span className="mosaic-sub">Making memories</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
