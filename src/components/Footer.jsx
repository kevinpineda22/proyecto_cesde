import React from 'react';
import './Footer.css'; // Archivo CSS para los estilos
import { FaFacebook, FaTwitter, FaInstagram,  FaWhatsapp} from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={styles.footer}>
    <div style={styles.container}>
      {/* Sección: Contáctanos */}
      <div style={styles.section}>
        <h3 style={styles.heading}>Contáctanos</h3>
        <p style={styles.text}>Teléfono: +57 300 123 4567</p>
        <p style={styles.text}>Email: susysalo@gmail.com</p>
        <p style={styles.text}>Dirección: Calle 41 # 21b</p>
      </div>

      {/* Sección: Redes Sociales */}
      <div style={styles.section}>
        <h3 style={styles.heading}>Síguenos</h3>
        <div style={styles.socials}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FaFacebook />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FaTwitter />
          </a>
          <a href="https://wa.me/573001234567" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Sección: Horarios */}
      <div style={styles.section}>
        <h3 style={styles.heading}>Horarios</h3>
          <li>Lunes a Viernes: 9:00 AM - 6:00 PM</li>
          <li>Sábado: 10:00 AM - 4:00 PM</li>
          <li>Domingo: Cerrado</li>
      </div>
    </div>

    
     
 
  </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#877CC7",
    color: "#ffffff",
    padding: "20px 0",
    fontSize: "14px",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: "0 20px",
  },
  section: {
    flex: "1",
    minWidth: "250px",
    marginBottom: "20px",
  },
  heading: {
    fontSize: "18px",
    marginBottom: "10px",
    borderBottom: "1px solid #ffffff",
    paddingBottom: "5px",
  },
  text: {
    margin: "5px 0",
  },
  socials: {
    display: "flex",
    gap: "15px",
  },
  icon: {
    fontSize: "24px",
    color: "#ffffff",
    transition: "color 0.3s",
    textDecoration: "none",
  },
  
  
 
};


export default Footer;
