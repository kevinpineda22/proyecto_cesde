
import React from 'react';
import { Product } from './Product';

const ProductSection = ({ title, products,className }) => {
  return (
    <section className={`product-section ${className}`}>
      <h2>{title}</h2>
      <div className="product-list">
        {products.map((product) => (
          <Product 
            key={product.id} 
            image={product.image} 
            name={product.name} 
            price={product.price} 
          />
        ))}
      </div>
    </section>
  );
};

export {ProductSection};

