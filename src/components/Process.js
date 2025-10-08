import React from 'react';

const steps = [
  { title: 'Descubrir', desc: 'Alineamos objetivos y definimos KPIs de negocio.' },
  { title: 'Diseñar', desc: 'Arquitectura RAG/agentes, datos y herramientas.' },
  { title: 'Implementar', desc: 'Desarrollo, integración y despliegue seguro.' },
  { title: 'Iterar', desc: 'Medimos, evaluamos y mejoramos continuamente.' },
];

const Process = () => (
  <section id="proceso" className="py-20 bg-gray-50">
    <div className="mx-auto max-w-5xl px-4">
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 text-center">Nuestro proceso</h2>
      <div className="mt-10 grid md:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <div key={s.title} className="rounded-2xl bg-white p-6 border border-gray-200">
            <div className="w-10 h-10 rounded-full gradient-brand text-white flex items-center justify-center font-bold">{i+1}</div>
            <h3 className="mt-3 font-semibold">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;

