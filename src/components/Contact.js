import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Notificacion from './Notificacion';

const Contacto = () => {
  const [servicio, setServicio] = useState('');
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [notificacion, setNotificacion] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const servicioParam = params.get('servicio');
    if (servicioParam) {
      setServicio(decodeURIComponent(servicioParam));
    }
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/enviar-contacto`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, email, servicio, mensaje }),
      });
      
      if (response.ok) {
        setNotificacion({ mensaje: 'Mensaje enviado con éxito', tipo: 'exito' });
        // Limpiar el formulario
        setNombre('');
        setEmail('');
        setServicio('');
        setMensaje('');
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error:', error);
      setNotificacion({ mensaje: 'Hubo un error al enviar el mensaje', tipo: 'error' });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contacto</h1>
      <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="nombre" className="block mb-2">Nombre</label>
          <input 
            type="text" 
            id="nombre" 
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full p-2 border rounded" 
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input 
            type="email" 
            id="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded" 
            required
          />
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
          <textarea 
            id="mensaje" 
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            className="w-full p-2 border rounded" 
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
          Enviar
        </button>
      </form>
      {notificacion && (
        <Notificacion
          mensaje={notificacion.mensaje}
          tipo={notificacion.tipo}
          onClose={() => setNotificacion(null)}
        />
      )}
    </div>
  );
};

export default Contacto;