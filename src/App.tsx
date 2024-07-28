import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Hero from './components/Hero';
import Category from './components/Category';
import CategoryCard from './components/CategoryCard';
import FeatureSectionFruits from './components/FeatureSectionFruits';
import FeatureSectionBreakfast from './components/FeatureSectionBreakfast';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <Category/>
      <FeatureSectionFruits/>
      <FeatureSectionBreakfast/>
    </div>
  );
}

export default App;
