import React from 'react';
import Header from './components/Header';
import ServicesCarousel from './components/ServicesCarousel';
import Brands from './components/Brands';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

// App.js
const App = () => {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <ServicesCarousel />
        <Brands />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;
