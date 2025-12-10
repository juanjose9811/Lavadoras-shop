// Componente raíz de la aplicación.
// - Define rutas públicas y protegidas.
// - Incluye Navbar y el layout general.

import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import ProtectedRoute from './components/ProtectedRoute';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

export default function App() {
  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '20px' }}>
      <Navbar />
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />

        {/* Rutas protegidas (requieren autenticación) */}
        <Route
          path="/catalogo"
          element={
            <ProtectedRoute>
              <ProductList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/carrito"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}
