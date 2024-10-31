import { Link } from 'react-router-dom'
import './Header.css'



const Header = () => {
    return (
        <header className="header">
        <div className="logo">
          <img src="/logo_dora.jpeg" alt="Logo de la empresa" />
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#fragancias">Fragancias</a></li>
            <li><a href="#aseo">Aseo</a></li>
            <li><a href="#moda">Moda</a></li>
            <li><a href="#promociones">Promociones</a></li>
            <li><a href="/login">Iniciar Sesión</a></li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;