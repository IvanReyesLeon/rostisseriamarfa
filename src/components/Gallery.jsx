const Gallery = () => {
  const dishes = [
    {
      id: 1,
      image: '/images/home/photo1.webp',
      alt: "Pollos a l'ast"
    },
    {
      id: 2,
      image: '/images/home/photo2.webp',
      alt: 'Nuestras patatas'
    },

  ]

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Mejor Valorados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={dish.image}
                alt={dish.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800">{dish.alt}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
