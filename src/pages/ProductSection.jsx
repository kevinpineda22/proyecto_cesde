// src/pages/ProductSection.jsx
import React from 'react';
import { Product } from './Product'; // Importar el componente Product

const ProductSection = ({ title, products, className }) => {
  return (
    <section className={`product-section ${className}`}>
      <h2>{title}</h2>
      <div className="product-list">
        {products.map((product) => (
          <Product 
            key={product.id} 
            product={product}  // Enviar el objeto de producto completo
          />
        ))}
      </div>
    </section>
  );
};

export { ProductSection };
