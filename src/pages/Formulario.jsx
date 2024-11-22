import './Formulario.css';

const Formulario = () => {
  return (
    <div className="container">
      
     
      <div className="left-section">
          {/* Logo */}
       <img src="/logo_dora.jpeg" alt="Logoformulario" className="logoformulario" />
       

      </div>
      

      <div className="right-section">
        

        {/* Primer formulario */}
        <form className="form">
          <div className='h1titulo'>
          <h1>ALMACENAMIENTO DE INFORMACIÓN DE MI EMPRESA</h1>
          </div>
          
          <label>Nombre del Cliente:</label>
          <input type="text" placeholder="Nombre del Cliente" />

          <label>Producto de belleza:</label>
          <input type="text" placeholder="Producto de belleza" />

          <label>Producto de aseo:</label>
          <input type="text" placeholder="Producto de aseo" />

          <button type="submit">Agregar</button>
        </form>

        {/* Segundo formulario */}
        <form className="form">
          
          <label>Cliente:</label>
          <input type="text" placeholder="Cliente" />

          <label>Producto de belleza:</label>
          <input type="text" placeholder="Producto de belleza" />

          <label>Usuario #1:</label>
          <input type="text" placeholder="Usuario #1" />

          <label>Eterno Brillo:</label>
          <input type="text" placeholder="Eterno Brillo" />

          <label>Producto de aseo:</label>
          <input type="text" placeholder="Producto de aseo" />

          <button type="submit">Buscar</button>
          <button type="button" className="delete-btn">Eliminar</button>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
