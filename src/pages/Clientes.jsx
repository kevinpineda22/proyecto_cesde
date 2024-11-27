import React from "react";
import "./Clientes.css"; 
import Footer from "../components/Footer";

const Clientes = () => {
  const testimonios = [
    {
      nombre: "María Gómez",
      comentario: "¡Excelente servicio! Sin duda, volveré a usar esta página.",
      imagen:"/cliente2.jpg"
    },
    {
      nombre: "Carlos Pérez",
      comentario: "Muy recomendable, todo fue fácil y rápido.",
      imagen: "/clientes.png", 
    },
    {
      nombre: "Lucía Martínez",
      comentario: "La atención al cliente es increíble, ¡los recomiendo mucho!",
      imagen: "/cliente3.jpg", 
    },
  ];

  return (
    <div className="clientes-container">
      <h1 className="clientes-titulo">Lo que dicen nuestros clientes</h1>
      <p className="clientes-intro">
        Nuestros clientes merecen la mejor atención, porque su confianza es nuestra mayor recompensa. Cada interacción está diseñada para superar sus expectativas.
      </p>
      <div className="testimonios-grid">
        {testimonios.map((testimonio, index) => (
          <div key={index} className="testimonio-card">
            <img src={testimonio.imagen} alt={`Imagen de ${testimonio.nombre}`} className="imagen-adicional" />
            <h3 className="nombre">{testimonio.nombre}</h3>
            <p className="comentario">{testimonio.comentario}</p>
          </div>
        ))}
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export { Clientes };
