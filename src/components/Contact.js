import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Contacto = () => {
  const [servicio, setServicio] = useState('');
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const servicioParam = params.get('servicio');
    if (servicioParam) {
      setServicio(decodeURIComponent(servicioParam));
    }
  }, [location]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contacto</h1>
      <form className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="nombre" className="block mb-2">Nombre</label>
          <input type="text" id="nombre" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input type="email" id="email" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="servicio" className="block mb-2">Servicio</label>
          <input 
            type="text" 
            id="servicio" 
            value={servicio} 
            onChange={(e) => setServicio(e.target.value)}
            className="w-full p-2 border rounded" 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="mensaje" className="block mb-2">Mensaje</label>
          <textarea id="mensaje" className="w-full p-2 border rounded" rows="4"></textarea>
        </div>
        <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contacto;