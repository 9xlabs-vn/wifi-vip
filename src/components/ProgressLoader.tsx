"use client"

import { useState, useEffect } from 'react'
import { Progress } from "@/components/ui/progress"

export default function ProgressLoader() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setProgress(25)
  }, [])

  return (
    <>
      <Progress value={progress} className="h-2 bg-violet-200" />
      <p className="text-sm text-muted-foreground mt-2">{progress}% Utilized</p>
    </>
  )
}
