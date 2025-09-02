import Hero from '../components/Hero.jsx';
import Gallery from '../components/Gallery';
import DeliveryGrid from '../components/DeliveryGrid';

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Grupo Marfa Section */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Quienes somos</h2>
          <p className="text-lg md:text-xl leading-relaxed">
          Desde 1989 nos dedicamos a preparar con esmero nuestras especialidades a l’ast, manteniendo la tradición y el sabor auténtico de siempre.
          Nuestra filosofía es sencilla, <strong></strong>trabajar con dedicación y cuidado para ofrecer la máxima calidad en cada plato.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mt-6">
          Más de tres décadas de experiencia nos avalan, y seguimos con la misma ilusión de siempre, que cada cliente se lleve a casa una comida sabrosa, hecha con cariño y confianza.
          </p>
        </div>
      </section>

      <Gallery />
      <DeliveryGrid />
    </div>
  );
}
