import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import GroupTrips from './components/GroupTrips';
import WeekendEscapes from './components/WeekendEscapes';
import WhyUs from './components/WhyUs';
import TravelStories from './components/TravelStories';
import FollowJourney from './components/FollowJourney';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleScroll = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      
      const targetId = target.getAttribute('href');
      if (targetId === '#!' || targetId === '#') return;
      
      e.preventDefault();
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    };

    document.addEventListener('click', handleScroll);
    return () => document.removeEventListener('click', handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Destinations />
        <GroupTrips />
        <WeekendEscapes />
        <WhyUs />
        <FollowJourney />
        <AboutUs />
        <Contact />
        <TravelStories />
      </main>
      <Footer />
    </>
  );
}

export default App;
