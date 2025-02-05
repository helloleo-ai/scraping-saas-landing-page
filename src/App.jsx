import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import ScrapeDemo from './components/ScrapeDemo'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'

function App() {
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

export default App
