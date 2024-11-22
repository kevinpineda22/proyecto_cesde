import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Para redirigir
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Registrar usuario en Firebase
// import { auth } from '../src'; // Configuración de Firebase
import './Login.css'; // Reutilizamos el CSS del login

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validar contraseñas
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    try {
      // Registrar al usuario en Firebase Authentication
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('Usuario registrado correctamente');
      navigate('/login'); // Redirigir al login tras registrarse
    } catch (err) {
      setError('Error al registrar el usuario: ' + err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="Logotipo">
        <img src="/logo_dora.jpeg" alt="Logo de la empresa" />
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Registrarse</h2>
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
        <label>Confirmar Contraseña:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Registrar</button>
        <p>¿Ya tienes una cuenta? <a href="/login">Inicia sesión</a></p>
      </form>
    </div>
  );
};

export default Register;