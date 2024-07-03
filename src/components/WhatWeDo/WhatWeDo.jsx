import React, { useState } from 'react';
import './WhatWeDo.css';

const WhatWeDo = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleReadMore = (section) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };

  return (
    <div className="what-we-do-container" id="what-we-do">
      <div className="what-we-do-content">
        <h2>What We Do</h2>
        
        <ul>
          <li>
            <h3>Business Management Solutions</h3>
            <p>We Implement Accounting and ERP Solutions, integrating all aspects of the business such as Finance/Accounting, Inventory/Warehouse Management, Procurement, Sales, Marketing, CRM, Document Control, Payroll, Human Resources, Reporting etc.</p>
          </li>
          <li>
            <h3>Accounting Software and ERP Sales</h3>
            <p>We are business partner to leading software companies like Sage, QuickBooks amongst others.</p>
          </li>
          <li>
            <h3>Practical Accounting/Software Training</h3>
            <p>We offer various levels of practical accounting trainings from basic to expert levels, using the software to drive home the double entry principles of accounting and focusing on the resultant reports thereof.</p>
          </li>
          <li>
            <h3>Accounting Services</h3>
            <p>Accounting, bookkeeping, and budgeting are tasks that small business owners face every day. Save time and resources by trusting Pyke Consulting with these essential functions.</p>
            <span className="read-more" onClick={() => toggleReadMore('accounting-services')}>Read More</span>
            {expandedSections['accounting-services'] && (
              <div className="hidden-content show">
                <p>We provide accounting and bookkeeping services for small to midsize businesses. We handle bookkeeping, help manage cash flow, and make sure you always have a clear understanding of the current state of your finances.</p>
              </div>
            )}
          </li>
          <li>
            <h3>Company Incorporation and Annual Filing</h3>
            <p>We offer company incorporation and registration services. We also assist companies with annual filing of accounts, secretary filing, and other Corporate Affairs Commission issues.</p>
          </li>
          <li>
            <h3>Financial and Business Consulting</h3>
            <p>Understanding your business requires more than looking at numbers and spreadsheets. We take the time to get to know you and your business so we can develop innovative ideas for increasing your bottom line.</p>
          </li>
          <li>
            <h3>Preparation of Accounting and Management Documents</h3>
            <p>We take off the burden of preparing professional documents often required by financial institutions from small and mid-size companies with no in house Accountants. We specialize in the development of Business Plan, Feasibility Study, Cash flow, Management Account, Statement of Networth etc.</p>
          </li>
          <li>
            <h3>Business Advisory</h3>
            <p>We also provide new and existing businesses with advisory services including assistance in obtaining a business loan and setting up a proper accounting system.</p>
          </li>
          <li>
            <h3>Payroll & Human Resources Services</h3>
            <p>Stop toiling over payroll tax filings and calculations! We can take over your payroll processing, saving you time and money.</p>
            <span className="read-more" onClick={() => toggleReadMore('payroll-hr')}>Read More</span>
            {expandedSections['payroll-hr'] && (
              <div className="hidden-content show">
                <p>We set up effective computerized payroll and human resources management systems, taking off the burden of month end payroll processing, payroll tax filings, human resources management.</p>
              </div>
            )}
          </li>
          <li>
            <h3>Recruitment and Training of Accountants</h3>
            <p>Share your specifications with us and we'll help you recruit an accountant. We also help with negotiating the pay for the Accountant and retraining existing employees.</p>
            <p>We make getting an Accountant specially trained and adopted to your business easy. Get help negotiating monthly salary for the accountant.</p>
          </li>
          <li>
            <h3>Outsourced Dedicated Accountant</h3>
            <p>Many small businesses don't have the manpower or resources necessary to regularly fulfill their accounting and bookkeeping responsibilities. Consider outsourcing these critical tasks to us and we'll make it easy to do and affordable. Get a part-time accountant to help your business.</p>
          </li>
          <li>
            <h3>IT Consultancy</h3>
            <p>Your business can leverage on our professional experience in business IT consulting and support services. We help companies confidently address technology-related decisions and ensure their IT organizations and operating models are agile and effective, equipping them to cut through the noise of fleeting technology trends to create enduring results.</p>
            <span className="read-more" onClick={() => toggleReadMore('it-consultancy')}>Read More</span>
            {expandedSections['it-consultancy'] && (
              <div className="hidden-content show">
                <p>We work with clients to analyze business technology issues within their businesses in the following areas; developing an appropriate IT strategy, regulatory and compliance, IT risk management and controls, sourcing IT tools.</p>
                <p>We offer professional WAN and LAN networking services. We have core expertise in deploying effective hardware networking for your business.</p>
                <p>Software Support Services: We offer support for your existing software applications, providing new and better ways to use your software to carry out the most technical financial transactions.</p>
                <p>Computer Hardware/Accessories Sales: We provide access to original and cost effective computer hardware, accessories, toners and inks. We partner with major brands like HP, DELL, VMWARE, MICROSOFT, ASUS, etc to ensure that you buy quality products and directly from the manufacturers.</p>
              </div>
            )}
          </li>
          <li>
            <h3>Tax Consultancy</h3>
            <p>We offer proactive tax planning strategies for both businesses and individuals. We'll save you money on taxes by making sure you take advantage of every lawful tax reduction laws.</p>
            <span className="read-more" onClick={() => toggleReadMore('tax-consultancy')}>Read More</span>
            {expandedSections['tax-consultancy'] && (
              <div className="hidden-content show">
                <p>Business decisions can result in unanticipated tax consequences. Before making any costly mistakes, consult with a reliable professional like Pyke Consulting. When you turn to us for guidance, we'll draw on our wealth of tax planning experience and offer advice on what choices make the most financial sense. We're proficient in tax regulations and know how to coordinate tax planning techniques that will reduce tax liabilities.</p>
                <p>If you're starting a new business, we can determine which business structure will bring the highest tax savings now and down the road. We also provide income tax planning for individual business owners and taxpayers. Conscientious tax planning throughout the year can save you money and make tax time easier.</p>
              </div>
            )}
          </li>
          <li>
            <h3>Auditing Services</h3>
            <p>Get the highest level of assurance for investors and creditors with our business audit services. In conjunction with our Audit partner, we provide auditing services that is geared at getting the highest level of assurance for investors.</p>
          </li>
          <li>
            <h3>General Business Consulting</h3>
            <p>We offer our extensive financial expertise to businesses in virtually every industry and can determine which techniques will bring your business the greatest benefit.</p>
            <span className="read-more" onClick={() => toggleReadMore('business-consulting')}>Read More</span>
            {expandedSections['business-consulting'] && (
              <div className="hidden-content show">
                <p>No matter what combination of accounting and bookkeeping services your business requires, we're ready to formulate a comprehensive service solution around your needs. We'll determine which tax planning techniques will bring the most benefits to businesses in your industry and will put together a detailed plan for your particular business.</p>
                <p>We are focused on helping our clients innovate, grow, improve quality, minimize costs and leverage talent. We do this with expertise while working in partnership with you.</p>
                <p>We offer our extensive financial expertise to businesses in virtually every industry and can determine which techniques will bring your business the greatest benefit.</p>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WhatWeDo;
