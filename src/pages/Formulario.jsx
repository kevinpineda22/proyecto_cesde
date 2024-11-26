import './Formulario.css';
import React, { useState } from "react";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000"; // URL de tu backend

const Formulario = () => {
  const [referencia, setReferencia] = useState(""); // Estado para la referencia (minúscula por el backend)
  const [producto, setProducto] = useState(null); // Estado para el producto encontrado
  const [mensaje, setMensaje] = useState(""); // Estado para los mensajes de error o éxito

  // Manejar el cambio en el input de referencia
  const handleInputChange = (e) => {
    setReferencia(e.target.value);
  };

  // Buscar producto por referencia
  const buscarProducto = async () => {
    if (!referencia.trim()) {
      setMensaje("Por favor, ingresa una referencia válida.");
      return;
    }

    try {
      const response = await axios.get(`${API_URL}/productos/`, {
        params: { referencia }, // El backend espera "referencia"
      });

      if (response.data.length > 0) {
        setProducto(response.data[0]); // Tomar el primer producto encontrado
        setMensaje(""); // Limpiar mensajes previos
      } else {
        setProducto(null);
        setMensaje("No se encontró ningún producto con esa referencia.");
      }
    } catch (error) {
      console.error("Error al buscar el producto:", error);
      setProducto(null);
      if (error.response) {
        // Error del servidor
        setMensaje("Error del servidor: " + error.response.data.detail || "Consulta fallida.");
      } else if (error.request) {
        // No hay respuesta del servidor
        setMensaje("No se pudo conectar al servidor. Verifica tu conexión.");
      } else {
        // Error desconocido
        setMensaje("Ocurrió un error inesperado al buscar el producto.");
      }
    }
  };

  return (
    <div>
      <h1>Buscar Producto</h1>
      <input
        type="text"
        placeholder="Ingrese referencia"
        value={referencia}
        onChange={handleInputChange}
      />
      <button onClick={buscarProducto}>Buscar</button>

      {mensaje && <p style={{ color: "red" }}>{mensaje}</p>}

      {producto && (
        <div>
          <h2>Detalles del Producto</h2>
          <p><strong>Referencia:</strong> {producto.Referencia}</p>
          <p><strong>Nombre:</strong> {producto.name}</p>
          <p><strong>Unidad:</strong> {producto.Unidad}</p>
          <p><strong>Disponible:</strong> {producto.available}</p>
          <p><strong>Precio:</strong> ${producto.precio}</p>
        </div>
      )}
    </div>
  );
};

export default Formulario;
