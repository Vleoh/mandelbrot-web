import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// components/ServicesCarousel.js
const ServicesCarousel = () => (
  <section id="services" className="bg-black text-white">
    <h2 className="text-4xl font-bold text-center mb-8 pt-5">Nuestros Servicios</h2>
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        bulletClass: 'swiper-pagination-bullet bg-purple-500',
        bulletActiveClass: 'swiper-pagination-bullet-active bg-purple-300',
      }}
      modules={[Autoplay, Pagination]}
      className="w-full"
    >
      {/* Ajusta la altura mínima del slide */}
      <SwiperSlide
        className="p-8 bg-cover bg-center rounded-lg min-h-72"
        style={{ backgroundImage: "url('erp.webp')" }}
      >
        <h3 className="text-2xl font-semibold text-shadow">Desarrollo de ERP</h3>
        <p className="text-lg text-shadow">Sistemas de planificación de recursos empresariales.</p>
      </SwiperSlide>

      <SwiperSlide
        className="p-8 bg-cover bg-center rounded-lg min-h-72"
        style={{ backgroundImage: "url('crm.webp')" }}
      >
        <h3 className="text-2xl font-semibold text-shadow">Soluciones CRM</h3>
        <p className="text-lg text-shadow">Gestión de relaciones con clientes a medida.</p>
      </SwiperSlide>

      <SwiperSlide
        className="p-8 bg-cover bg-center rounded-lg min-h-72"
        style={{ backgroundImage: "url('inventory.webp')" }}
      >
        <h3 className="text-2xl font-semibold text-shadow">Control de Inventarios</h3>
        <p className="text-lg text-shadow">Optimiza tu cadena de suministro en tiempo real.</p>
      </SwiperSlide>

      <SwiperSlide
        className="p-8 bg-cover bg-center rounded-lg min-h-72"
        style={{ backgroundImage: "url('schedule.webp')" }}
      >
        <h3 className="text-2xl font-semibold text-shadow">Gestión de Turnos</h3>
        <p className="text-lg text-shadow">Simplifica reservas y citas con nuestro software.</p>
      </SwiperSlide>
    </Swiper>
  </section>
);

export default ServicesCarousel;
