import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import ScrapeDemo from './components/ScrapeDemo'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import RegisterPage from './pages/RegisterPage'

function HomePage() {
  return (
    <div className="min-h-screen pt-16">
      <Navbar />
      <Hero />
      <Features />
      <ScrapeDemo />
      <Pricing />
      <Testimonials />
      <FAQ />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
