import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/menus', label: 'Menús' },
    { path: '/carta', label: 'Carta' },
    { path: '/contacto', label: 'Contacto' },
  ]

  const handleComoLlegar = () => {
    window.open('https://maps.google.com/?q=79,+Rambla+De+Sant+Jordi,+08291,+Ripollet+(Barcelona)', '_blank')
  }

  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Rostisseria MARFA</h3>
            <p className="text-gray-300 mb-4">
              Especializados en comida para llevar con materia prima de primera calidad.
            </p>
            <div className="text-sm text-gray-400">
              <p>Dirección: 79, Rambla De Sant Jordi, 08291, Ripollet (Barcelona) · 02 km</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-2">
              <a
                href="tel:935940131"
                className="block text-gray-300 hover:text-white transition-colors font-medium"
              >
                📞 935 94 01 31
              </a>
              <button
                onClick={handleComoLlegar}
                className="text-gray-300 hover:text-white transition-colors underline"
              >
                Cómo llegar
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Rostisseria MARFA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
