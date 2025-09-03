import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Menus from './pages/Menus'
import Carta from './pages/Carta'
import Especialidades from './pages/Especialidades'
import Ofertas from './pages/Ofertas'
import Pedido from './pages/Pedido'
import Contacto from './pages/Contacto'
import ScrollToTop from './components/ScrollToTop'

function App () {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menus' element={<Menus />} />
        <Route path='/carta' element={<Carta />} />
        <Route path='/especialidades' element={<Especialidades />} />
        <Route path='/ofertas' element={<Ofertas />} />
        <Route path='/pedido' element={<Pedido />} />
        <Route path='/contacto' element={<Contacto />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
