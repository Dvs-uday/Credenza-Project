import React from 'react';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import Stats from './Components/Stats';
import Feature from './Components/Feature';
import SampleCatalogue from './Components/SampleCatalogue';
import Footer from './Components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Stats />
      <Feature 
        title="Learning Science"
        description="Our approach involves deeply learning science concepts through visual and interactive methods, ensuring a strong foundation in scientific principles."
        image="/assets/images/learning-science-image.jpg"
      />
      <Feature 
        title="Vedic Math"
        description="Our approach involves deeply learning math concepts through vedic methods, ensuring a strong foundation in mathematical principles."
        image="/assets/images/vedic-math-image.jpg"
      />
      <Feature 
        title="Bespoke"
        description="Our approach involves deeply learning bespoke concepts through visual and interactive methods, ensuring a strong foundation in bespoke principles."
        image="/assets/images/bespoke-image.jpg"
      />
      <SampleCatalogue />
      <Footer />
    </div>
  );
};

export default App;