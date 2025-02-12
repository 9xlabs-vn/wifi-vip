import { WifiSession, ConnectionDetails, WifiPackage, Transaction } from './types'

export const mockSession: WifiSession = {
  timeRemaining: 45,
  dataUsed: 256,
  speed: 10,
  isActive: true
}

export const mockConnectionDetails: ConnectionDetails = {
  deviceName: 'MacBook Pro',
  macAddress: 'XX:XX:XX:XX:XX:XX',
  ipAddress: '192.168.1.100',
  networkName: 'WIFI VIP'
}

export const mockPackages: Record<string, WifiPackage[]> = {
  hourly: [
    { id: '1h', duration: '1 Hour', price: 10000, type: 'hourly' },
    { id: '2h', duration: '2 Hours', price: 18000, type: 'hourly' }
  ],
  daily: [
    { id: '1d', duration: '1 Day', price: 50000, type: 'daily' },
    { id: '3d', duration: '3 Days', price: 120000, type: 'daily' }
  ],
  weekly: [
    { id: '1w', duration: '1 Week', price: 200000, type: 'weekly' },
    { id: '2w', duration: '2 Weeks', price: 350000, type: 'weekly' }
  ]
}

export const mockTransactions: Transaction[] = [
  {
    id: '1',
    packageName: '1 Hour Package',
    timestamp: new Date(),
    amount: 10000
  },
  {
    id: '2',
    packageName: '2 Hours Package',
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
    amount: 18000
  },
  {
    id: '3',
    packageName: '1 Day Package',
    timestamp: new Date(Date.now() - 48 * 60 * 60 * 1000), // 2 days ago
    amount: 50000
  }
]

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(amount)
}

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    month: 'short',
    day: 'numeric'
  }).format(date)
}