import React from 'react';
// components/Brands.js

const Brands = () => (
  <section id="brands" className="bg-gray-900 text-white py-16">
    <h2 className="text-4xl font-bold text-center mb-8">Marcas con las que Trabajamos</h2>
    <div className="flex justify-center gap-16">
      <img src="01.png" alt="Marca 1" className="h-16  hover:grayscale-0 transition-all duration-300" />
      <img src="02.png" alt="Marca 2" className="h-16  hover:grayscale-0 transition-all duration-300" />
      <img src="12.png" alt="Marca 3" className="h-16  hover:grayscale-0 transition-all duration-300" />
      <img src="14.png" alt="Marca 4" className="h-16  hover:grayscale-0 transition-all duration-300" />
    </div>
  </section>
);

export default Brands;
