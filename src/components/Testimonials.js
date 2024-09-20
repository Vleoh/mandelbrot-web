import React from 'react';
// components/Testimonials.js

const Testimonials = () => (
  <section id="testimonials" className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-16 text-white">
    <h2 className="text-4xl font-bold text-center mb-8">Lo que Dicen Nuestros Clientes</h2>
    <div className="flex justify-center gap-8">
      <div className="bg-gray-800 p-6 rounded-lg w-64">
        <p>"Excelente servicio, nos ayudaron a optimizar nuestra empresa en tiempo récord."</p>
        <span className="block text-right mt-4">- Juan Pérez</span>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg w-64">
        <p>"El mejor software que hemos utilizado, superó nuestras expectativas."</p>
        <span className="block text-right mt-4">- María García</span>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg w-64">
        <p>"Muy recomendados, soluciones a medida para nuestro negocio."</p>
        <span className="block text-right mt-4">- Carlos Mendoza</span>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg w-64">
        <p>"Una experiencia increíble, soporte rápido y personalizado."</p>
        <span className="block text-right mt-4">- Sofía López</span>
      </div>
    </div>
  </section>
);

export default Testimonials;
