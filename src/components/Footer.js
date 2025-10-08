import React from 'react';

const Footer = () => (
  <footer className="bg-gray-950 text-white mt-auto">
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Mandelbrot Tech" className="h-8 w-auto" />
            <span className="font-semibold">Mandelbrot Tech</span>
          </div>
          <p className="mt-3 text-white/70">Implementaciones de IA para empresas: RAG, agentes y automatización sobre tus datos y sistemas.</p>
        </div>
        <div>
          <div className="font-semibold">Soluciones</div>
          <ul className="mt-3 space-y-2 text-white/80 text-sm">
            <li>RAG y búsqueda semántica</li>
            <li>Agentes de IA con herramientas</li>
            <li>Integraciones y flujos LangGraph</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Contacto</div>
          <ul className="mt-3 space-y-2 text-white/80 text-sm">
            <li><a className="hover:text-white" href="/contacto">Hablemos</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-10 border-t border-white/10 pt-4 text-sm text-white/60 text-center">© {new Date().getFullYear()} Mandelbrot Tech</div>
    </div>
  </footer>
);

export default Footer;
