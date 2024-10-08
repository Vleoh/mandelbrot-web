import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import CompanyPresentation from './components/CompanyPresentation';
import ServicesCarousel from './components/ServicesCarousel';
import Brands from './components/Brands';
import Contacto from './components/Contact';
import Footer from './components/Footer';

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
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={
            <>
              <ServicesCarousel />
              <CompanyPresentation />
              <Brands />
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
