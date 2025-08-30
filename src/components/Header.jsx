import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/pedido', label: 'Pedido' },
    { path: '/menus', label: 'Menús' },
    { path: '/ofertas', label: 'Ofertas' },
    { path: '/carta', label: 'Carta' },
    { path: '/especialidades', label: 'Especialidades' },
    { path: '/contacto', label: 'Contacto' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top bar with hours */}
      <div className="bg-gray-800 text-white text-sm py-2 px-4 text-center">
        <p>Jueves y Viernes: 10:00 a 15:00 | Sábados, Domingos y Festivos: 09:00 a 15:00</p>
      </div>

      {/* Main navigation */}
      <nav className="bg-white px-4 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img src="/images/logo.png" alt="Rostisseria MARFA Logo" className="h-12 w-auto mr-2" />
            <span className="text-2xl font-bold text-gray-800">Rostisseria MARFA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-gray-700 hover:text-red-600 transition-colors font-medium ${
                  location.pathname === link.path ? 'text-red-600 border-b-2 border-red-600' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 hover:text-red-600 focus:outline-none focus:text-red-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-gray-700 hover:text-red-600 transition-colors font-medium ${
                    location.pathname === link.path ? 'text-red-600' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
