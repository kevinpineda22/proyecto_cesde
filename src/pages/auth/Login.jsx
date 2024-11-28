import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Valores de login "quemados"
  const validEmail = 'susysalo@gmail.com';
  const validPassword = '123456';

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    // Validación con valores "quemados"
    if (email === validEmail && password === validPassword) {
      console.log('Inicio de sesión exitoso');
      navigate('/formulario'); // Redirige a la página de formulario
    } else {
      setError('Email o contraseña incorrectos');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Iniciar Sesión</h2>
        <div className="Logotipo">
          <img src="/susysalo.png" alt="Logo de la empresa" />
        </div>
        <form onSubmit={handleSubmit}>
          {error && <p style={{ color: 'red' }}>{error}</p>}
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
        </form>
        <p>¿Olvidaste la contraseña?</p>
      </div>
    </div>
  );
};

export default Login;