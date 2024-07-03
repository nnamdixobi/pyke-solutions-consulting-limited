import "./Nav.css";
import React, { useState, useEffect } from 'react';
import logo from "./logo.jpg";

export const Nav = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  const isSectionInView = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return false;

    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
  };

  const handleScroll = () => {
    const sections = [
      'home', 'about', 'what-we-do', 'our-solutions', 
      'accounting', 'why-us', 'training', 'privacy-policy', 'contact'
    ];
    for (const section of sections) {
      if (isSectionInView(section)) {
        setActiveSection(section);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => handleNavClick('home')}>
          Home
        </a>
        <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => handleNavClick('about')}>
          About Us
        </a>
        <a href="#what-we-do" className={activeSection === 'what-we-do' ? 'active' : ''} onClick={() => handleNavClick('what-we-do')}>
          What We Do
        </a>
        <a href="#our-solutions" className={activeSection === 'our-solutions' ? 'active' : ''} onClick={() => handleNavClick('management-solutions')}>
          Our Solutions
        </a>
        
        <a href="#training" className={activeSection === 'training' ? 'active' : ''} onClick={() => handleNavClick('training')}>
          Training
        </a>

        <a href="#why-us" className={activeSection === 'why-us' ? 'active' : ''} onClick={() => handleNavClick('why-us')}>
          Why Us
        </a>

        <a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => handleNavClick('contact')}>
          Contact
        </a>

        <a href="#privacy-policy" className={activeSection === 'privacy-policy' ? 'active' : ''} onClick={() => handleNavClick('privacy-policy')}>
          Privacy Policy
        </a>
        
      </div>
      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Nav;
