"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export const NetworkGraph = () => {
  return (
    <div className="relative h-[400px] w-full bg-gradient-to-r from-violet-500/5 to-indigo-500/5 rounded-xl border border-violet-500/20 backdrop-blur-sm">
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-muted-foreground">Network Visualization</span>
      </div>
    </div>
  )
}
