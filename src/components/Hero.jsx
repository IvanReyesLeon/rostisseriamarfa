import { Link } from 'react-router-dom';
import Carousel from './Carousel'; // asegúrate de que Carousel tenga export default

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-red-600 to-red-800 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Rostisseria MARFA
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Pollos a l&apos;ast en Ripollet. Tradición, sabor y calidad.
        </p>

        {/* CTA Button */}
        <div className="mb-12">
          <Link
            to="/pedido"
            className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
          >
            Hacer pedido
          </Link>
        </div>

        {/* Hero Image / Carousel */}
        <div className="mt-12">
          <Carousel />
        </div>
      </div>
    </section>
  );
}
