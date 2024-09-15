import React from 'react';
// components/Contact.js

const Contact = () => (
  <section id="contact" className="py-16 bg-white text-center">
    <h2 className="text-4xl font-bold text-purple-800 mb-8">Hablemos</h2>
    <p className="text-lg text-gray-800 mb-6">Contáctanos para discutir cómo podemos ayudarte a optimizar tu negocio.</p>
    <form className="flex flex-col items-center gap-4">
      <input type="text" placeholder="Tu nombre" required className="w-full max-w-md p-2 border-2 border-purple-800 rounded-md"/>
      <input type="email" placeholder="Tu email" required className="w-full max-w-md p-2 border-2 border-purple-800 rounded-md"/>
      <textarea placeholder="Tu mensaje" className="w-full max-w-md p-2 border-2 border-purple-800 rounded-md h-32"></textarea>
      <button type="submit" className="bg-purple-800 text-white px-6 py-2 rounded-md hover:bg-blue-400">Enviar</button>
    </form>
  </section>
);

export default Contact;
