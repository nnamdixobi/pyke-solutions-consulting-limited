import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us-container" id="contact">
      <div className="contact-us-content">
        <h2>Contact Us</h2>
        <p>Send us a message and we'll get back to you within 24 hours.</p>
        <p>Open 8.00am - 5pm.</p>

        <div className="contact-details">
          <h3><b>Office Address</b></h3>
          <ul>
            <li><b>Lagos Office</b>: Suite 15, Veteran Plaza, 433 Herbert Macaulay Way, Yaba, Lagos</li>
            <li><b>Port Harcourt Office</b>: #129-132 Trans Amadi Industrial Layout (Old Michelin Compound), Port Harcourt, Rivers State.</li>
            <li><b>Warri Office</b>: 40 Airport Road, By Edjeba Junction, Warri, Delta State.</li>
          </ul>
        </div>

        <div className="contact-details">
          <h3><b>Contact Details</b></h3>
          <ul>
            <li>Tel: <a href="tel:08166483802">08166483802</a>, <a href="tel:08175575477">08175575477</a></li>
            <li>Email: <a href="mailto:info@pykesolutions.org">info@pykesolutions.org</a></li>
            <li>Website: <a href="http://www.pykesolutions.org" target="_blank" rel="noopener noreferrer">www.pykesolutions.org</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
