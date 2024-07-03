import React, { useState } from 'react';
import './Training.css';

const Training = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleReadMore = (section) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };

  return (
    <div className="training-container" id="training">
      <div className="training-content">
        <h2>Training</h2>
        <div>
          <h3>Software Training</h3>
          <p>We offer a range of Quickbooks and Sage Products training to ensure that you are proficient in the use of your business management software. All courses are designed to give you hands on practical accounting software and payroll/HR training.</p>
        </div>
        <div>
          <h3>Fresh Graduate Training</h3>
          <p>Set yourself apart from the rest and get the accounting or human resource job you deserve.</p>
        </div>
        <div>
          <h3>Employee Retraining</h3>
          <p>Help your employer accelerate adoption of a complete business solution and maximize return on investment. Increase your opportunity to earn more than your counterparts in the workplace.</p>
        </div>
      </div>
    </div>
  );
};

export default Training;
