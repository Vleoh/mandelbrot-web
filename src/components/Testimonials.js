import React from 'react';

const Testimonials = () => (
  <section id="testimonials" className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-16 text-white">
    <h2 className="text-4xl font-bold text-center mb-8">Qué dicen nuestros clientes</h2>
    <div className="flex flex-wrap justify-center gap-6 px-4">
      <div className="bg-gray-800/70 border border-white/10 p-6 rounded-xl w-72">
        <p>“Implementamos RAG sobre 200k documentos. Bajamos 40% el TTR del equipo.”</p>
        <span className="block text-right mt-4 text-white/70">— CX Lead, Retail</span>
      </div>
      <div className="bg-gray-800/70 border border-white/10 p-6 rounded-xl w-72">
        <p>“Los agentes automatizan tareas operativas. Ahorro de +300 hs/mes.”</p>
        <span className="block text-right mt-4 text-white/70">— Ops Manager, Logística</span>
      </div>
      <div className="bg-gray-800/70 border border-white/10 p-6 rounded-xl w-72">
        <p>“Great partner. Shipping rápido y foco en métricas de negocio.”</p>
        <span className="block text-right mt-4 text-white/70">— CTO, SaaS</span>
      </div>
    </div>
  </section>
);

export default Testimonials;

