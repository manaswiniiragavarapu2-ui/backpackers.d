import React from 'react';

const Destinations = () => {
    return (
        <section id="destinations" className="destinations-section">
            <div className="container">
                <div className="section-header center">
                    <span className="cursive-accent text-olive">Handpicked experiences</span>
                    <h2 className="section-title dark">WHERE DO YOU WANT TO GO NEXT?</h2>
                    <p className="section-subtitle">Explore the best of South India</p>
                </div>

                <div className="destinations-grid">
                    {/* Kerala */}
                    <div className="destination-card">
                        <div className="card-bg">
                            <img src="/assets/kerala.png" alt="Kerala Backwaters" />
                            <div className="card-gradient"></div>
                        </div>
                        <div className="card-content">
                            <h3>KERALA</h3>
                            <p className="cursive-accent small">God's Own Country</p>
                            <ul>
                                <li>Backwaters</li>
                                <li>Hills</li>
                                <li>Beaches & Culture</li>
                            </ul>
                            <button className="text-btn">Explore Kerala <i className="ph ph-arrow-right"></i></button>
                        </div>
                    </div>

                    {/* Karnataka */}
                    <div className="destination-card">
                        <div className="card-bg">
                            <img src="/assets/karnataka.png" alt="Karnataka Landscape" />
                            <div className="card-gradient"></div>
                        </div>
                        <div className="card-content">
                            <h3>KARNATAKA</h3>
                            <p className="cursive-accent small">Wild. Green. Unexplored.</p>
                            <ul>
                                <li>Mountains</li>
                                <li>Beaches</li>
                                <li>Forts & Heritage</li>
                            </ul>
                            <button className="text-btn">Explore Karnataka <i className="ph ph-arrow-right"></i></button>
                        </div>
                    </div>

                    {/* Tamil Nadu */}
                    <div className="destination-card">
                        <div className="card-bg">
                            <img src="/assets/tamilnadu.png" alt="Tamil Nadu Temple" />
                            <div className="card-gradient"></div>
                        </div>
                        <div className="card-content">
                            <h3>TAMIL NADU</h3>
                            <p className="cursive-accent small">Temples, Hills & Coastlines</p>
                            <ul>
                                <li>Hill Stations</li>
                                <li>Heritage</li>
                                <li>Temples & Beaches</li>
                            </ul>
                            <button className="text-btn">Explore Tamil Nadu <i className="ph ph-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Destinations;
