import React, { useState } from 'react';
import './TaxSolutions.css';

const TaxSolutions = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleReadMore = (section) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };

  return (
    <div className="tax-solutions-container" id="tax-solutions">
      <div className="tax-solutions-content">
        <h2>Tax Solutions</h2>
        
        <ul>
          <li>Get a Payee ID/TIN</li>
          <li>Proper updated company file with the Federal and State Board of Internal Revenue</li>
          <li>Guide on applicable taxes and stipulated deadlines</li>
          <li>Clean up and proper tax management</li>
          <li>Let us represent you in both Federal and State Tax Audits</li>
        </ul>

        <h3>Auditing</h3>
        <ul>
          <li>Financial Statement Audit</li>
          <li>Better Business Reporting</li>
        </ul>
      </div>
    </div>
  );
};

export default TaxSolutions;
