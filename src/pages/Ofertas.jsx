const Ofertas = () => {
  const ofertas = [
    {
      id: 1,
      title: '2x1 en Pollos',
      description: 'Llévate dos pollos y paga uno. ¡Oferta especial de fin de semana!',
      originalPrice: '25.00€',
      offerPrice: '12.50€',
      validUntil: 'Domingo 31 de diciembre',
      image: 'https://picsum.photos/400/300?random=12',
      badge: '¡Oferta!'
    },
    {
      id: 2,
      title: 'Descuento en Paella',
      description: '15% de descuento en todas las paellas para grupos de más de 4 personas',
      originalPrice: '45.00€',
      offerPrice: '38.25€',
      validUntil: 'Hasta agotar existencias',
      image: 'https://picsum.photos/400/300?random=13',
      badge: '15% OFF'
    },
    {
      id: 3,
      title: 'Menú Infantil Gratis',
      description: 'Por cada menú adulto, el infantil es gratuito',
      originalPrice: '8.50€',
      offerPrice: '0.00€',
      validUntil: 'Todos los días',
      image: 'https://picsum.photos/400/300?random=14',
      badge: 'GRATIS'
    }
  ]

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
          Ofertas Especiales
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ofertas.map((oferta) => (
            <div key={oferta.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow relative">
              {/* Badge */}
              <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                {oferta.badge}
              </div>

              <img
                src={oferta.image}
                alt={oferta.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-3">{oferta.title}</h2>
                <p className="text-gray-600 mb-4">{oferta.description}</p>

                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-gray-500 line-through">{oferta.originalPrice}</span>
                    <span className="text-2xl font-bold text-red-600">{oferta.offerPrice}</span>
                  </div>
                </div>

                <div className="text-sm text-gray-500 mb-4">
                  <span className="font-semibold">Válido hasta:</span> {oferta.validUntil}
                </div>

                <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors font-medium">
                  Aprovechar oferta
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 bg-red-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            ¿Quieres más ofertas?
          </h2>
          <p className="text-gray-600 mb-6">
            Suscríbete a nuestro newsletter y recibe las mejores ofertas directamente en tu email
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium">
              Suscribirme
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ofertas
