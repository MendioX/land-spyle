import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../css/proyectos.css";
import proyectos from "../config/proyectos";

export const Proyectos = () => {

    return (

        <section className="mySection flex-column" id="sectionProyectos">

            <div className="w-75 text-center mb-1 mt-5">
                <h2 className="title-cutom" data-aos="fade-up">Proyectos y Soluciones</h2>
            </div>

            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                loop={true}
                autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={24}
                slidesPerView={1}
                breakpoints={{
                    576: { slidesPerView: 2 },
                    992: { slidesPerView: 3 },
                }}
                className="proyectos-swiper"
            >
                {proyectos.map((proyecto) => (
                    <SwiperSlide key={proyecto.id}>
                        <a
                            href={proyecto.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="proyecto-card shadow-lg"
                        >
                            <img src={proyecto.imagen} alt={proyecto.titulo} className="proyecto-card-img" />
                            <div className="proyecto-card-body">
                                <h5 className="proyecto-card-title">{proyecto.titulo}</h5>
                                <p className="proyecto-card-text">{proyecto.descripcion}</p>
                                <span className="proyecto-card-link">Ver proyecto <i className="bi bi-box-arrow-up-right"></i></span>
                            </div>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>

        </section>

    )
}

export default Proyectos;
