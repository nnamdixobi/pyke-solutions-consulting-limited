import React from 'react';
import './WhyUs.css';

const WhyUs = () => {
  return (
    <div className="why-us-container" id="why-us">
      <div className="why-us-content">
        <h2>Why Us?</h2>
        <ul className="why-us-list">
          <li>
            <h3>Professionalism</h3>
            <p>We have a strong and knowledgeable team of qualified Accountants and IT Professionals who have a firm understanding of business reporting and how to configure the software to meet and exceed clients reporting expectations.</p>
          </li>
          <li>
            <h3>We’re Passionate about your Business</h3>
            <p>We will take the time to get to know your business, meaning we can tailor our advice and give you our best service.</p>
          </li>
          <li>
            <h3>We want to see you Succeed and Grow</h3>
            <p>Our mission is to support new startup businesses by offering clear and affordable financial reporting. We want you to start your journey on the right path, with the correct tools.</p>
          </li>
          <li>
            <h3>We Specialise in Branch Accounting</h3>
            <p>Meaning quicker reporting, and better access to your numerous branches’ financials in just a click.</p>
          </li>
          <li>
            <h3>We’re Remote</h3>
            <p>We are always an email or phone call away – ready to answer any question you may have.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WhyUs;
