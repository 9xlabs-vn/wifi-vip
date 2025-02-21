"use client"

import { motion } from "framer-motion"

interface AnimatedContentProps {
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedContent({ children, className }: AnimatedContentProps) {
  return (
    <motion.div
      variants={{
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
