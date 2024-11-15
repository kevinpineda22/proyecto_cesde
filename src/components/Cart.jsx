import React from 'react';
import { useCart } from '../pages/CartContext'; // Importar el contexto desde 'pages'
import './Cart.css'; // Estilos del carrito

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div>
          <ul>
            {cart.map((product) => (
              <li key={product.id}>
                <img src={product.image} alt={product.name} />
                <span>{product.name}</span>
                <span>${product.price.toFixed(2)}</span>
                <button onClick={() => removeFromCart(product.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <div className="total">
            <h3>Total: ${total.toFixed(2)}</h3>
          </div>
          <button className="checkout-button">Proceder a la compra</button>
        </div>
      )}
    </div>
  );
};

export { Cart };
