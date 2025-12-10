// Página de registro de usuarios.
// - Valida nombre, email y contraseña.
// - Al registrarse, abre sesión y redirige al catálogo.

import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { isEmail, minLength } from '../utils/validators';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const onChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!minLength(form.name, 2)) return setError('El nombre debe tener al menos 2 caracteres.');
    if (!isEmail(form.email)) return setError('Correo inválido.');
    if (!minLength(form.password, 6)) return setError('La contraseña debe tener al menos 6 caracteres.');
    try {
      register(form);
      navigate('/catalogo');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={styles.wrap}>
      <h2>Registro</h2>
      <form onSubmit={onSubmit} style={styles.form}>
        <label style={styles.label}>
          Nombre
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={onChange}
            placeholder="Tu nombre"
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Correo
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            placeholder="tu@correo.com"
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Contraseña
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={onChange}
            placeholder="••••••"
            style={styles.input}
            required
          />
        </label>
        {error && <p style={styles.error}>{error}</p>}
        <button type="submit" style={styles.btn}>Crear cuenta</button>
        <p style={styles.helper}>
          ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
        </p>
      </form>
    </div>
  );
}

const styles = {
  wrap: { maxWidth: 420, margin: '20px auto', padding: 20 },
  form: { display: 'grid', gap: 12 },
  label: { display: 'grid', gap: 6 },
  input: { padding: '10px 12px', border: '1px solid #ddd', borderRadius: 6 },
  btn: { padding: '10px 12px', borderRadius: 6, border: 'none', background: '#111', color: '#fff', cursor: 'pointer' },
  error: { color: '#c00', margin: 0 },
  helper: { fontSize: 14, color: '#555' }
};
