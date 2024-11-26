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
        imagen: "https://via.placeholder.com/300x200?text=Navidad+1"
      },
      {
        id: 2,
        titulo: "Oferta Navidad 2",
        descripcion: "Compra 2 y lleva el tercero gratis en todos los adornos navideños.",
        descuento: 0, // No aplica porcentaje, sino una oferta
        imagen: "https://via.placeholder.com/300x200?text=Navidad+2"
      },
      {
        id: 3,
        titulo: "Descuento Navidad 3",
        descripcion: "Disfruta de un 30% de descuento en nuestros paquetes de regalo.",
        descuento: 30,
        imagen: "https://via.placeholder.com/300x200?text=Navidad+3"
      },
      {
        id: 4,
        titulo: "Oferta Especial Navidad",
        descripcion: "Hasta un 50% de descuento en productos seleccionados de Navidad.",
        descuento: 50,
        imagen: "https://via.placeholder.com/300x200?text=Navidad+4"
      },
    ];

    setPromociones(promocionesData);
  }, []);

  return (
    <div>
      <h4 >Promociones Navideñas</h4>
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
      <Footer /> 
    </div>
  );
};

export { Promociones };
