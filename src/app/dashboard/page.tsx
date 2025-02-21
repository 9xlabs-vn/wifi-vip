"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Wifi, Clock, Database, Activity, Zap, History, Laptop } from "lucide-react"
import { mockSession, mockConnectionDetails, mockPackages, mockTransactions, formatCurrency, formatDate } from './mock-data'

export default function DashboardPage() {
  const { timeRemaining, dataUsed, speed, isActive } = mockSession
  const timeRemainingPercentage = (timeRemaining / 60) * 100 // Assuming max is 60 minutes

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Status Bar */}
      <div className="bg-card rounded-lg p-4 border shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className={`p-2 rounded-full ${isActive ? 'bg-green-500/10' : 'bg-red-500/10'}`}>
              <Wifi className={`h-6 w-6 ${isActive ? 'text-green-500' : 'text-red-500'}`} />
            </div>
            <div>
              <h2 className="text-xl font-semibold">WiFi VIP</h2>
              <p className="text-muted-foreground">
                {isActive ? 'Connected and Active' : 'Not Connected'}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="text-center">
              <div className="flex items-center space-x-1 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Time Left</span>
              </div>
              <p className="text-xl font-bold">{timeRemaining}m</p>
            </div>
            <div className="text-center">
              <div className="flex items-center space-x-1 text-muted-foreground">
                <Activity className="h-4 w-4" />
                <span>Speed</span>
              </div>
              <p className="text-xl font-bold">{speed} Mbps</p>
            </div>
            <div className="text-center">
              <div className="flex items-center space-x-1 text-muted-foreground">
                <Database className="h-4 w-4" />
                <span>Data Used</span>
              </div>
              <p className="text-xl font-bold">{dataUsed} MB</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-12">
        {/* Main Content - Left Column */}
        <div className="space-y-6 md:col-span-8">
          {/* Session Overview Card */}
          <Card>
            <CardHeader>
              <CardTitle>Current Session</CardTitle>
              <CardDescription>Active time and usage overview</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <div>
                    <p className="font-medium">Time Remaining</p>
                    <p className="text-2xl font-bold">{timeRemaining} minutes</p>
                  </div>
                  <Button>Extend Session</Button>
                </div>
                <Progress value={timeRemainingPercentage} className="h-3" />
              </div>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Activity className="h-5 w-5 text-primary" />
                    <p className="font-medium">Network Speed</p>
                  </div>
                  <p className="text-2xl font-bold">{speed} Mbps</p>
                  <p className="text-sm text-muted-foreground">Download/Upload</p>
                </div>
                
                <div className="p-4 bg-primary/5 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Database className="h-5 w-5 text-primary" />
                    <p className="font-medium">Data Usage</p>
                  </div>
                  <p className="text-2xl font-bold">{dataUsed} MB</p>
                  <p className="text-sm text-muted-foreground">Total Used</p>
                </div>
                
                <div className="p-4 bg-primary/5 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Zap className="h-5 w-5 text-primary" />
                    <p className="font-medium">Connection</p>
                  </div>
                  <p className="text-2xl font-bold">Stable</p>
                  <p className="text-sm text-muted-foreground">5GHz Band</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* WiFi Packages Card */}
          <Card>
            <CardHeader>
              <CardTitle>WiFi Packages</CardTitle>
              <CardDescription>Select a package that suits your needs</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="hourly" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-4">
                  <TabsTrigger value="hourly">Hourly</TabsTrigger>
                  <TabsTrigger value="daily">Daily</TabsTrigger>
                  <TabsTrigger value="weekly">Weekly</TabsTrigger>
                </TabsList>
                {Object.entries(mockPackages).map(([period, packages]) => (
                  <TabsContent key={period} value={period} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      {packages.map((pkg) => (
                        <Button
                          key={pkg.id}
                          variant="outline"
                          className="h-auto p-6 flex flex-col items-center justify-center hover:bg-primary/5"
                        >
                          <p className="text-2xl font-bold mb-2">{pkg.duration}</p>
                          <p className="text-primary mb-1">{formatCurrency(pkg.price)}</p>
                          <p className="text-sm text-muted-foreground">
                            {period === 'hourly' ? 'High-Speed Access' : 'Unlimited Access'}
                          </p>
                        </Button>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar - Right Column */}
        <div className="space-y-6 md:col-span-4">
          {/* Connection Details Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Laptop className="h-5 w-5" />
                <span>Device Info</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Device Name</p>
                  <p className="font-medium">{mockConnectionDetails.deviceName}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">MAC Address</p>
                  <p className="font-medium">{mockConnectionDetails.macAddress}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">IP Address</p>
                  <p className="font-medium">{mockConnectionDetails.ipAddress}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Network</p>
                  <p className="font-medium">{mockConnectionDetails.networkName}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Transaction History Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <History className="h-5 w-5" />
                <span>Recent Activity</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockTransactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex justify-between items-center pb-3 border-b last:border-0 last:pb-0"
                  >
                    <div>
                      <p className="font-medium">{transaction.packageName}</p>
                      <p className="text-sm text-muted-foreground">
                        {formatDate(transaction.timestamp)}
                      </p>
                    </div>
                    <p className="font-medium text-primary">
                      {formatCurrency(transaction.amount)}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}