import React from "react";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import FeatureSection from "./components/FeatureSection.jsx";
import WorkFlow from "./components/WorkFlow.jsx";
import PricingSection from "./components/PricingSection.jsx";
import Testimonials from "./components/Testimonials.jsx";
import FAQSection from "./components/FAQSection.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
        <HeroSection />
           <FeatureSection />
           <WorkFlow />
           <PricingSection />
           <Testimonials />
            <FAQSection />
           <Footer />
    </div>
  );
};

export default App;
