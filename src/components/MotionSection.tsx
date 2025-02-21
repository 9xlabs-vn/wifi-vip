"use client"

import { motion } from "framer-motion"

interface MotionSectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function MotionSection({ children, className }: MotionSectionProps) {
  return (
    <motion.div
      variants={{
        animate: {
          transition: {
            staggerChildren: 0.2
          }
        }
      }}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
