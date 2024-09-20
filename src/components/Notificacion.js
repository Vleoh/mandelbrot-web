import React from 'react';

const Notificacion = ({ mensaje, tipo, onClose }) => {
  return (
    <div className={`fixed top-4 right-4 p-4 rounded-md shadow-md ${
      tipo === 'exito' ? 'bg-green-500' : 'bg-red-500'
    } text-white`}>
      <p>{mensaje}</p>
      <button 
        onClick={onClose} 
        className="absolute top-1 right-2 text-white"
      >
        ×
      </button>
    </div>
  );
};

export default Notificacion;
