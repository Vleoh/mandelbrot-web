import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    servicio: '',
    mensaje: ''
  });
  const [status, setStatus] = useState('');
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const servicioParam = params.get('servicio');
    if (servicioParam) {
      setFormData(prevState => ({
        ...prevState,
        servicio: decodeURIComponent(servicioParam)
      }));
    }
  }, [location]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Enviando...');
    try {
      // Asegúrate de reemplazar esta URL con la URL real de tu backend en Vercel
      const response = await fetch('https://tu-backend-vercel.vercel.app/api/enviar-contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          mensaje: `Servicio: ${formData.servicio}\n\n${formData.mensaje}`
        })
      });
      if (response.ok) {
        setStatus('Mensaje enviado con éxito');
        setFormData({ nombre: '', email: '', servicio: '', mensaje: '' });
      } else {
        setStatus('Error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Error al enviar el mensaje');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contacto</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="nombre" className="block mb-2">Nombre</label>
          <input 
            type="text" 
            id="nombre" 
            value={formData.nombre}
            onChange={handleChange}
            className="w-full p-2 border rounded" 
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input 
            type="email" 
            id="email" 
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded" 
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="servicio" className="block mb-2">Servicio</label>
          <input 
            type="text" 
            id="servicio" 
            value={formData.servicio} 
            onChange={handleChange}
            className="w-full p-2 border rounded" 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="mensaje" className="block mb-2">Mensaje</label>
          <textarea 
            id="mensaje" 
            value={formData.mensaje}
            onChange={handleChange}
            className="w-full p-2 border rounded" 
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
          Enviar
        </button>
        {status && <p className="mt-4 text-center">{status}</p>}
      </form>
    </div>
  );
};

export default Contacto;