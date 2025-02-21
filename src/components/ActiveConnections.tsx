"use client"

import { Card, CardContent } from "@/components/ui/card"

export const ActiveConnections = () => {
  return (
    <Card className="bg-background/60 backdrop-blur-xl">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4">Active Connections</h3>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">127</span>
          <span className="text-sm text-violet-500">Connected Users</span>
        </div>
      </CardContent>
    </Card>
  )
}
