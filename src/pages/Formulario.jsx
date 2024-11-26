import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2"; // Importa SweetAlert2
import './Formulario.css';

const API_URL = "http://127.0.0.1:8000"; // URL de tu backend

const Formulario = () => {
  const [referencia, setReferencia] = useState("");
  const [name, setName] = useState("");
  const [unidad, setUnidad] = useState("");
  const [available, setAvailable] = useState(true);
  const [precio, setPrecio] = useState("");
  const [producto, setProducto] = useState(null);
  const [mensaje, setMensaje] = useState("");
  const [modo, setModo] = useState("buscar");
  const [mostrarOpciones, setMostrarOpciones] = useState(false);

  // Función para mostrar un mensaje de confirmación con SweetAlert2
  const mostrarConfirmacion = async (accion, callback) => {
    const result = await Swal.fire({
      title: `¿Estás seguro de ${accion} este producto?`,
      text: "Esta acción no se puede deshacer.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, continuar",
      cancelButtonText: "Cancelar",
    });

    if (result.isConfirmed) {
      callback(); // Ejecuta la acción si se confirma
    }
  };

  const manejarAnalisisClick = (opcion) => {
    switch (opcion) {
      case "masCaros":
        descargarGrafica("masCaros");
        break;
      case "masUnidades":
        descargarGrafica("masUnidades");
        break;
      case "noDisponibles":
        descargarGrafica("noDisponibles");
        break;
      default:
        console.error("Opción no válida.");
    }
  };
  
  const descargarGrafica = async (tipoGrafico) => {
    try {
      let endpoint = "";
      let nombreArchivo = "";
  
      switch (tipoGrafico) {
        case "masCaros":
          endpoint = "/productos/estadisticas/grafico_precio";
          nombreArchivo = "productos_precio.png";
          break;
        case "masUnidades":
          endpoint = "/productos/estadisticas/grafico_unidades";
          nombreArchivo = "productos_mas_unidades_dona.png";
          break;
        case "noDisponibles":
          endpoint = "/productos/estadisticas/grafico_no_disponibles";
          nombreArchivo = "productos_no_disponibles.png";
          break;
        default:
          console.error("Opción de gráfico no válida");
          return;
      }
  
      const response = await axios.get(`${API_URL}${endpoint}`, {
        responseType: "blob", // Para manejar archivos binarios (imágenes)
      });
  
      // Crear un enlace para descargar el archivo
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", nombreArchivo); // El nombre del archivo que se descargará
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error al descargar la gráfica:", error);
      Swal.fire("Error", "No se pudo descargar la gráfica. Inténtalo más tarde.", "error");
    }
  };
  

  //buscar producto
  const buscarProducto = async () => {
    if (!referencia) {
      setMensaje("Por favor, ingresa una referencia para buscar el producto.");
      return;
    }
  
    try {
      const response = await axios.get(`${API_URL}/productos/`, {
        params: { referencia: referencia },
      });
  
      if (response.status === 200 && response.data.length > 0) {
        const producto = response.data[0]; // Suponemos que solo habrá un producto con esa referencia
        setName(producto.name || "");
        setUnidad(producto.Unidad || "");
        setPrecio(producto.precio || "");
        setAvailable(producto.available !== undefined ? producto.available : true);
        Swal.fire("Éxito", "Producto encontrado correctamente.", "success");
      } else {
        // Caso: Producto no encontrado
        setName("");
        setUnidad("");
        setPrecio("");
        setAvailable(true);
        Swal.fire("Error", "No se encontró un producto con la referencia especificada.", "error");
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 500) {
          // Caso: Error interno del servidor
          Swal.fire("Error", "Hubo un problema en el servidor al intentar buscar el producto.", "error");
        } else {
          // Otros errores del servidor
          Swal.fire("Error", error.response.data.detail || "Hubo un problema al buscar el producto.", "error");
        }
      } else if (error.request) {
        // Problemas de conexión con el servidor
        Swal.fire("Error", "No se pudo conectar al servidor. Verifica tu conexión.", "error");
      } else {
        // Otros errores
        Swal.fire("Error", "Ocurrió un error inesperado al buscar el producto.", "error");
      }
      console.error("Error al buscar el producto:", error);
    }
  };
  

  //agregar productos
  const agregarProducto = async () => {
    if (!referencia || !name || !unidad || !precio) {
      setMensaje("Por favor, completa todos los campos.");
      return;
    }
  
    const productoData = {
      Referencia: referencia,
      name: name,
      Unidad: unidad,
      available: available,
      precio: parseFloat(precio),
    };
  
    try {
      const response = await axios.post(`${API_URL}/productos/`, productoData);
      setMensaje("Producto agregado exitosamente!");
      setReferencia("");
      setName("");
      setUnidad("");
      setPrecio("");
      setAvailable(true);
      setProducto(null);
      Swal.fire("Éxito", "Producto almacenado correctamente.", "success");
    } catch (error) {
      if (error.response) {
        if (error.response.status === 409) {
          // Error de referencia duplicada
          Swal.fire("Error", "Ya existe un producto con esa referencia. Intenta con otra referencia.", "error");
        } else {
          // Otros errores del servidor
          Swal.fire("Error", error.response.data.detail || "Hubo un problema al agregar el producto.", "error");
        }
      } else if (error.request) {
        // Problemas con la conexión al servidor
        Swal.fire("Error", "No se pudo conectar al servidor. Verifica tu conexión.", "error");
      } else {
        // Otros errores
        Swal.fire("Error", "Ocurrió un error inesperado al agregar el producto.", "error");
      }
    }
  };
  
  //editar producto
  const editarProducto = async () => {
    if (!referencia || !name || !unidad || !precio) {
      setMensaje("Por favor, completa todos los campos.");
      return;
    }
  
    const productoData = {
      Referencia: referencia,
      name: name,
      Unidad: unidad,
      available: available,
      precio: parseFloat(precio),
    };
  
    try {
      const response = await axios.put(`${API_URL}/productos/`, productoData, {
        params: { referencia: referencia },
      });
  
      if (response.status === 200) {
        setMensaje("Producto actualizado exitosamente!");
        setReferencia("");
        setName("");
        setUnidad("");
        setPrecio("");
        setAvailable(true);
        setProducto(null);
        Swal.fire("Éxito", "Producto actualizado correctamente.", "success");
      } else {
        setMensaje("Hubo un error al editar el producto.");
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          // Caso: Producto no encontrado
          Swal.fire("Error", "No se encontró un producto con la referencia especificada.", "error");
        } else if (error.response.status === 409) {
          // Caso: Conflicto al editar (por ejemplo, conflicto de referencia)
          Swal.fire("Error", "Hubo un conflicto al actualizar el producto. Verifica los datos.", "error");
        } else {
          // Otros errores del servidor
          Swal.fire("Error", error.response.data.detail || "Hubo un problema al editar el producto.", "error");
        }
      } else if (error.request) {
        // Problemas de conexión con el servidor
        Swal.fire("Error", "No se pudo conectar al servidor. Verifica tu conexión.", "error");
      } else {
        // Otros errores
        Swal.fire("Error", "Ocurrió un error inesperado al editar el producto.", "error");
      }
    }
  };
  
  // Función para eliminar un producto
  const eliminarProducto = async () => {
    if (!referencia) {
      setMensaje("Por favor, ingresa una referencia para eliminar el producto.");
      return;
    }
  
    try {
      const response = await axios.delete(`${API_URL}/productos/`, {
        params: { referencia: referencia },
      });
  
      if (response.status === 200) {
        setMensaje("Producto eliminado exitosamente!");
        setReferencia("");
        setName("");
        setUnidad("");
        setPrecio("");
        setAvailable(true);
        setProducto(null);
        Swal.fire("Éxito", "Producto eliminado correctamente.", "success");
      } else {
        setMensaje("Hubo un error al eliminar el producto.");
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          // Caso: Producto no encontrado
          Swal.fire("Error", "No se encontró un producto con la referencia especificada.", "error");
        } else if (error.response.status === 500) {
          // Caso: Error interno del servidor
          Swal.fire("Error", "Hubo un problema en el servidor al intentar eliminar el producto.", "error");
        } else {
          // Otros errores del servidor
          Swal.fire("Error", error.response.data.detail || "Hubo un problema al eliminar el producto.", "error");
        }
      } else if (error.request) {
        // Problemas de conexión con el servidor
        Swal.fire("Error", "No se pudo conectar al servidor. Verifica tu conexión.", "error");
      } else {
        // Otros errores
        Swal.fire("Error", "Ocurrió un error inesperado al eliminar el producto.", "error");
      }
      console.error("Error al eliminar el producto:", error);
    }
  };

  return (
    <div className="formulario">
      <div className="susy">
        <img src="/logo_dora.jpeg" alt="Logo de la empresa" />
      </div>

      <p>Selecciona la opción que deseas aplicar a tu inventario:</p>

      <div>
        <button onClick={() => { setModo("agregar"); }}>Almacenar Producto</button>
        <button onClick={() => { setModo("editar"); }}>Editar Producto</button>
        <button onClick={() => { setModo("buscar"); }}>Buscar Producto</button>
        <button onClick={() => { setModo("eliminar"); }}>Eliminar Producto</button>
        <button onClick={() => setMostrarOpciones(!mostrarOpciones)}>Análisis</button>
        {mostrarOpciones && (
  <div style={{ border: "1px solid #ddd", padding: "0px", borderRadius: "5px" }}>
    <button
      onClick={() => manejarAnalisisClick("masCaros")}
      style={{
        backgroundColor: "#007bff", // Fondo azul
        color: "white", // Texto blanco
        border: "1px solid", // Borde azul
        padding: "10px 20px", // Espaciado interno
        borderRadius: "5px", // Bordes redondeados
        cursor: "pointer", // Cambiar el cursor cuando pase sobre el botón
        margin: "5px", // Espacio entre los botones
        transition: "all 0.3s ease", // Transición suave al interactuar
      }}
    >
      Productos más caros
    </button>
    <button
      onClick={() => manejarAnalisisClick("masUnidades")}
      style={{
        backgroundColor: "#007bff", 
        color: "white",
        border: "1px solid ",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
        margin: "5px",
        transition: "all 0.3s ease",
      }}
    >
      Productos con más unidades
    </button>
    <button
      onClick={() => manejarAnalisisClick("noDisponibles")}
      style={{
        backgroundColor: "#007bff", // Fondo rojo
        color: "white",
        border: "1px solid ",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
        margin: "5px",
        transition: "all 0.3s ease",
      }}
    >
      Productos no disponibles
    </button>
  </div>
)}
      </div>

      <div>
        <input
          type="text"
          placeholder="Referencia"
          value={referencia}
          onChange={(e) => setReferencia(e.target.value)}
        />
        <input
          type="text"
          placeholder="Nombre del Producto"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Unidad"
          value={unidad}
          onChange={(e) => setUnidad(e.target.value)}
        />
        <label>
          Disponible:
          <input
            type="checkbox"
            checked={available}
            onChange={(e) => setAvailable(e.target.checked)}
          />
        </label>
        <input
          type="number"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
      </div>

     

      <div>
        <button
          onClick={() => {
            if (modo === "agregar") {
              mostrarConfirmacion("almacenar", agregarProducto);
            } else if (modo === "editar") {
              mostrarConfirmacion("editar", editarProducto);
            } else if (modo === "eliminar") {
              mostrarConfirmacion("eliminar", eliminarProducto);
            } else {
              buscarProducto();
            }
          }}
        >
          {modo === "agregar"
            ? "Almacenar Producto"
            : modo === "editar"
            ? "Editar Producto"
            : modo === "eliminar"
            ? "Eliminar Producto"
            : "Buscar Producto"}
        </button>
      </div>
    </div>
    
  );
};

export default Formulario;
