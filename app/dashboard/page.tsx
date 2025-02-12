import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { mockSession, mockConnectionDetails, mockPackages, mockTransactions, formatCurrency, formatDate } from './mock-data'

export default function DashboardPage() {
  const { timeRemaining, dataUsed, speed, isActive } = mockSession
  return (
    <div className="container mx-auto p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Wi-Fi Dashboard</h1>
          <p className="text-muted-foreground">Manage your Wi-Fi access and packages</p>
        </div>
        <Badge variant="outline" className="text-lg py-1">
          {isActive ? 'Connected' : 'Disconnected'}
        </Badge>
      </div>

      {/* Main Content */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Current Session Card */}
        <Card>
          <CardHeader>
            <CardTitle>Current Session</CardTitle>
            <CardDescription>Active time and usage details</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Time Remaining</span>
                  <span className="text-sm text-muted-foreground">{timeRemaining} minutes</span>
                </div>
                <Progress value={timeRemaining} className="h-2" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">Data Used</p>
                  <p className="text-2xl font-bold">{dataUsed} MB</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Speed</p>
                  <p className="text-2xl font-bold">{speed} Mbps</p>
                </div>
              </div>
              <Button className="w-full">Extend Session</Button>
            </div>
          </CardContent>
        </Card>

        {/* Purchase Options Card */}
        <Card>
          <CardHeader>
            <CardTitle>Wi-Fi Packages</CardTitle>
            <CardDescription>Choose a package that suits your needs</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="hourly" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="hourly">Hourly</TabsTrigger>
                <TabsTrigger value="daily">Daily</TabsTrigger>
                <TabsTrigger value="weekly">Weekly</TabsTrigger>
              </TabsList>
              <TabsContent value="hourly" className="space-y-4">
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {mockPackages.hourly.map((pkg) => (
                    <Button key={pkg.id} variant="outline" className="h-24">
                      <div>
                        <p className="font-bold">{pkg.duration}</p>
                        <p className="text-sm text-muted-foreground">{formatCurrency(pkg.price)}</p>
                      </div>
                    </Button>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="daily" className="space-y-4">
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {mockPackages.daily.map((pkg) => (
                    <Button key={pkg.id} variant="outline" className="h-24">
                      <div>
                        <p className="font-bold">{pkg.duration}</p>
                        <p className="text-sm text-muted-foreground">{formatCurrency(pkg.price)}</p>
                      </div>
                    </Button>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="weekly" className="space-y-4">
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {mockPackages.weekly.map((pkg) => (
                    <Button key={pkg.id} variant="outline" className="h-24">
                      <div>
                        <p className="font-bold">{pkg.duration}</p>
                        <p className="text-sm text-muted-foreground">{formatCurrency(pkg.price)}</p>
                      </div>
                    </Button>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Connection Details Card */}
        <Card>
          <CardHeader>
            <CardTitle>Connection Details</CardTitle>
            <CardDescription>Your device and network information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">Device</p>
                  <p className="text-muted-foreground">{mockConnectionDetails.deviceName}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">MAC Address</p>
                  <p className="text-muted-foreground">{mockConnectionDetails.macAddress}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">IP Address</p>
                  <p className="text-muted-foreground">{mockConnectionDetails.ipAddress}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Network</p>
                  <p className="text-muted-foreground">{mockConnectionDetails.networkName}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Transaction History Card */}
        <Card>
          <CardHeader>
            <CardTitle>Transaction History</CardTitle>
            <CardDescription>Recent purchases and session details</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockTransactions.map((transaction) => (
                <div key={transaction.id} className="flex justify-between items-center border-b pb-2 last:border-0">
                  <div>
                    <p className="font-medium">{transaction.packageName}</p>
                    <p className="text-sm text-muted-foreground">{formatDate(transaction.timestamp)}</p>
                  </div>
                  <p className="font-medium">{formatCurrency(transaction.amount)}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}