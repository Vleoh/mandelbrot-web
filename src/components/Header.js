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
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 rounded-2xl glass text-white border border-white/10">
          <div className="px-4 py-3 flex justify-between items-center">
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo.png" alt="Mandelbrot Tech" className="h-10 w-auto" />
              <span className="hidden md:inline-block font-semibold tracking-tight">Mandelbrot Tech</span>
            </Link>
            <nav>
              <ul className="hidden md:flex items-center gap-6 text-sm">
                <li><a href="/#soluciones" onClick={(e) => handleSmoothScroll(e, 'soluciones')} className="hover:text-purple-300">Soluciones</a></li>
                <li><a href="/#tecnologia" onClick={(e) => handleSmoothScroll(e, 'tecnologia')} className="hover:text-purple-300">Tecnología</a></li>
                <li><a href="/#proceso" onClick={(e) => handleSmoothScroll(e, 'proceso')} className="hover:text-purple-300">Proceso</a></li>
                <li><Link to="/contacto" className="hover:text-purple-300">Contacto</Link></li>
              </ul>
            </nav>
            <div className="flex items-center gap-2">
              <Link to="/contacto" className="rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-sm px-4 py-2">Hablemos</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
