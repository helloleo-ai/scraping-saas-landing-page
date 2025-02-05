import { motion } from 'framer-motion'

export default function ScrapingAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path
          d="M 0,50 Q 25,45 50,50 T 100,50"
          stroke="currentColor"
          strokeWidth="0.2"
          fill="none"
          className="text-primary/10"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1,
            opacity: 1,
            d: [
              "M 0,50 Q 25,45 50,50 T 100,50",
              "M 0,50 Q 25,55 50,50 T 100,50",
              "M 0,50 Q 25,45 50,50 T 100,50"
            ]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.path
          d="M 0,30 Q 25,25 50,30 T 100,30"
          stroke="currentColor"
          strokeWidth="0.2"
          fill="none"
          className="text-secondary/10"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1,
            opacity: 1,
            d: [
              "M 0,30 Q 25,25 50,30 T 100,30",
              "M 0,30 Q 25,35 50,30 T 100,30",
              "M 0,30 Q 25,25 50,30 T 100,30"
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        <motion.path
          d="M 0,70 Q 25,65 50,70 T 100,70"
          stroke="currentColor"
          strokeWidth="0.2"
          fill="none"
          className="text-primary/10"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1,
            opacity: 1,
            d: [
              "M 0,70 Q 25,65 50,70 T 100,70",
              "M 0,70 Q 25,75 50,70 T 100,70",
              "M 0,70 Q 25,65 50,70 T 100,70"
            ]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </svg>
    </div>
  )
}
