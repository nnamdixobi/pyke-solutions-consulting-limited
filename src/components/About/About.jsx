import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-content">
        <h2>About Us</h2>
        
        <section>
          <h3>Who We Are</h3>
          <p>The company, on June 28th, 2012, was incorporated under the laws of the Federal Republic of Nigeria as Pyke Solutions Consulting Limited.</p>
          <p>Pyke Solutions Consulting operates within four main business units: Computerized Accounting Consultancy, Information Technology Consulting, Accounting & Taxation Services and Training Services.</p>
          <p>All divisions serve a wide range of local and regional clients and are recognized as market leaders in multiple business areas.</p>
          <p>Within the period of its existence, Pyke Solutions has implemented software solutions for various small to large sized organizations. This growth has been largely driven by repeated business from satisfied customers.</p>
        </section>

        <section>
          <h3>Our Vision</h3>
          <p>Our vision is to become the Regional Leader in the provision of professional and cutting edge accounting and Information Technological services.</p>
        </section>

        <section>
          <h3>Our Mission</h3>
          <p>To provide excellent and value based customer services with dedicated support.</p>
        </section>

        <section>
          <h3>Our People</h3>
          <p>Our team of qualified, experienced and dedicated staff are recruited with the highest consideration of merit, qualification and experience without prejudice to tribe and sex.</p>
          <p>The Company has since grown into a fledgling firm consisting of partners with core competences in the area of Accounting, Information Technology, Audit and Taxation.</p>
          <p>Our approach to delivering assignments is client-focused and we strive deliberately to exceed the expectations of our clients. In achieving these laudable objectives, we assign a multidisciplinary team of professionals to all our assignments.</p>
        </section>

        <section>
          <h3>Industries We Serve</h3>
          <ul>
            <li>Engineering</li>
            <li>Education</li>
            <li>Construction</li>
            <li>Hospitality</li>
            <li>Agriculture</li>
            <li>Manufacturing</li>
            <li>Logistics</li>
            <li>Financial Services</li>
            <li>Mining</li>
            <li>Health Care</li>
            <li>Energy</li>
            <li>Information Technology</li>
            <li>Telecommunications</li>
            <li>Public Sector</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
