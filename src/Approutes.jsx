import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar'
import HomePageS from './Component/Homepage/HomePageS';
const Approutes = () => {
  return (
    <div>
      <Router>
        {/* <ScrollToTop /> */}
      <Navbar />
      
       <Routes>
        <Route path="/" element={<HomePageS />} />
       {/* <Route path="/services/seo" element={<SEOMarketingPage />} />
        <Route path="/services/ppc" element={<PPCAdvertisingPage />} />
        <Route path="/services/social-media" element={<SocialMediaPage />} />
         <Route path="/services/email" element={<EmailMarketingPage />} />
         <Route path="/services/content" element={<ContentMarketingPage />} />
           <Route path="/services/analytics" element={<AnalyticsReportingPage />} />
          <Route path="/services/web" element={<WebDevelopmentComponent />} />
         <Route path="/services/mobile" element={<MobileAppDevelopmentPage />} />
          <Route path="/services/software" element={<SoftwareDevPage />} />
          <Route path="/about" element={<AboutPage />} />
           <Route path="/blog" element={<DigitalMarketingBlog />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
             <Route path="/contact" element={<ContactPage />} />*/}
      </Routes>

      {/* <Footer /> */}
    </Router> 
     
    </div>
  )
}

export default Approutes
