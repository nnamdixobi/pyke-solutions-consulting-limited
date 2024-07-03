import React from 'react'
import './index.css';
import Nav from './components/navBar/Nav.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import WhatWeDo from './components/WhatWeDo/WhatWeDo.jsx';
import OurBusinessManagementSolutions from './components/OurBusinessManagementSolutions/OurBusinessManagementSolutions.jsx';
import WhyUs from './components/WhyUs/WhyUs.jsx';
import Training from './components/Training/Training.jsx';
import ContactUs from './components/ContactUs/ContactUs.jsx';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy.jsx';

// Define a functional component called 'App'
const App = () => {

  // Return JSX code representing the component's output
  // In this case, it renders a div element
  return (
    
    <>

    <Nav />
    <Home />
    <About />
    <WhatWeDo />
    <OurBusinessManagementSolutions />
    <Training />
    <WhyUs />
    <ContactUs />
    <PrivacyPolicy />
    
    

    
    </>
  )
}

// Export the 'App' component as the default export of this module
export default App
