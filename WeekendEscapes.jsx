import React from 'react';

const TRIPS = [
    { id: 1, title: 'Gokarna', dur: '3D / 2N', price: '₹5,499/-', img: '/assets/karnataka.png' },
    { id: 2, title: 'Chikmagalur', dur: '2D / 1N', price: '₹6,999/-', img: '/assets/kerala.png' },
    { id: 3, title: 'Coorg', dur: '2D / 1N', price: '₹5,999/-', img: '/assets/tamilnadu.png' },
    { id: 4, title: 'Wayanad', dur: '3D / 1N', price: '₹4,999/-', img: '/assets/hero.png' },
    { id: 5, title: 'Ooty', dur: '3D / 2N', price: '₹6,499/-', img: '/assets/ooty.png' },
    { id: 6, title: 'Hampi', dur: '2D / 1N', price: '₹5,499/-', img: '/assets/hampi.png' }
];

const CAROUSEL_TRIPS = [...TRIPS, ...TRIPS];

const WeekendEscapes = () => {
    return (
        <section id="weekend-escapes" className="weekend-section">
            <div className="container grid-split-asym">
                <div className="weekend-left">
                    <span className="cursive-accent text-olive">Short trips. Big memories.</span>
                    <h2 className="section-title dark">ESCAPE FOR THE WEEKEND</h2>
                    <p className="section-subtitle">Perfect quick escapes from the city</p>
                </div>
                
                <div className="weekend-right relative">
                    <div className="marquee-container">
                        <div className="marquee-track">
                            {CAROUSEL_TRIPS.map((trip, index) => (
                                <div key={`${trip.id}-${index}`} className="weekend-card">
                                    <div className="img-box"><img src={trip.img} alt={trip.title} /></div>
                                    <div className="weekend-info">
                                        <h4>{trip.title}</h4>
                                        <p className="dur">{trip.dur}</p>
                                        <p className="prc">From <span className="text-mustard font-bold">{trip.price}</span></p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WeekendEscapes;
