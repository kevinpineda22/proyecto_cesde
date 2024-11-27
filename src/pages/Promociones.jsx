import { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import '../pages/Promociones.css';

const Promociones = () => {
  const [promociones, setPromociones] = useState([]);

  useEffect(() => {
    // Simulando la obtención de datos de promociones navideñas con imágenes
    const promocionesData = [
      {
        id: 1,
        titulo: "Descuento Navidad 1",
        descripcion: "¡Celebra la Navidad con un 20% de descuento en todos los productos navideños!",
        descuento: 20,
        imagen: "https://img.freepik.com/fotos-premium/perfumes-nuevas-fragancias_900101-5269.jpg"
      },
      {
        id: 2,
        titulo: "Oferta Navidad 2",
        descripcion: "Compra 2 y lleva el tercero gratis en todos los adornos navideños.",
        descuento: 0, // No aplica porcentaje, sino una oferta
        imagen: "https://www.samparfums.es/blog/wp-content/uploads/2021/09/perfumes-esencia-y-colonia-samparfums.jpg"
      },
      {
        id: 3,
        titulo: "Descuento Navidad 3",
        descripcion: "Disfruta de un 30% de descuento en nuestros paquetes de regalo.",
        descuento: 30,
        imagen: "https://media.gq.com.mx/photos/5f03717b85180fb06783509c/16:9/w_2560%2Cc_limit/Cover.jpg"
      },
      {
        id: 4,
        titulo: "Oferta Especial Navidad",
        descripcion: "Hasta un 50% de descuento en productos seleccionados de Navidad.",
        descuento: 50,
        imagen: "https://newsfragancias.com/wp-content/uploads/2020/03/carrusel-fragancias-primavera-definitivo.jpg"
      },
      {
        id: 5,
        titulo: "Descuento Navidad 5",
        descripcion: "Celebra la Navidad con un 40% de descuento en todos los productos navideños.",
        descuento: 40,
        imagen: "https://newsfragancias.com/wp-content/uploads/2020/07/Fragancias_femeninas_verano2.jpg"
      }
    ];

    setPromociones(promocionesData);
  }, []);

  return (
    <>
      {/* Header Section */}
     

      {/* Introductory Section */}
      <section className="intro">
        <h2>¿Por qué tenemos las mejores promociones?</h2>
        <p>
        Celebra las fiestas con nuestras ofertas exclusivas en productos seleccionados. Descubre descuentos especiales en perfumes, adornos navideños y paquetes de regalo. Aprovecha nuestras promociones limitadas y encuentra el regalo perfecto para ti o tus seres queridos. ¡No dejes pasar estas increíbles ofertas navideñas!


        </p>
      </section>

      {/* Products Section */}
      <section>
       
        <div className="promociones-container">
          {promociones.map((promo) => (
            <div key={promo.id} className="promo-item">
              <img src={promo.imagen} alt={promo.titulo} className="promo-img" />
              <h2>{promo.titulo}</h2>
              <p>{promo.descripcion}</p>
              {promo.descuento > 0 ? (
                <p><strong>Descuento:</strong> {promo.descuento}%</p>
              ) : (
                <p><strong>Oferta:</strong> {promo.descripcion}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimoniales">
        <h2>Lo que nuestros clientes dicen</h2>
        <div className="testimonial">
          <p>"Nuestros clientes confirman que la calidad y la experiencia de compra son inigualables. Desde fragancias duraderas hasta un servicio de atención al cliente excepcional, muchos ya han encontrado su aroma perfecto. Aquí te compartimos lo que algunos de ellos tienen que decir sobre su experiencia de compra con nosotros. ¡Únete a nuestra comunidad de clientes felices y descubre tu fragancia ideal!"</p>
          <span>- María P.</span>
        </div>
      </section>

      <Footer />
    </>
  );
};

export { Promociones };
