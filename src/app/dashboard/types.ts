export interface WifiSession {
  timeRemaining: number // in minutes
  dataUsed: number // in MB
  speed: number // in Mbps
  isActive: boolean
}

export interface ConnectionDetails {
  deviceName: string
  macAddress: string
  ipAddress: string
  networkName: string
}

export interface WifiPackage {
  id: string
  duration: string
  price: number
  type: 'hourly' | 'daily' | 'weekly'
}

export interface Transaction {
  id: string
  packageName: string
  timestamp: Date
  amount: number
}