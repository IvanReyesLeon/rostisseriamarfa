import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Pedido from './pages/Pedido'
import Menus from './pages/Menus'
import Ofertas from './pages/Ofertas'
import Carta from './pages/Carta'
import Especialidades from './pages/Especialidades'
import Contacto from './pages/Contacto'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pedido" element={<Pedido />} />
            <Route path="/menus" element={<Menus />} />
            <Route path="/ofertas" element={<Ofertas />} />
            <Route path="/carta" element={<Carta />} />
            <Route path="/especialidades" element={<Especialidades />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  )
}

export default App
