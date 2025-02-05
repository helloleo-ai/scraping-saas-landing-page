import { FaRobot, FaChartBar, FaUsers, FaQuestionCircle, FaTag } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-base-100/80 backdrop-blur-lg"
    >
      <div className="container mx-auto px-4">
        <div className="navbar">
          <div className="navbar-start">
            <a href="#" className="text-xl font-bold">ScrapeMaster</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-2">
              <li><a href="#features" className="flex gap-2"><FaRobot />Features</a></li>
              <li><a href="#demo" className="flex gap-2"><FaChartBar />Demo</a></li>
              <li><a href="#pricing" className="flex gap-2"><FaTag />Pricing</a></li>
              <li><a href="#testimonials" className="flex gap-2"><FaUsers />Testimonials</a></li>
              <li><a href="#faq" className="flex gap-2"><FaQuestionCircle />FAQ</a></li>
            </ul>
          </div>
          <div className="navbar-end">
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
