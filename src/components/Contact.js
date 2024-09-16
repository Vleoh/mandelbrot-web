import React, { useState } from 'react';
// components/Contact.js

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/enviar-contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Mensaje enviado con éxito');
        setFormData({ nombre: '', email: '', mensaje: '' });
      } else {
        alert('Error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar el mensaje');
    }
  };

  return (
    <section id="contact" className="py-16 bg-white text-center">
      <h2 className="text-4xl font-bold text-purple-800 mb-8">Hablemos</h2>
      <p className="text-lg text-gray-800 mb-6">Contáctanos para discutir cómo podemos ayudarte a optimizar tu negocio.</p>
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Tu nombre"
          required
          className="w-full max-w-md p-2 border-2 border-purple-800 rounded-md"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Tu email"
          required
          className="w-full max-w-md p-2 border-2 border-purple-800 rounded-md"
        />
        <textarea
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          placeholder="Tu mensaje"
          className="w-full max-w-md p-2 border-2 border-purple-800 rounded-md h-32"
        ></textarea>
        <button type="submit" className="bg-purple-800 text-white px-6 py-2 rounded-md hover:bg-blue-400">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;
