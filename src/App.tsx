import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Hero from './components/Hero';
import Category from './components/Category';
import CategoryCard from './components/CategoryCard';
import FeatureSectionFruits from './components/FeatureSectionFruits';
import FeatureSectionBreakfast from './components/FeatureSectionBreakfast';
import Banner from './components/Banner';
import BlogCard from './components/BlogCard';
import Newsletter from './components/Newsletter';
import Feature from './components/Feature';
import Footer from './components/Footer';

function App() {
  const[showCart,setshowCart]=useState(false);
  return (
    <div className="App">
      <Navbar  />
      <Hero/>
      <Category/>
      <FeatureSectionFruits/>
      <FeatureSectionBreakfast/>
      <Banner/>
      <BlogCard/>
      <Newsletter/>
      <Feature/>
      <Footer/>
      
      
      
    
    </div>
  );
}

export default App;
