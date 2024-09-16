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
      setFormData(prev => ({ ...prev, servicio: decodeURIComponent(servicioParam) }));
    }
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Enviando...');
    try {
      const response = await fetch('https://mandelbrot-back-jti72sv26-vleohs-projects.vercel.app/api/enviar-contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setStatus(`Mensaje enviado con éxito. Gracias por contactarnos, ${formData.nombre}!`);
        setFormData({ nombre: '', email: '', servicio: '', mensaje: '' });
        // Mantener el parámetro de servicio en la URL si existe
        const params = new URLSearchParams(window.location.search);
        const servicioParam = params.get('servicio');
        if (servicioParam) {
          setFormData(prev => ({ ...prev, servicio: decodeURIComponent(servicioParam) }));
        }
      } else {
        const errorData = await response.text();
        console.error('Error response:', errorData);
        setStatus('Error al enviar el mensaje. Por favor, intenta de nuevo.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Error de conexión. Por favor, verifica tu conexión a internet e intenta de nuevo.');
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
            name="nombre"
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
            name="email"
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
            name="servicio"
            value={formData.servicio}
            onChange={handleChange}
            className="w-full p-2 border rounded" 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="mensaje" className="block mb-2">Mensaje</label>
          <textarea 
            id="mensaje" 
            name="mensaje"
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