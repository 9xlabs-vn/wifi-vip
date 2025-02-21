"use client"

import { useState, useEffect } from 'react'

export default function RandomCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(Math.floor(Math.random() * 1000))
  }, [])

  return (
    <div className="text-4xl font-bold text-violet-600">
      {count}
    </div>
  )
}
