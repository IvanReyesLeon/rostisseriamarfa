const Pedido = () => {
  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
          Reserva tu Pedido
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-4">¿Cómo hacer tu pedido?</h2>
            <p className="text-gray-600 mb-6">
              Elige la forma que más te convenga para realizar tu pedido
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Teléfono */}
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-red-300 transition-colors">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-semibold mb-2">Por teléfono</h3>
              <p className="text-gray-600 mb-4">Llámanos directamente</p>
              <a
                href="tel:935940131"
                className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium"
              >
                935 94 01 31
              </a>
            </div>
            {/*
            {/* Delivery Apps 
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-red-300 transition-colors">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">Apps de delivery</h3>
              <p className="text-gray-600 mb-4">Pide desde tu app favorita</p>
              <div className="space-y-2">
                <div className="text-sm">🛵 Glovo</div>
                <div className="text-sm">🚗 UberEats</div>
                <div className="text-sm">🍽️ JustEat</div>
              </div>
            </div>
            */}
            {/* Recogida en tienda */}
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-red-300 transition-colors">
              <div className="text-4xl mb-4">🏪</div>
              <h3 className="text-xl font-semibold mb-2">Reservar en tienda</h3>
              <p className="text-gray-600 mb-4">Ven a recogerlo personalmente</p>
              <a
                href="https://maps.app.goo.gl/nKPY7cMcXgZSLL7Y6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors font-medium"
              >
                Ver ubicación
              </a>
            </div>
          </div>

          {/* Horarios */}
          <div className="mt-12 bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-center">Horarios de atención</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <div>
                <h4 className="font-semibold text-gray-700">Sábados, Domingos y Festivos</h4>
                <p className="text-gray-600">09:00 - 15:30</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pedido
