import React from 'react';
import './Product.css';
import { useCart } from '../pages/CartContext'; // Importar el contexto del carrito

const Product = ({ product }) => {
  const { addToCart } = useCart(); // Obtener la función para agregar productos al carrito

  const handleAddToCart = () => {
    addToCart(product); // Agregar el producto al carrito
  };

  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
};

export { Product };
