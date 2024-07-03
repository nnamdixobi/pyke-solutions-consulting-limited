import React, { useState } from 'react';
import './OurBusinessManagementSolutions.css';
import AccountingSolutions from '../AccountingSolutions/AccountingSolutions';
import TaxSolutions from '../TaxSolutions/TaxSolutions';

const OurBusinessManagementSolutions = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleReadMore = (section) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };

  return (
    <div className="our-business-management-solutions-container" id="our-solutions">
      <div className="our-business-management-solutions-content">
        <h2>Our Business Management Solutions</h2>
        
        <p>From startups to larger organizations, Sage business solutions assist customers to manage their new and growing businesses, supporting their goals of maximizing productivity, streamlining business processes, delivering superior customer services.</p>
        
        <p>We Implement Accounting and ERP Solutions that integrate all aspects of the business such as Finance/Accounting, Inventory/Warehouse Management, Procurement, Sales, Marketing, CRM, Document Control, Payroll, Human Resources, and Reporting etc.</p>
        
        <ul>
          <li>
            <h3>Sage X3</h3>
            <p>Sage Enterprise Management, also known as Sage X3, is an ERP software suite that includes integrated functionality for financial management, sales, customer service, distribution, inventory, and manufacturing, and business intelligence. It is web-based, browser agnostic, and responsive on mobile devices. At the same time, it is also available to be deployed on-premises and as a service in the AWS cloud managed by Sage or a partner-provisioned cloud. The software is configurable to company requirements, user roles, and preferences. Visual processes, automated workflows and alerts, document management, and communication tools are features available in the system. It is designed to support global organizations with multiple companies, sites, languages, currencies, and legislation. Customizable add-on tools extend software capabilities, and it interfaces with third-party software including CRM, WMS, and e-commerce.</p>
            <span className="read-more" onClick={() => toggleReadMore('sage-x3')}>Read More</span>
            {expandedSections['sage-x3'] && (
              <div className="hidden-content show">
                <ul>
                  <li>Finance</li>
                  <li>Open Purchasing</li>
                  <li>Open Sales</li>
                  <li>Open Customer Service</li>
                  <li>Open Inventory</li>
                  <li>Open Manufacturing</li>
                  <li>Open Business intelligence and reporting</li>
                  <li>Open Mobile web apps</li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <h3>Sage 300 (Cloud Functionality)</h3>
            <p>Sage 300 ERP is the most complete financial suite by Sage for mid-sized and smaller businesses looking to connect all operations enterprise-wide. Sage 300 ERP solutions (formerly Sage ERP Accpac) deliver the best of both worlds—providing you the freedom to choose between on-premises and online deployment options. Both will help you interconnect processes from each functional area of your business securely and in real time, bringing front-office and back-office operations into alignment.</p>
            <span className="read-more" onClick={() => toggleReadMore('sage-300')}>Read More</span>
            {expandedSections['sage-300'] && (
              <div className="hidden-content show">
                <ul>
                  <li>Accounting and Finance</li>
                  <li>Integrated Payment Processing: Sage 300 Integrated Credit Card Processing</li>
                  <li>Sales and Use Tax Automation by Vertex SMB</li>
                  <li>Business Intelligence and Reporting</li>
                  <li>Purchasing Management</li>
                  <li>Sales Management</li>
                  <li>Inventory and Warehouse Management</li>
                  <li>Customer Relationship Management (CRM)</li>
                  <li>Human Resources Management and Payroll</li>
                  <li>Time and Project Management</li>
                  <li>Checks and Forms</li>
                  <li>eCommerce Integration</li>
                  <li>Sage 300 Document Management By Altec</li>
                  <li>Document Management: Integrated AP Automation and Workflow</li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <h3>Sage 200 (Evolution Premium)</h3>
            <p>Sage 200 Evolution delivers an entire business management solution. It’s the new way to work</p>
            <span className="read-more" onClick={() => toggleReadMore('sage-200')}>Read More</span>
            {expandedSections['sage-200'] && (
              <div className="hidden-content show">
                <ul>
                  <li>System Manager</li>
                  <li>Advanced Security</li>
                  <li>Graph</li>
                  <li>Report Writer</li>
                  <li>Receivables and Payables</li>
                  <li>Multiple Debtor & Creditor Control Accounts</li>
                  <li>General Ledger</li>
                  <li>Sales & Purchase Order Entry</li>
                  <li>Inventory Control</li>
                  <li>Alert Manager</li>
                  <li>Inventory Optimization</li>
                  <li>Inventory Issue</li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <h3>SageOne Accounting</h3>
            <p>Offered by Sage Pastel for SMEs of diverse industries including retail/trading businesses. It features invoicing, inventory management, multi-currencies, and reporting.</p>
            <span className="read-more" onClick={() => toggleReadMore('sageone-accounting')}>Read More</span>
            {expandedSections['sageone-accounting'] && (
              <div className="hidden-content show">
                <p>Cheapest cloud accounting solution. Currency can be set to the Nigerian Naira.</p>
              </div>
            )}
          </li>
          <li>
            <h3>Human Resources and Payroll Solutions</h3>
            <ul>
              <li>Sage X3 People</li>
              <li>Sage 300 People</li>
              <li>Sage Pastel Partner Payroll & HRM</li>
              <li>Norming Payroll and Human Resources Management</li>
            </ul>
          </li>
          <li>
            <h3>QuickBooks Accounting Solutions</h3>
            <p>QuickBooks products are geared mainly toward small and medium-sized businesses and offer on-premises accounting applications as well as cloud-based versions that accept business payments, manage and pay bills, and payroll functions.</p>
            <span className="read-more" onClick={() => toggleReadMore('quickbooks-solutions')}>Read More</span>
            {expandedSections['quickbooks-solutions'] && (
              <div className="hidden-content show">
                <h4>QuickBooks Pro</h4>
                <p>For businesses with sales up to $1MM/year that require no more than 3 users:</p>
                <ul>
                  <li>Supports up to 3 simultaneous users in a data file</li>
                  <li>Receivables and revenue: invoices, credit memos, statements, sales receipts, receive payments, estimate to invoice</li>
                  <li>Payables and expenditures: purchase orders, item receipts, pay bills</li>
                  <li>Job Costing</li>
                  <li>Inventory part tracking</li>
                  <li>Time and mileage tracking</li>
                  <li>Banking activities: deposits, checks, credit card charges, credits, bank charges, interest, paychecks, online banking, bank reconciliation</li>
                  <li>Sales tax: collect and pay sales tax</li>
                  <li>Multiple currencies</li>
                  <li>Price levels: fixed %</li>
                  <li>Reports: budgets, robust operational and financial reporting</li>
                  <li>Miscellaneous: create letters and labels, memorize reports and transactions, customize templates, export to Excel, print/e-file 1099s, track leads, stay organized, navigate easily, experience good user security/access, email transactions with documents attached</li>
                </ul>
                <h4>QuickBooks Premier</h4>
                <p>For Nonprofit, Manufacturing & Wholesale, Professional Services, Contractor, or Retail businesses:</p>
                <ul>
                  <li>5 concurrent users in data file</li>
                  <li>Sales orders/backorder tracking, current availability tracking, sales order to PO to invoice</li>
                  <li>Unit of measure, build assembly, inventory center</li>
                  <li>Job costing: estimate to PO, change order tracking, view unbilled time and expense from 1 window, batch invoice time and expense</li>
                  <li>Reporting: balance sheet by class, previous reconciliation reports, forecasting, business planner, industry-specific reporting</li>
                  <li>Price levels: per item, not just fixed percentage</li>
                  <li>Billing rate levels</li>
                  <li>Journal entries: create a reversing entry</li>
                  <li>Employee expense tracking</li>
                  <li>Budgets: by job, by class, prior year comparisons</li>
                </ul>
                <h4>QuickBooks Online</h4>
                <p>QuickBooks Online provides functionality including invoicing, expense tracking, bank reconciliation, inventory, and multi-currency. It is ideal for small businesses that need a cloud-based accounting solution.</p>
                <h4>QuickBooks Enterprise</h4>
                <p>QuickBooks Enterprise Solutions is for growing businesses needing more control over their accounting and financial systems, offering advanced functionality for inventory, sales, purchasing, and payroll.</p>
              </div>
            )}
          </li>
        </ul>
        
        <AccountingSolutions />
        <TaxSolutions />
      </div>
    </div>
  );
};

export default OurBusinessManagementSolutions;
