import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CompanyPresentation = () => {
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const drawMandelbrot = (x, y) => {
      let real = x;
      let imaginary = y;
      for (let i = 0; i < 100; i++) {
        const tempReal = real * real - imaginary * imaginary + x;
        imaginary = 2 * real * imaginary + y;
        real = tempReal;
        if (real * real + imaginary * imaginary > 4) {
          return i;
        }
      }
      return 100;
    };

    for (let x = 0; x < canvas.width; x++) {
      for (let y = 0; y < canvas.height; y++) {
        const belongsToSet = drawMandelbrot(
          (x - canvas.width / 2) / (canvas.width / 4),
          (y - canvas.height / 2) / (canvas.height / 4)
        );
        if (belongsToSet === 100) {
          ctx.fillStyle = 'rgba(102, 51, 153, 0.1)'; // Violeta suave
        } else {
          ctx.fillStyle = `hsl(${belongsToSet * 3}, 100%, 50%)`;
        }
        ctx.fillRect(x, y, 1, 1);
      }
    }
  }, []);

  const handleServiceClick = (service) => {
    navigate(`/contacto?servicio=${encodeURIComponent(service)}`);
  };

  return (
    <section id="servicios" className="relative overflow-hidden bg-gradient-to-br from-purple-900 to-black text-white py-20">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-20" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          id="servicios"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-8 text-center text-purple-200 leading-tight"
        >
          Mandelbrot Tech
          <span className="block text-3xl mt-2">Desarrollo de Software a Medida</span>
        </motion.h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg"
          >
            En Mandelbrot Tech, fusionamos la complejidad matemática con la innovación tecnológica. Como el conjunto de Mandelbrot, nuestras soluciones son infinitamente detalladas y adaptables, diseñadas para evolucionar con tu negocio.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg"
          >
            Nuestro enfoque iterativo y personalizado garantiza que cada solución sea tan única como los patrones fractales que nos inspiran, optimizando y mejorando constantemente tus operaciones empresariales.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-purple-200">Nuestras Soluciones Fractales:</h3>
            <ul className="grid grid-cols-2 gap-4">
              {['Desarrollo de ERP', 'Soluciones CRM', 'Control de Inventarios', 'Gestión de Turnos', 'IA Empresarial', 'Análisis de Datos'].map((service, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ scale: 1.05, color: '#B794F4' }}
                  className="flex items-center bg-purple-800 bg-opacity-30 p-3 rounded-lg cursor-pointer"
                  onClick={() => handleServiceClick(service)}
                >
                  <span className="mr-2 text-purple-300">&#9733;</span>
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyPresentation;
