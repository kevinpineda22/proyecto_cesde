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
    "https://blog.cromantic.com/hs-fs/hubfs/Foto%206%20%283%29%20%281%29.png?height=420&name=Foto%206%20%283%29%20%281%29.png",
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
    { id: 4, image: '/aseo1.png', name: 'FAB', price: 9.99 },
    { id: 5, image: '/aseo2.png', name: 'Desinfectante', price: 14.99 },
    { id: 6, image: '/aseo3.png', name: 'Jabón Líquido', price: 4.99 },
    { id: 6, image: '/aseo4.png', name: 'Jabón Líquido', price: 4.99 },
  ];

  const fashionProducts = [
    { id: 7, image: '/moda1.png', name: 'Vestido', price: 19.99 },
    { id: 8, image: '/moda2.png', name: 'Blusa', price: 39.99 },
    { id: 9, image: '/moda3.png', name: 'Bolso', price: 49.99 },
    { id: 9, image: '/moda4.png', name: 'Botas', price: 49.99 },
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
