import React from 'react';

const FollowJourney = () => {
    return (
        <section className="follow-journey-section">
            <div className="container grid-split-30-70">
                <div className="journey-left">
                    <span className="cursive-accent text-mustard small">See where we're heading next</span>
                    <h2 className="section-title light">FOLLOW THE JOURNEY</h2>
                    <p className="ig-handle">@backpackers.destinations</p>
                    <a href="https://www.instagram.com/backpackers.destinations/" target="_blank" rel="noreferrer" className="btn-outline" style={{ display: 'inline-block', textDecoration: 'none' }}>
                        <i className="ph ph-instagram-logo"></i> FOLLOW US ON INSTAGRAM
                    </a>
                </div>
                <div className="journey-right">
                    <div className="ig-grid">
                        <img src="/assets/hero.png" alt="Insta 1" />
                        <img src="/assets/kerala.png" alt="Insta 2" />
                        <img src="/assets/karnataka.png" alt="Insta 3" />
                        <img src="/assets/tamilnadu.png" alt="Insta 4" />
                        <img src="/assets/group_tour.png" alt="Insta 5" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FollowJourney;
