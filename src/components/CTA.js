import React from 'react';
import { useNavigate } from 'react-router-dom';

const CTA = () => {
  const navigate = useNavigate();
  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-3xl gradient-brand text-white p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold">¿Listo para llevar IA a producción?</h3>
            <p className="text-white/90 mt-2">Hablemos de tus datos, tus procesos y tus objetivos.</p>
          </div>
          <button onClick={() => navigate('/contacto')} className="rounded-xl bg-white text-gray-900 px-6 py-3 font-semibold hover:bg-gray-100">Agendar reunión</button>
        </div>
      </div>
    </section>
  );
};

export default CTA;

