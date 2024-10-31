// src/components/Login.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Hook para la redirección
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook para redirigir

  // Valores quemados
  const validEmail = 'kevin@gmail.com';
  const validPassword = '123456';

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de valores quemados
    if (email === validEmail && password === validPassword) {
      console.log('Inicio de sesión exitoso');
      navigate('/formulario'); // Redirige a la página de formulario
    } else {
      alert('Email o contraseña incorrectos');
    }
  };

  return (
    <div className="login-container">
      <div className='Logotipo'>
        <img src="/logo_dora.jpeg" alt="Logo de la empresa" />
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Iniciar Sesión</h2>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Contraseña:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Iniciar Sesión</button>
        <p>¿Olvidaste la contraseña?</p>
      </form>
    </div>
  );
};

export default Login;
