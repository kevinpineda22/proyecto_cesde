// src/components/Main.jsx
import React, { useState } from 'react';
import './Main.css';
import { ProductSection } from '../pages/ProductSection';
import { CartProvider } from '../pages/CartContext'; // Importación de CartContext
import { Cart } from '../components/Cart'; // Carrito de compras (si lo has creado)

const Main = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg",
    "https://kiunatura.com/wp-content/uploads/2023/04/Shampoo-horizontal-002-min-scaled-1200x800.jpg",
    "https://shopztella.com/wp-content/uploads/2023/05/F7A3150.jpg"
  ];

  // Datos de productos
  const beautyProducts = [
    { id: 1, image: '/Rectangle 27.png', name: 'Crema Facial', price: 29.99 },
    { id: 2, image: '/Rectangle 28.png', name: 'Sérum Antiedad', price: 39.99 },
    { id: 3, image: '/Group 1.png', name: 'Shampoo', price: 19.99 },
    { id: 3, image: '/Rectangle 30.png', name: 'Mascarilla Hidratante', price: 19.99 },
    { id: 3, image: '/Rectangle 31.png', name: 'Mascarilla Hidratante', price: 19.99 },
    { id: 3, image: '/Rectangle 32.png', name: 'Mascarilla Hidratante', price: 19.99 },
    { id: 3, image: '/Rectangle 33.png', name: 'Mascarilla Hidratante', price: 19.99 },
    { id: 3, image: '/Rectangle 34.png', name: 'Mascarilla Hidratante', price: 19.99 },
    
  ];

  const cleaningProducts = [
    { id: 4, image: 'https://www.fab.com.co/images/h0nadbhvm6m4/1n1TfWsbuJ7vWPOqNbJ4ax/e69c060077b1be2a4a33f8b27ed751bd/RkFCX19wb2x2b19VbHRyYV9GbGFzaF9WaWJyYV9Db2xvci5wbmc/1200w-1200h/fab-polvo-protecci%C3%B3n-color-pack-shot.jpg', name: 'FAB', price: 9.99 },
    { id: 5, image: 'https://cdn1.totalcommerce.cloud/mercacentro/product-zoom/es/mr-musculo-antigrasa-verde-pistola-500-cm3-1.webp', name: 'Desinfectante', price: 14.99 },
    { id: 6, image: 'https://www.tuhogar.com/content/dam/cp-sites/home-care/tu-hogar/latam/productos/axion/limon/thumbnail/axion-limon-product-1-4-l-render-mx.png', name: 'Jabón Líquido', price: 4.99 },
    { id: 6, image: 'https://i5.walmartimages.com/seo/Fabuloso-All-Purpose-Cleaner-Passion-Fruit-16-9-fl-oz_2aa6ef21-a28d-4162-9a78-f23208d092eb_1.68131185635f012422886579e5e99135.png', name: 'Jabón para pisos', price: 4.99 },
  ];

  const fashionProducts = [
    { id: 7, image: 'https://scarsa.co/cdn/shop/files/ld9413fc-689.900.jpg?v=1702659282', name: 'Vestido', price: 19.99 },
    { id: 8, image: 'https://lorella.com.co/wp-content/uploads/2024/06/Photoroom_20240605_174857-1-e1717628461283.png', name: 'Blusa', price: 39.99 },
    { id: 9, image: 'https://belcorpcolombia.vtexassets.com/arquivos/ids/967434/210106116_fotofondoblanco1.jpg?v=638572674122570000', name: 'Bolso', price: 49.99 },
    { id: 9, image: 'https://mercedescampuzano.vtexassets.com/arquivos/ids/208527/4845--BOTAS_NEGRO_BRITT1.jpg?v=638223491608870000', name: 'Botas', price: 49.99 },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  return (
    <CartProvider> {/* Proveedor de contexto para el carrito */}
      <div>
        <main className="main-content">
          {/* Carrusel de imágenes */}
          <div className="carousel">
            <div className="carousel-inner" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {images.map((image, index) => (
                <div key={index} className="carousel-item">
                  <img src={image} alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </div>
            <button className="carousel-control prev" onClick={prevSlide}>‹</button>
            <button className="carousel-control next" onClick={nextSlide}>›</button>
          </div>
        </main>

        {/* Sección de Productos de Belleza */}
        <ProductSection title="Productos de Belleza" products={beautyProducts} />

        {/* Sección de Productos de Aseo */}
        <ProductSection title="Productos de Aseo" products={cleaningProducts} />

        {/* Sección de Moda */}
        <ProductSection title="Moda" products={fashionProducts} />

        {/* Carrito de Compras */}
        <Cart /> {/* Carrito (si lo tienes implementado) */}
      </div>
    </CartProvider>
  );
};

export default Main;
