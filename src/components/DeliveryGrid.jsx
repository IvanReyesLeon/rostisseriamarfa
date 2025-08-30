const DeliveryGrid = () => {
  const deliveryServices = [
    {
      name: 'Glovo',
      logo: '🛵',
      link: '#',
      description: 'Entrega rápida en tu zona'
    },
    {
      name: 'UberEats',
      logo: '🚗',
      link: '#',
      description: 'Servicio de entrega premium'
    },
    {
      name: 'JustEat',
      logo: '🍽️',
      link: '#',
      description: 'Plataforma de pedidos online'
    }
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Delivery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {deliveryServices.map((service, index) => (
            <a
              key={index}
              href={service.link}
              className="bg-gray-50 rounded-lg p-8 text-center hover:bg-gray-100 transition-colors block"
            >
              <div className="text-6xl mb-4">{service.logo}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DeliveryGrid
