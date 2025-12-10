// Página de inicio simple con mensaje de bienvenida.
// - Se muestra en la ruta "/".

export default function Home() {
  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <h2>Bienvenido a Lavastore</h2>
      <p>Descubre lavadoras eficientes y confiables para tu hogar.</p>
    </div>
  );
}
