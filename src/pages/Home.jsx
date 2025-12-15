import React from 'react'
import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import HowItWorks from "../components/home/HowItWorks";
import Categories from "../components/home/Categories";
import Features from "../components/home/Features";
import PricingPreview from "../components/home/PricingPreview";
import CTA from "../components/home/CTA";
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