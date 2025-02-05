import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import ScrapingAnimation from './ScrapingAnimation'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative">
      <ScrapingAnimation />
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="gradient-text">Scrape Data</span>
          <br />
          Like Never Before
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
        >
          Transform web data into actionable insights with our powerful scraping solution. Built for developers, loved by businesses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex gap-4 justify-center">
            <Link to="/register" className="btn btn-primary btn-lg group">
              Start Scraping Free
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="#demo" className="btn btn-outline btn-lg group">
              Try Demo
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
