"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Progress } from "@/components/ui/progress"

export const SpeedIndicator = () => {
  return (
    <div className="flex items-center justify-between">
      <span className="text-2xl font-bold">1 Gbps</span>
      <span className="text-sm text-green-500">Optimal</span>
    </div>
  )
}
