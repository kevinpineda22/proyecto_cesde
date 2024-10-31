import React from 'react';
import './Footer.css'; // Archivo CSS para los estilos

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>Llámanos: </p>
        <ul className='social-links'>
        <li><a href="#">+57 333 333 44 44</a></li><br />
            
  
        </ul>
        <p>Contáctanos:</p>
        <ul className="social-links">
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Twitter</a></li>
        </ul>
      </div>
      
      <div className="footer-center">
        <p>Horario de atención:</p>
        <ul>
        <li><a href="#"> DE 8:AM A 8:PM</a></li>
          
        </ul>
      </div>
      
      <div className="footer-right">
        <ul>
          <li><a href="#">Términos y Condiciones</a></li>
          <li><a href="#">Políticas de Privacidad</a></li>
          <li><a href="#">Libro de reclamaciones</a></li>
          <li><a href="#">Soporte y Ayuda</a></li>
          <li><a href="#">Medios de Pago</a></li>
          <li><a href="#">Servicio a el cliente</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
