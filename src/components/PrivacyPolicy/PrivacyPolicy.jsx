import React from 'react';
import './PrivacyPolicy.css';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGoogle } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container" id="privacy-policy">
      <div className="privacy-policy-content">
        <h2>Privacy Policy</h2>
        <p>This policy covers how we use your personal information. We take your privacy seriously and will take all measures to protect your personal information.</p>

        <h3>We are committed to protecting your privacy</h3>
        <p>We collect the minimum amount of information about you that is commensurate with providing you with a satisfactory service. The purpose of this Privacy Policy is to enable you to understand which personal identifying information (“PII”, “Personal Information”) of yours is collected, how and when we might use your information, who has access to this information, and how you can correct any inaccuracies in the information.</p>

        <p>To better protect your privacy, we provide this notice explaining our online information practices and the choices you can make about the way your information is collected and used. To make this notice easy to find, we make it available on our website.</p>

        <h3>Information collected</h3>
        <p>The Personal Information you give us depends on the type of service, support, or sale inquiry, and may include your name, address, telephone number, email address, business description, peculiar accounting issues of your business, dates of service provided, types of service provided, payment history, manner of payment, amount of payments, date of payments or other payment information. The financial information will only be used to bill you for the products and services you purchased.</p>

        <p>Currently, our services are paid only by bank transfers. However, upon launch of our online payment option, if you purchase by credit or debit card, this information may be forwarded to your card provider. All sensitive information is collected on a secure server and data is transferred. When transferring personal information a security icon will appear in your browser.</p>

        <h3>Information use</h3>
        <p>Information collected is used for billing and to provide service and support to our customers. We may also study this information to determine our customers’ needs and proactively set up a product/service to provide such needs for our customers. All reasonable precautions are taken to prevent unauthorized access to this information.</p>

        <p>This safeguard may require you to provide additional forms of identity should you wish to obtain information about your account details. Pyke Solutions may email its monthly newsletter and other updates about the business to the primary contact email on file, but customers are able to opt out of this option at any time.</p>

        <h3>Cookies</h3>
        <p>Your Internet browser has the in-built facility for storing small text files – “cookies” – that hold information which allows a website to recognize your account. We use cookies to save your preferences and login information and provide personalized functionality.</p>

        <p>You can reject cookies by changing your browser settings, but be aware that this will disable some of the functionality on the Pyke Solution’s website. More information about cookies can be found at <a href="http://en.wikipedia.org/wiki/HTTP_cookie">http://en.wikipedia.org/wiki/HTTP_cookie</a>.</p>

        <h3>Disclosing Information</h3>
        <p>We do not disclose any personal information obtained about you from this website to third parties. This does not apply to affiliates that provide services to you based on your peculiar business need for which we may not have an internal support resource.</p>

        <p>We may use personal information to keep in contact with you and inform you of developments associated with our business. We may also disclose aggregate, anonymous data based on information collected from users to potential partners, our affiliates, and reputable third parties.</p>

        <p>We take all available measures to select affiliates and service providers that are ethical and provide similar privacy protection to their customers and the community. We do not make any representations about the practices and policies of these companies.</p>

        <h3>Changes to this Policy</h3>
        <p>Any changes to our Privacy Policy will be placed here and will supersede this version of our Policy. We will take reasonable steps to draw your attention to any changes in our Policy. However, to be on the safe side, we suggest that you read this document each time you use the website to ensure that it still meets with your approval.</p>

        <h3>Contacting us</h3>
        <p>If you have any questions about our Privacy Policy, or if you want to know what information we have collected about you, please email us at <a href="mailto:info@pykesolutions.org">info@pykesolutions.org</a>.</p>

        {/* Social Media Links */}
        <div className="social-links">
          <a href="https://www.google.com/search?q=pyke+solutions+consulting+limited&oq=Pyke&gs_lcrp=EgZjaHJvbWUqDggDEEUYJxg7GIAEGIoFMgYIABBFGDwyCAgBEEUYJxg7MgYIAhBFGDsyDggDEEUYJxg7GIAEGIoFMgYIBBBFGDkyBggFEEUYOzIGCAYQRRg8MgYIBxBFGDzSAQg0OTE2ajBqN6gCCLACAQ&sourceid=chrome&ie=UTF-8" target="_blank" rel="noopener noreferrer" aria-label="Google My Business">
            <FaGoogle />
          </a>
          <a href="https://www.linkedin.com/company/pyke-solutions-consulting-limited/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="https://www.facebook.com/pykesolutions" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://x.com/i/flow/login?redirect_after_login=%2Fpykesolutions1" target="_blank" rel="noopener noreferrer" aria-label="Twitter (X)">
          <BsTwitterX />
          </a>
          <a href="https://www.instagram.com/pykesolutionsconsultinglimited/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
