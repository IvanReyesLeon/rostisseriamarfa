const Especialidades = () => {
  const especialidades = [
    {
      id: 1,
      name: 'Canelones Caseros',
      description: 'Nuestra especialidad estrella. Canelones hechos con pasta fresca rellenos de carne y verduras, cubiertos con nuestra salsa de tomate casera y gratinados con queso.',
      price: '12.50€',
      image: 'https://picsum.photos/400/300?random=15',
      tiempo: '25 min'
    },
    {
      id: 2,
      name: 'Pollo con Patatas',
      description: 'Pollo entero asado lentamente con hierbas provenzales, acompañado de patatas panaderas y verduras de temporada.',
      price: '14.90€',
      image: 'https://picsum.photos/400/300?random=16',
      tiempo: '30 min'
    },
    {
      id: 3,
      name: 'Paella Marinera',
      description: 'Paella tradicional valenciana con mariscos frescos del día, arroz bomba y alioli de ajo.',
      price: '16.50€',
      image: 'https://picsum.photos/400/300?random=17',
      tiempo: '20 min'
    },
    {
      id: 4,
      name: 'Calamares a la Romana',
      description: 'Calamares frescos rebozados en harina de calidad, fritos en aceite de oliva virgen extra.',
      price: '11.90€',
      image: 'https://picsum.photos/400/300?random=18',
      tiempo: '15 min'
    }
  ]

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800">
          Nuestras Especialidades
        </h1>

        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Descubre los platos que nos hacen únicos. Cada especialidad está elaborada con ingredientes
          seleccionados y técnicas tradicionales que nos han convertido en referentes de la gastronomía local.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {especialidades.map((especialidad) => (
            <div key={especialidad.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={especialidad.image}
                alt={especialidad.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h2 className="text-xl font-bold text-gray-800">{especialidad.name}</h2>
                  <span className="text-lg font-bold text-red-600">{especialidad.price}</span>
                </div>

                <p className="text-gray-600 mb-4">{especialidad.description}</p>

                <div className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-1">⏱️</span>
                    {especialidad.tiempo}
                  </div>

                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium">
                    Pedir ahora
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chef's recommendation */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">
            Recomendación del Chef
          </h2>
          <p className="text-lg mb-6">
            "Nuestros canelones caseros son el resultado de años de perfeccionamiento de la receta familiar.
            Cada capa de pasta fresca se rellena con cariño y se cubre con nuestra salsa secreta."
          </p>
          <div className="text-sm opacity-90">
            - Chef Juan Carlos, Fundador de Rostisseria MARFA
          </div>
        </div>
      </div>
    </div>
  )
}

export default Especialidades
