// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';

// // components/ServicesCarousel.js
// const ServicesCarousel = () => (
//   <section id="services" className="bg-black text-white py-16">
//     <h2 className="text-4xl font-bold text-center mb-8">Nuestros Servicios</h2>
//     <Swiper
//       spaceBetween={50}
//       slidesPerView={1}
//       autoplay={{ delay: 3000 }}
//       className="w-full"
//     >
//       {/* Desliza el contenido y añade un fondo de imagen para cada servicio */}
//       <SwiperSlide
//         className="p-8 bg-cover bg-center rounded-lg  h-72"
//         style={{ backgroundImage: "url('erp.png')" }}
//       >
//         <h3 className="text-2xl font-semibold">Desarrollo de ERP</h3>
//         <p className="text-lg">Sistemas de planificación de recursos empresariales.</p>
//       </SwiperSlide>

//       <SwiperSlide
//         className="p-8 bg-cover bg-center rounded-lg  h-72"
//         style={{ backgroundImage: "url('crm.png')" }}
//       >
//         <h3 className="text-2xl font-semibold">Soluciones CRM</h3>
//         <p className="text-lg">Gestión de relaciones con clientes a medida.</p>
//       </SwiperSlide>

//       <SwiperSlide
//         className="p-8 bg-cover bg-center rounded-lg  h-72"
//         style={{ backgroundImage: "url('inventory.png')" }}
//       >
//         <h3 className="text-2xl font-semibold">Control de Inventarios</h3>
//         <p className="text-lg">Optimiza tu cadena de suministro en tiempo real.</p>
//       </SwiperSlide>

//       <SwiperSlide
//         className="p-8 bg-cover bg-center rounded-lg  h-72"
//         style={{ backgroundImage: "url('shedule.png')" }}
//       >
//         <h3 className="text-2xl font-semibold">Gestión de Turnos</h3>
//         <p className="text-lg">Simplifica reservas y citas con nuestro software.</p>
//       </SwiperSlide>
//     </Swiper>
//   </section>
// );

// export default ServicesCarousel;
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// components/ServicesCarousel.js
const ServicesCarousel = () => (
  <section id="services" className="bg-black text-white py-16">
    <h2 className="text-4xl font-bold text-center mb-8">Nuestros Servicios</h2>
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      className="w-full"
    >
      {/* Ajusta la altura mínima del slide */}
      <SwiperSlide
        className="p-8 bg-cover bg-center rounded-lg min-h-72"
        style={{ backgroundImage: "url('erp.png')" }}
      >
        <h3 className="text-2xl font-semibold">Desarrollo de ERP</h3>
        <p className="text-lg">Sistemas de planificación de recursos empresariales.</p>
      </SwiperSlide>

      <SwiperSlide
        className="p-8 bg-cover bg-center rounded-lg min-h-72"
        style={{ backgroundImage: "url('crm.png')" }}
      >
        <h3 className="text-2xl font-semibold">Soluciones CRM</h3>
        <p className="text-lg">Gestión de relaciones con clientes a medida.</p>
      </SwiperSlide>

      <SwiperSlide
        className="p-8 bg-cover bg-center rounded-lg min-h-72"
        style={{ backgroundImage: "url('inventory.png')" }}
      >
        <h3 className="text-2xl font-semibold">Control de Inventarios</h3>
        <p className="text-lg">Optimiza tu cadena de suministro en tiempo real.</p>
      </SwiperSlide>

      <SwiperSlide
        className="p-8 bg-cover bg-center rounded-lg min-h-72"
        style={{ backgroundImage: "url('shedule.png')" }}
      >
        <h3 className="text-2xl font-semibold">Gestión de Turnos</h3>
        <p className="text-lg">Simplifica reservas y citas con nuestro software.</p>
      </SwiperSlide>
    </Swiper>
  </section>
);

export default ServicesCarousel;
