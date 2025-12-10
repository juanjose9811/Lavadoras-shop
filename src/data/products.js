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
    image: 'https://www.lg.com/co/lavadoras-y-secadoras/lavadoras-carga-frontal/wm22vv2s6br/',
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
    image: 'https://picsum.photos/seed/samsung19/400/300',
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
    image: 'https://picsum.photos/seed/mabe13/400/300',
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
    image: 'https://picsum.photos/seed/whirlpool18/400/300',
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
    image: 'https://picsum.photos/seed/centrales10/400/300',
    features: ['Diseño compacto', 'Panel mecánico', 'Función remojo', 'Ideal espacios pequeños']
  }
];
