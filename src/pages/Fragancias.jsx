import React, { useState } from 'react';
import './Fragancias.css';
import Footer from '../components/Footer';

const Fragancias = () => {
  const [fragrances] = useState([
    {
      id: 1,
      name: 'Rose Elegance',
      price: 29.99,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Dd2uo0wx-rxSrLyFFQVHIqChSOuMAugMEA&s',
    },
    {
      id: 2,
      name: 'Ocean Breeze',
      price: 35.49,
      image: 'https://http2.mlstatic.com/D_NQ_NP_865625-MLU76706949190_062024-O.webp',
    },
    {
      id: 3,
      name: 'Citrus Splash',
      price: 24.99,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNTilx_DZLXqiY5ferd9xTo3-1CAeGvOMZGw&s',
    },
    {
      id: 4,
      name: 'Mystic Oud',
      price: 50.99,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4_zKKq6gwS7t0Cwuhz4mnFc6goQ7BWy5WvQ&s',
    },
  ]);

  const handleBuy = (name) => {
    alert(`You selected ${name}!`);
  };

  return (
    <>
      {/* Header Section */}
      <header className="header">
        <h1>Bienvenido a la Tienda de Fragancias</h1>
        <p>Explora nuestra exclusiva colección de perfumes y encuentra tu fragancia perfecta.</p>
      </header>

      {/* Introductory Section */}
      <section className="intro">
        <h2>¿Por qué elegir nuestras fragancias?</h2>
        <p>
          Cada fragancia está elaborada con ingredientes de la más alta calidad, ofreciendo una experiencia olfativa única y duradera.
          Descubre los aromas frescos, florales, cítricos y amaderados que te encantarán.
        </p>
      </section>

      {/* Products Section */}
      <section className="fragrances-section">
        {fragrances.map((fragrance) => (
          <div className="fragrance-card" key={fragrance.id}>
            <img src={fragrance.image} alt={fragrance.name} />
            <div className="fragrance-card-body">
              <div className="fragrance-name">{fragrance.name}</div>
              <div className="fragrance-price">${fragrance.price.toFixed(2)}</div>
              <button
                className="fragrance-button"
                onClick={() => handleBuy(fragrance.name)}
              >
                Comprar Ahora
              </button>
            </div>
          </div>
        ))}
      </section>

    

     <Footer/>
    </>
  );
};

export  {Fragancias}