import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroAI = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden pt-28 pb-20 text-white">
      <div className="absolute inset-0 gradient-brand opacity-90" />
      <div className="absolute inset-0" style={{backgroundImage:'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize:'24px 24px'}} />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              IA para empresas
              <span className="block opacity-90">RAG, Agentes y Automatización</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/90 max-w-xl">
              Implementamos soluciones de IA centradas en negocio usando LangChain y LangGraph: RAG sobre tus datos, agentes que operan procesos y flujos automáticos que escalan.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => navigate('/contacto')} className="rounded-xl bg-white text-gray-900 px-6 py-3 font-semibold hover:bg-gray-100">
                Agenda una reunión
              </button>
              <a href="#soluciones" className="rounded-xl border border-white/40 px-6 py-3 font-semibold hover:bg-white/10">
                Ver soluciones
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-2 text-xs text-white/90">
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">RAG en producción</span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">Agentes multi‑tool</span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">Observabilidad y evaluación</span>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl glass p-6 border border-white/10">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                  <div className="text-2xl">🧠</div>
                  <div className="mt-2 font-semibold">RAG</div>
                  <div className="text-white/80">Buscamos y citamos tus fuentes</div>
                </div>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                  <div className="text-2xl">🤖</div>
                  <div className="mt-2 font-semibold">Agentes</div>
                  <div className="text-white/80">Con herramientas y memoria</div>
                </div>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                  <div className="text-2xl">🔗</div>
                  <div className="mt-2 font-semibold">LangChain</div>
                  <div className="text-white/80">Pipelines robustos y composables</div>
                </div>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                  <div className="text-2xl">📈</div>
                  <div className="mt-2 font-semibold">LangGraph</div>
                  <div className="text-white/80">State machines confiables</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAI;

