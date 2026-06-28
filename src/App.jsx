import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import VarietyPackDetail from './pages/VarietyPackDetail'
import Locations from './pages/Locations'

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 60 })
  }, [])

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/variety/:id" element={<VarietyPackDetail />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/locations" element={<Locations />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
