import React from 'react';

const TRIPS = [
    { id: 1, title: "LADAKH BIKE EXPEDITION", duration: "7D / 6N", date: "Jun 21", price: "From ₹28,999" },
    { id: 2, title: "CHIKMAGALUR GROUP TRIP", duration: "3D / 2N", date: "Jun 7", price: "From ₹5,999" },
    { id: 3, title: "GOKARNA WEEKEND", duration: "3D / 2N", date: "May 31", price: "From ₹5,499" },
    { id: 4, title: "COORG MONSOON TRIP", duration: "3D / 2N", date: "Jun 14", price: "TBD" }
];

const CAROUSEL_TRIPS = [...TRIPS, ...TRIPS];

const GroupTrips = () => {
    return (
        <section id="group-trips" className="group-trips-section">
            <div className="decor-shape"></div>
            
            <div className="container relative z-10">
                <div className="group-trips-header">
                    <div>
                        <h2 className="text-mustard small-display">DON'T HAVE A TRAVEL CREW?</h2>
                        <h3 className="section-title light">WE'LL FIND ONE FOR YOU.</h3>
                        <p className="section-subtitle light-dim">Meet new people. Explore new places. Come back with stories.</p>
                    </div>
                    <button className="text-btn-border hidden-mobile">VIEW ALL GROUP TRIPS <i className="ph ph-arrow-right"></i></button>
                </div>

                <div className="marquee-container">
                    <div className="marquee-track">
                        {CAROUSEL_TRIPS.map((trip, index) => (
                            <div key={`${trip.id}-${index}`} className="trip-card">
                                <div className="trip-card-content">
                                    <h4>{trip.title}</h4>
                                    <div className="trip-details">
                                        <p><span>Duration</span> <span>{trip.duration}</span></p>
                                        <p><span>Date</span> <span>{trip.date}</span></p>
                                        <p className="price-row"><span>Price</span> <span className="price">{trip.price}</span></p>
                                    </div>
                                    <button className="btn-card">JOIN THE TRIP</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <button className="btn-outline-mustard show-mobile w-full mt-4">VIEW ALL GROUP TRIPS <i className="ph ph-arrow-right"></i></button>
            </div>
        </section>
    );
};

export default GroupTrips;
