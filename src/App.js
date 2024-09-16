import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import CompanyPresentation from './components/CompanyPresentation';
import ServicesCarousel from './components/ServicesCarousel';
import Brands from './components/Brands';
import Contacto from './components/Contact';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';

// App.js
const App = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="App font-sans">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <ServicesCarousel />
              <CompanyPresentation />
              <Brands />
              <Testimonials />
            </>
          } />
          <Route path="/contacto" element={<Contacto />} />
          {/* Agrega aquí más rutas según sea necesario */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
