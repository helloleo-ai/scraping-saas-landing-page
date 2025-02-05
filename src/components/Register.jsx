import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle registration logic here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="register" className="min-h-screen py-20 px-4 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full"
      >
        <h2 className="text-4xl font-bold text-center mb-8">
          <span className="gradient-text">Create Account</span>
        </h2>
        
        <div className="glass-card p-8 rounded-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <div className="relative">
                <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input input-bordered w-full pl-10"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>

            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <div className="relative">
                <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input input-bordered w-full pl-10"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="input input-bordered w-full pl-10"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div>
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <div className="relative">
                <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="input input-bordered w-full pl-10"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center text-sm">
            Already have an account?{' '}
            <a href="#" className="text-primary hover:underline">
              Sign in
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
