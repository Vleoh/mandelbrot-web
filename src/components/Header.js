import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: id } });
    }
  };

  return (
    <header className="bg-purple-900 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          <img src="logo.png" alt="Mandelbrot Logo" className="w-10 h-10" />
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-purple-300">Inicio</Link></li>
            <li><a href="/#servicios" onClick={(e) => handleSmoothScroll(e, 'servicios')} className="hover:text-purple-300">Servicios</a></li>
            <li><Link to="/contacto" className="hover:text-purple-300">Contacto</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
