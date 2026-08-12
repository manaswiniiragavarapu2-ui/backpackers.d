import React, { useState, useEffect } from 'react';

const REVIEWS = [
    { id: 1, text: "The Ladakh trip was easily one of the best experiences I've ever had.", author: "- Rahul, Hyderabad", trip: "Ladakh Bike Expedition", avatar: "/assets/customer.png" },
    { id: 2, text: "Chikmagalur trip was perfectly organized.", author: "- Sneha, Bangalore", trip: "Chikmagalur Group Trip", avatar: "/assets/customer.png" },
    { id: 3, text: "Every trip feels like a new story.", author: "- Arjun, Chennai", trip: "Coorg Weekend Trip", avatar: "/assets/customer.png" },
    { id: 4, text: "The Spiti valley tour was a dream come true.", author: "- Priya, Mumbai", trip: "Spiti Valley Roadtrip", avatar: "/assets/customer.png" },
    { id: 5, text: "Unforgettable moments and an amazing travel crew.", author: "- Vikram, Delhi", trip: "Meghalaya Backpacking", avatar: "/assets/customer.png" }
];

const TravelStories = () => {
    const [activeIndex, setActiveIndex] = useState(2); // Start at the middle

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % REVIEWS.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const prev = () => setActiveIndex(prev => (prev - 1 + REVIEWS.length) % REVIEWS.length);
    const next = () => setActiveIndex(prev => (prev + 1) % REVIEWS.length);

    return (
        <section className="travel-stories-section" style={{ overflow: 'hidden' }}>
            <div className="container grid-split-asym">
                <div className="stories-left">
                    <span className="cursive-accent text-olive">Real people. Real stories.</span>
                    <h2 className="section-title dark">TRAVEL STORIES FROM<br />OUR COMMUNITY</h2>
                </div>
                
                <div className="stories-right relative">
                    <div className="carousel-3d-wrapper" style={{ 
                        perspective: '1200px', 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        height: '350px', 
                        position: 'relative' 
                    }}>
                        {REVIEWS.map((review, i) => {
                            const offset = i - activeIndex;
                            let absOffset = Math.abs(offset);
                            let direction = Math.sign(offset);

                            // Handle infinite wrap-around visually (optional, but for a 5 item array, it's simpler to just use raw offset, 
                            // wait, if we wrap activeIndex, the offsets can be large, e.g., i=0, activeIndex=4, offset=-4.
                            // We need shortest path for continuous circular 3D carousel.
                            let shortestOffset = offset;
                            if (Math.abs(offset) > Math.floor(REVIEWS.length / 2)) {
                                shortestOffset = offset > 0 ? offset - REVIEWS.length : offset + REVIEWS.length;
                            }
                            
                            absOffset = Math.abs(shortestOffset);
                            direction = Math.sign(shortestOffset);
                            
                            // Hide items that are too far away
                            if (absOffset > 2) return null;

                            return (
                                <div 
                                    key={review.id}
                                    onClick={() => setActiveIndex(i)}
                                    style={{
                                        position: 'absolute',
                                        transition: 'all 0.5s ease',
                                        transform: `translateX(${shortestOffset * 170}px) translateZ(${absOffset * -150}px) rotateY(${direction * -25}deg)`,
                                        zIndex: 10 - absOffset,
                                        opacity: absOffset > 1 ? 0.3 : 1,
                                        cursor: 'pointer',
                                        padding: '1.5rem',
                                        width: '320px',
                                        textAlign: 'center',
                                        backgroundColor: '#fff',
                                        borderRadius: '8px',
                                        boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                                    }}
                                >
                                    <img src={review.avatar} alt={review.author} className="avatar" style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 1rem' }} />
                                    <div className="stars" style={{ color: 'var(--color-mustard)', marginBottom: '0.5rem', letterSpacing: '2px', fontSize: '1.25rem' }}>★★★★★</div>
                                    <p className="review-text" style={{ fontStyle: 'italic', fontSize: '0.875rem', marginBottom: '1.5rem', color: 'rgba(17,21,23,0.8)', lineHeight: 1.6 }}>"{review.text}"</p>
                                    <p className="reviewer-name" style={{ fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.25rem' }}>{review.author}</p>
                                    <p className="reviewer-trip" style={{ fontSize: '0.65rem', color: 'var(--color-mountain)' }}>{review.trip}</p>
                                </div>
                            );
                        })}
                    </div>
                    
                    <div className="nav-buttons" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
                        <button className="scroll-btn prev" aria-label="Previous" onClick={prev}><i className="ph ph-caret-left"></i></button>
                        <button className="scroll-btn next" aria-label="Next" onClick={next}><i className="ph ph-caret-right"></i></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TravelStories;
