// Ruta protegida por autenticación.
// - Si no hay sesión, redirige a /login.
// - Envuelve el componente hijo protegido.

import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
