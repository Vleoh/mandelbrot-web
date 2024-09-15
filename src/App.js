import React from 'react';
import Header from './components/Header';
import ServicesCarousel from './components/ServicesCarousel';
import CompanyPresentation from './components/CompanyPresentation';
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
        <CompanyPresentation />
        <Brands />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;
