import React, { createContext, useState, useContext } from 'react';

// Crear el contexto del carrito
const CartContext = createContext();

// Proveedor del contexto para envolver tu aplicación
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);  // Nuevo estado para visibilidad del carrito

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      setIsCartVisible(updatedCart.length > 0);  // Mostrar el carrito si hay productos
      return updatedCart;
    });
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter(product => product.id !== id);
      setIsCartVisible(updatedCart.length > 0);  // Ocultar el carrito si no hay productos
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, isCartVisible }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook para usar el carrito en cualquier componente
export const useCart = () => useContext(CartContext);
