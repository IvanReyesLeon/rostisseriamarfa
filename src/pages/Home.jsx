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
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Grupo Marfa</h2>
          <p className="text-lg md:text-xl leading-relaxed">
            En Rostisseria MARFA llevamos años asando el mejor pollo a l&apos;ast
            con la mejor materia prima. Tradición y calidad desde 1978.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mt-6">
            Nuestro equipo trabaja cada día para ofrecerte los mejores sabores
            de la cocina mediterránea, manteniendo vivas nuestras raíces.
          </p>
        </div>
      </section>

      <Gallery />
      <DeliveryGrid />
    </div>
  );
}
