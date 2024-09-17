import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaGoogle } from 'react-icons/fa';
import './Footer.css';  // If you have a CSS file for styling the footer

const Footer = () => {
  return (
    <footer>
      <div className="social-media">
        <a href="https://g.co/kgs/TGrv9kc" target="_blank" rel="noopener noreferrer" aria-label="Google My Business">
          <FaGoogle size={30} />
        </a>
        <a href="https://www.linkedin.com/company/pyke-solutions-consulting-limited/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={30} />
        </a>
        <a href="https://www.facebook.com/pykesolutions" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebook size={30} />
        </a>
        <a href="https://x.com/PYKESOLUTIONSS" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter size={30} />
        </a>
        <a href="https://www.instagram.com/pyke_accounting_solutions/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram size={30} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
