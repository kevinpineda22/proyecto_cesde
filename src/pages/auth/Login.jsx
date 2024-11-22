import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Hook para la redirección
import { signInWithEmailAndPassword } from 'firebase/auth'; // Importar función de Firebase
// import { auth } from '../firebase'; // Importar configuración de Firebase
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      // Validar con Firebase Authentication
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Inicio de sesión exitoso');
      navigate('/formulario'); // Redirige a la página de formulario
    } catch (err) {
      setError('Email o contraseña incorrectos');
    }
  };

  return (
    <div className="login-container">
      <div className="Logotipo">
        <img src="/logo_dora.jpeg" alt="Logo de la empresa" />
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Iniciar Sesión</h2>
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
        <p>¿Olvidaste la contraseña?</p>
      </form>
    </div>
  );
};

export default Login;
