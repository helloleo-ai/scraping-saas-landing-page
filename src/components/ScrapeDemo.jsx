import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaSpinner, FaTable, FaChartBar } from 'react-icons/fa'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const exampleUrls = [
  'https://amazon.com/best-sellers',
  'https://ebay.com/deals',
  'https://walmart.com/clearance'
]

const mockData = [
  { url: 'https://example.com/electronics/smartphone-x12', price: '$599.99', stock: 'In Stock', rating: '4.5/5', reviews: 128, lastUpdated: '2m ago', category: 'Electronics' },
  { url: 'https://example.com/electronics/wireless-earbuds', price: '$79.99', stock: 'Low Stock', rating: '4.2/5', reviews: 89, lastUpdated: '5m ago', category: 'Electronics' },
  { url: 'https://example.com/electronics/laptop-pro', price: '$1,299.99', stock: 'Out of Stock', rating: '4.8/5', reviews: 256, lastUpdated: '12m ago', category: 'Electronics' },
  { url: 'https://example.com/home/smart-thermostat', price: '$149.99', stock: 'In Stock', rating: '4.3/5', reviews: 67, lastUpdated: '18m ago', category: 'Smart Home' },
  { url: 'https://example.com/home/robot-vacuum', price: '$249.99', stock: 'In Stock', rating: '4.6/5', reviews: 183, lastUpdated: '25m ago', category: 'Smart Home' },
  { url: 'https://example.com/accessories/phone-case', price: '$24.99', stock: 'Low Stock', rating: '4.1/5', reviews: 42, lastUpdated: '31m ago', category: 'Accessories' },
  { url: 'https://example.com/wearables/fitness-tracker', price: '$89.99', stock: 'In Stock', rating: '4.4/5', reviews: 156, lastUpdated: '45m ago', category: 'Wearables' },
  { url: 'https://example.com/gaming/console-bundle', price: '$449.99', stock: 'Out of Stock', rating: '4.7/5', reviews: 298, lastUpdated: '1h ago', category: 'Gaming' }
]

export default function ScrapeDemo() {
  const [url, setUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState(null)
  const [viewMode, setViewMode] = useState('table') // 'table' or 'chart'

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
    <section id="demo" className="py-16 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Try It Now</h2>
        <div className="mx-auto max-w-6xl">
          <div className="space-y-8">
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
            {results && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <div className="flex justify-end gap-2">
                  <button
                    className={`btn btn-sm ${viewMode === 'table' ? 'btn-primary' : 'btn-ghost'}`}
                    onClick={() => setViewMode('table')}
                  >
                    <FaTable /> Table
                  </button>
                  <button
                    className={`btn btn-sm ${viewMode === 'chart' ? 'btn-primary' : 'btn-ghost'}`}
                    onClick={() => setViewMode('chart')}
                  >
                    <FaChartBar /> Chart
                  </button>
                </div>
                
                <div className="bg-base-100 rounded-lg shadow-lg p-4">
                {viewMode === 'table' && (
                  <div className="overflow-x-auto">
                    <table className="table table-pin-rows table-pin-cols">
                    <thead>
                      <tr>
                        <th>Category</th>
                        <th>URL</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Rating</th>
                        <th>Reviews</th>
                        <th>Updated</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.map((item, index) => (
                        <tr key={index}>
                          <td>{item.category}</td>
                          <td className="truncate max-w-xs">{item.url}</td>
                          <td>{item.price}</td>
                          <td>
                            <span className={`badge ${
                              item.stock === 'In Stock' ? 'badge-success' : 
                              item.stock === 'Low Stock' ? 'badge-warning' : 
                              'badge-error'
                            } badge-sm`}>
                              {item.stock}
                            </span>
                          </td>
                          <td>{item.rating}</td>
                          <td>{item.reviews}</td>
                          <td>{item.lastUpdated}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  </div>
                )}
                
                {viewMode === 'chart' && (
                  <div className="h-[400px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={results}
                        margin={{
                          top: 20,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Tooltip />
                        <Bar 
                          dataKey="reviews" 
                          fill="#3b82f6"
                          name="Number of Reviews" 
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                )}
              </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
