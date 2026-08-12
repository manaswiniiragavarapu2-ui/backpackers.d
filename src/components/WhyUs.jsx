import React from 'react';

const WhyUs = () => {
    return (
        <section id="why-us" className="why-us-section">
            <div className="container grid-split">
                <div className="why-us-left">
                    <h2 className="giant-title">
                        Why<br />
                        Backpackers<br />
                        <span className="text-mustard">Destinations?</span>
                    </h2>
                </div>
                
                <div className="features-grid">
                    <div className="feature-item">
                        <div className="icon-circle"><i className="ph ph-map-pin"></i></div>
                        <h3>ADVENTURE FIRST</h3>
                        <p>Experiences designed for travellers who want to explore more and fear less.</p>
                    </div>
                    <div className="feature-item">
                        <div className="icon-circle"><i className="ph ph-star"></i></div>
                        <h3>TRAVEL WITH PEOPLE</h3>
                        <p>Join our community of like-minded travellers and make lifelong friends.</p>
                    </div>
                    <div className="feature-item">
                        <div className="icon-circle"><i className="ph ph-star"></i></div>
                        <h3>CURATED EXPERIENCES</h3>
                        <p>Handpicked destinations and itineraries crafted by travel enthusiasts.</p>
                    </div>
                    <div className="feature-item">
                        <div className="icon-circle"><i className="ph ph-star"></i></div>
                        <h3>MEMORIES OVER CHECKLISTS</h3>
                        <p>We focus on experiences, connections and stories you'll remember forever.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
