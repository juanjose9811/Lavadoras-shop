# Lavastore - Componente frontend en React

Módulo desarrollado para la evidencia GA7-220501096-AA4-EV03:
- Autenticación (registro, login, logout) con rutas protegidas
- Catálogo de lavadoras y carrito con persistencia

## Tecnologías
- React (Vite)
- Context API (Auth y Cart)
- React Router
- localStorage
- ESLint y Prettier

## Requisitos
- Node 18+
- npm

## Scripts
- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`

## Estructura
Ver carpeta `src/`:
- `components/` (Navbar, ProductCard, ProductList, Cart, ProtectedRoute)
- `context/` (AuthContext, CartContext)
- `pages/` (Home, Login, Register)
- `data/` (products.js)
- `utils/` (format.js, validators.js)

## Casos de uso cubiertos
- Registro de usuario
- Inicio de sesión
- Acceso a catálogo y carrito (rutas protegidas)
- Gestión del carrito (agregar, ajustar, eliminar)
- Persistencia de sesión y carrito

## Entrega
- Proyecto completo comprimido (ZIP/RAR)
- Documento con normas APA
- Enlace al repositorio: [coloca aquí tu URL]


## Pasos para ejecutar:
para instalar: npm i

## Para correr la app:
npm run dev

## Generar build de producción
npm run build
npm run preview
