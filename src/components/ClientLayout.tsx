"use client"

import React from 'react'

export const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  )
}
