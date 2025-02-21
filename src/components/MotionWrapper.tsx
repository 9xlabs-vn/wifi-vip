"use client"

import { motion } from "framer-motion"

interface MotionWrapperProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export const MotionWrapper = ({ children, delay = 0, className }: MotionWrapperProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay,
        ease: [0.4, 0, 0.2, 1]
      }}
    >
      {children}
    </motion.div>
  )
}
