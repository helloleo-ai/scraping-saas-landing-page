import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaSpinner } from 'react-icons/fa'

const exampleUrls = [
  'https://amazon.com/best-sellers',
  'https://ebay.com/deals',
  'https://walmart.com/clearance'
]

const mockData = [
  { url: 'https://example.com/electronics/smartphone-x12', price: '$599.99', stock: 'In Stock' },
  { url: 'https://example.com/electronics/wireless-earbuds', price: '$79.99', stock: 'Low Stock' },
  { url: 'https://example.com/electronics/laptop-pro', price: '$1,299.99', stock: 'Out of Stock' },
  { url: 'https://example.com/home/smart-thermostat', price: '$149.99', stock: 'In Stock' },
  { url: 'https://example.com/home/robot-vacuum', price: '$249.99', stock: 'In Stock' },
  { url: 'https://example.com/accessories/phone-case', price: '$24.99', stock: 'Low Stock' },
  { url: 'https://example.com/wearables/fitness-tracker', price: '$89.99', stock: 'In Stock' },
  { url: 'https://example.com/gaming/console-bundle', price: '$449.99', stock: 'Out of Stock' }
]

export default function ScrapeDemo() {
  const [url, setUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setResults(mockData)
      setIsLoading(false)
    }, 1500)
  }

  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Try It Now</h2>
        <div className={`mx-auto ${results ? 'max-w-6xl' : 'max-w-2xl'}`}>
          <div className={`${results ? 'grid grid-cols-1 md:grid-cols-2 gap-8' : ''}`}>
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                {exampleUrls.map((exampleUrl, index) => (
                  <button
                    key={index}
                    type="button"
                    className="btn btn-sm btn-outline"
                    onClick={() => setUrl(exampleUrl)}
                  >
                    Try {exampleUrl.split('/')[2]}
                  </button>
                ))}
              </div>
              <form onSubmit={handleSubmit}>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter website URL to scrape..."
                    className="input input-bordered flex-1"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                  />
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={isLoading}
                  >
                    {isLoading ? <FaSpinner className="animate-spin" /> : 'Scrape'}
                  </button>
                </div>
              </form>
            </div>

            {results && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="overflow-x-auto bg-base-100 rounded-lg shadow-lg p-4"
              >
                <table className="table w-full">
                  <thead>
                    <tr>
                      <th>URL</th>
                      <th>Price</th>
                      <th>Stock Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.map((item, index) => (
                      <tr key={index}>
                        <td className="truncate max-w-xs">{item.url}</td>
                        <td>{item.price}</td>
                        <td>{item.stock}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
