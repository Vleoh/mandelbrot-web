import React from 'react';
// components/Header.js

const Header = () => (
  <header className="bg-gradient-to-r from-purple-800 via-purple-900 to-black p-6 sticky top-0 z-50 shadow-lg">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center">
        {/* Logo alineado a la izquierda y con tamaño controlado usando Tailwind */}
        <img 
          src='logo.png' 
          className="h-8 md:h-24 object-contain mr-4" 
          alt='mandelbrot'
        />
      
      </div>
      <nav>
        <ul className="flex space-x-6 text-white">
          <li className="hover:text-blue-400 transition-colors duration-300"><a href="#services">Servicios</a></li>
          <li className="hover:text-blue-400 transition-colors duration-300"><a href="#brands">Marcas</a></li>
          <li className="hover:text-blue-400 transition-colors duration-300"><a href="#testimonials">Opiniones</a></li>
          <li className="hover:text-blue-400 transition-colors duration-300"><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
