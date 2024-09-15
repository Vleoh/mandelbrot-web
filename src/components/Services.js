import React from 'react';
// components/Services.js

const Services = () => (
  <section id="services" className="py-16 bg-gray-100 text-gray-800">
    <h2 className="text-4xl font-bold text-purple-800 mb-8 text-center">Nuestros Servicios</h2>
    <div className="service mb-8">
      <h3 className="text-2xl font-semibold text-purple-800">Desarrollo de ERP</h3>
      <p className="text-lg">Sistemas de planificación de recursos empresariales adaptados.</p>
      <img src="logo192.png" alt="ERP" className="w-full mt-4 rounded-md" />
    </div>
    <div className="service mb-8">
      <h3 className="text-2xl font-semibold text-purple-800">Soluciones CRM</h3>
      <p className="text-lg">Herramientas de gestión de relaciones con clientes.</p>
      <img src="crm.png" alt="CRM" className="w-full mt-4 rounded-md" />
    </div>
    <div className="service mb-8">
      <h3 className="text-2xl font-semibold text-purple-800">Control de Inventarios</h3>
      <p className="text-lg">Sistemas de gestión de stock en tiempo real.</p>
      <img src="inventory.png" alt="Control de Inventarios" className="w-full mt-4 rounded-md" />
    </div>
    <div className="service mb-8">
      <h3 className="text-2xl font-semibold text-purple-800">Software de Gestión de Turnos</h3>
      <p className="text-lg">Soluciones completamente integradas para la gestión de citas.</p>
      <img src="schedule.jpg" alt="Gestión de Turnos" className="w-full mt-4 rounded-md" />
    </div>
  </section>
);

export default Services;
