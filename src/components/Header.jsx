import { Link } from 'react-router-dom'
import './Header.css'



const Header = () => {
    return (
        <header className="header">
        <div className="logo">
          <img src="/susysaloblanco.png" alt="Logo de la empresa" />
        </div>
        <nav className="nav">
          <ul>
            <li><a href="/fragancias">Fragancias</a></li>
            <li><a href="/promociones">Promociones</a></li>
            <li><a href="/clientes">Clientes</a></li>
            <li><a href="/login">Iniciar Sesión</a></li>
          </ul>
        </nav>
      </header>
    );
  };

  
  
  
  export default Header;