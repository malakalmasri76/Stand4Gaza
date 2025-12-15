import React from 'react'
import Navbar from "../components/layout/Navbar";
import Hero from "../components/Home/Hero";
import HowItWorks from "../components/Home/HowItWorks";
import Categories from "../components/Home/Categories";
import Features from "../components/Home/Features";
import PricingPreview from "../components/Home/PricingPreview";
import CTA from "../components/Home/CTA";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
     <>
     <Navbar/>
      <Hero/>
      <HowItWorks />
      <Categories />
      <Features />
      <PricingPreview />
      <CTA />
      <Footer/>
    </>
  )
}

export default Home
