import React from 'react';
import { useNavigate } from 'react-router-dom';

const items = [
  {
    icon: '🧠',
    title: 'RAG en tus datos',
    desc: 'Respuestas verificables con citaciones sobre documentos, bases y APIs.',
    q: 'RAG',
  },
  {
    icon: '🤖',
    title: 'Agentes de IA',
    desc: 'Agentes con herramientas, memoria a largo plazo y flujos multi‑paso.',
    q: 'Agentes de IA',
  },
  {
    icon: '⚙️',
    title: 'Automatización',
    desc: 'Orquestamos procesos con LangGraph: estados, reintentos y observabilidad.',
    q: 'Automatización con IA',
  },
  {
    icon: '🧩',
    title: 'Integraciones',
    desc: 'Slack, CRM/ERP, correo, bases vectoriales, webhooks y más.',
    q: 'Integraciones',
  },
  {
    icon: '📊',
    title: 'Evaluación y métricas',
    desc: 'RAGAS, feedback humano, trazas y dashboards de calidad.',
    q: 'Evaluación de IA',
  },
  {
    icon: '🔒',
    title: 'Seguridad y cumplimiento',
    desc: 'Control de acceso, aislamiento de datos y despliegue privado.',
    q: 'Seguridad',
  },
];

const SolutionsAI = () => {
  const navigate = useNavigate();
  return (
    <section id="soluciones" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">Soluciones de IA para tu negocio</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Diseñamos sistemas de IA que impactan KPIs: atención, operaciones, revenue y productividad.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it) => (
            <div key={it.title} className="group rounded-2xl bg-white border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all p-6">
              <div className="text-3xl">{it.icon}</div>
              <h3 className="mt-3 font-semibold text-lg">{it.title}</h3>
              <p className="mt-1 text-gray-600">{it.desc}</p>
              <button onClick={() => navigate(`/contacto?servicio=${encodeURIComponent(it.q)}`)} className="mt-4 text-sm font-semibold text-purple-700 hover:text-purple-600">Quiero esto →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsAI;

