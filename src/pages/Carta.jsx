import { useState } from 'react'
import MenuList from '../components/MenuList'

const Carta = () => {
  const [activeCategory, setActiveCategory] = useState('pollos')

  const categories = [  
  ]

  return (
    <div className="pt-8 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
          Nuestra Carta
        </h1>

        {/* Category Navigation */}

        {/* Menu Content */}
        <div className="bg-white rounded-lg shadow-lg p-2">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            {categories.find(cat => cat.id === activeCategory)?.name}
          </h2>

          <MenuList category={activeCategory} />

          {/* Note */}
          <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
            <p className="text-sm text-yellow-800">
              <strong>Nota:</strong> Los precios pueden variar según la temporada y disponibilidad.
              Consulta con nosotros para confirmación de precios y disponibilidad.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carta
