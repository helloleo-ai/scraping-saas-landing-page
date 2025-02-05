import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaSpinner } from 'react-icons/fa'

const exampleUrls = [
  'https://amazon.com/best-sellers',
  'https://ebay.com/deals',
  'https://walmart.com/clearance'
]

const mockData = [
  { url: 'https://example.com/product1', price: '$29.99', stock: 'In Stock' },
  { url: 'https://example.com/product2', price: '$19.99', stock: 'Low Stock' },
  { url: 'https://example.com/product3', price: '$39.99', stock: 'Out of Stock' },
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
        <div className="max-w-2xl mx-auto">
          <div className="mb-4 flex flex-wrap gap-2">
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
          <form onSubmit={handleSubmit} className="mb-8">
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

          {results && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="overflow-x-auto"
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
    </section>
  )
}
