import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar'
import HomePageS from './Component/Homepage/HomePageS';
import Footer from './Component/Footer';
import TrainersPage from './Component/TrainerPage/TrainersPage';
import ContactPage from './Component/Contactpage/Contactpage';
import CardioComponent from './Component/Classes/CardioComponent';
import CrossFit from './Component/Classes/CrossFit';
import StrengthTraining from './Component/Classes/StrengthTraining';
import YogaComponent from './Component/Classes/YogaComponent';
import PricingPage from './Component/Classes/PricingPage';
import BasicPlanDetails from './Component/Allplan/BasicPlanDetails';
import StandardPlanDetails from './Component/Allplan/StandardPlanDetails';
import PremiumPlanDetails from './Component/Allplan/PremiumPlanDetails';
import ElitePlanDetails from './Component/Allplan/ElitePlanDetails';
import ScrollToTop from './Component/Contactpage/ScrollToTop';
const Approutes = () => {
  return (
    <div>
      <Router>
        <ScrollToTop />
      <Navbar />
      
       <Routes>
        <Route path="/" element={<HomePageS />} />
       <Route path="/trainers" element={<TrainersPage  />} />
        <Route path="/contact" element={<ContactPage />} />
         <Route path="/classes/cardio" element={<CardioComponent />} />
         <Route path="/classes/crossfit" element={<CrossFit />} />
         <Route path="/classes/yoga" element={<YogaComponent />} />
           <Route path="/classes/strengthtraning" element={<StrengthTraining />} />
         <Route path="/pricing" element={<PricingPage />} />
        <Route path="/plan/basic-plan" element={<BasicPlanDetails />} />
          <Route path="/plan/standard-plan" element={<StandardPlanDetails />} />
          <Route path="/plan/premium-plan" element={<PremiumPlanDetails />} />
           <Route path="/plan/elits-plan" element={<ElitePlanDetails />} />
           
      </Routes>

      <Footer />
    </Router> 
     
    </div>
  )
}

export default Approutes
