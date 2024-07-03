import React, { useState } from 'react';
import './AccountingSolutions.css';

const AccountingSolutions = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleReadMore = (section) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };

  return (
    <div className="accounting-solutions-container" id="accounting-solutions">
      <div className="accounting-solutions-content">
        <h2>Accounting Solutions</h2>

        <h3>Bookkeeping</h3>
        <ul>
          <li>Get help with Cleaning Up your books</li>
          <li>Develop, implement, maintain, and review internal business processes.</li>
        </ul>

        <h3>Budgets</h3>
        <ul>
          <li>Brief with our consultant to understand your budget needs and business peculiarities</li>
          <li>Get a Master Budget, including an annual Revenue and Expense budget for your business</li>
          <li>Training on the budget- control and variance measurements</li>
        </ul>

        <h3>Bank Reconciliation</h3>
        <ul>
          <li>Reconcile your bank statement with your internal account books</li>
          <li>Reconcile all inflows, payments, and bank charges on your account.</li>
        </ul>

        <h3>Pension Registration</h3>
        <ul>
          <li>PENCOM registration for your company</li>
          <li>PFA and PEN registrations for your employees.</li>
        </ul>

        <h3>Pension Remittances</h3>
        <ul>
          <li>Guidance on Pension computations</li>
          <li>Guidance on payments to PFAs/PFCs</li>
          <li>Supporting schedules prepared.</li>
        </ul>
      </div>
    </div>
  );
};

export default AccountingSolutions;
