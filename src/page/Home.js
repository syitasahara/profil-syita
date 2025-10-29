import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import Portfolio from '../components/Portofolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-white font-poppins">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;