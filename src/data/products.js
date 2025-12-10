// Productos de demostración para el catálogo.
// - Imágenes con picsum.photos usando seed para tener URLs estables.
// - Reemplaza por imágenes reales cuando las tengas (Cloudinary/Imgur).

export const products = [
  {
    id: 'lg-wm-1001',
    name: 'Lavadora LG Carga Frontal 22kg',
    brand: 'LG',
    price: 2899000,
    capacityKg: 22,
    type: 'Carga frontal',
    energyClass: 'A++',
    image: 'https://img.freepik.com/vector-gratis/lavadoras-negras-realistas-arandela-compacta-cargador-frontal_1441-1691.jpg?t=st=1765393511~exp=1765397111~hmac=ca3fcc64cb11bd5d7930acd0be1320f426396d557ae6231c078765d7e88dc798&w=1480',
    features: ['Motor Direct Drive', 'Tecnología TurboWash', 'Vapor Steam+', 'Wi-Fi y control remoto']
  },
  {
    id: 'samsung-wm-1002',
    name: 'Lavadora Samsung Digital Inverter 19kg',
    brand: 'Samsung',
    price: 2499000,
    capacityKg: 19,
    type: 'Carga superior',
    energyClass: 'A+',
    image: 'https://img.freepik.com/psd-gratis/lavadora-moderna-carga-superior-blanca_191095-79985.jpg?t=st=1765393668~exp=1765397268~hmac=0b1556fca894a4b418e94681fe4eef326c52a149e5771f569df57a6c7d8c7b7a&w=1480',
    features: ['Motor Digital Inverter', 'Tecnología Wobble', 'Lavado rápido 29 min', 'Panel LED intuitivo']
  },
  {
    id: 'mabe-wm-1003',
    name: 'Lavadora Mabe Automática 13kg',
    brand: 'Mabe',
    price: 1499000,
    capacityKg: 13,
    type: 'Carga superior',
    energyClass: 'A',
    image: 'https://img.freepik.com/vector-gratis/lavadora-fondo-realista-ilustracion-simbolos-equipos-lavanderia_1284-29130.jpg?t=st=1765393757~exp=1765397357~hmac=7a0b3c3a14b4e6c8da31528eed19383a4e8367c8a947369657f2f510afb24ec4&w=1480',
    features: ['Aqua Saver Green', 'Lavado express', 'Tambor inox', 'Bloqueo de seguridad']
  },
  {
    id: 'whirlpool-wm-1004',
    name: 'Lavadora Whirlpool 18kg Smart',
    brand: 'Whirlpool',
    price: 2199000,
    capacityKg: 18,
    type: 'Carga superior',
    energyClass: 'A++',
    image: 'https://img.freepik.com/fotos-premium/modelo-lavadora_1263326-62836.jpg?w=1480',
    features: ['Smart Load Sensor', '12 ciclos', 'Tecnología Impeller', 'Inicio diferido']
  },
  {
    id: 'centrales-wm-1005',
    name: 'Lavadora Centrales 10kg Básica',
    brand: 'Centrales',
    price: 899000,
    capacityKg: 10,
    type: 'Carga superior',
    energyClass: 'B',
    image: 'https://img.freepik.com/psd-gratis/redefine-eficiencia-limpieza-lavadora-carga-superior-electrolux_191095-79971.jpg?t=st=1765393878~exp=1765397478~hmac=57eb290c734da2677d768c3a108a8b8c43715f0f2fcb8e75e381bacd7e711cd4&w=1480',
    features: ['Diseño compacto', 'Panel mecánico', 'Función remojo', 'Ideal espacios pequeños']
  }
];
