import { ActiveConnections } from '@/components/ActiveConnections'
import { AnimatedSection } from '@/components/AnimatedSection'
import BlurredBackground from "@/components/BlurredBackground"
import { MotionWrapper } from "@/components/MotionWrapper"
import { NetworkGraph } from '@/components/NetworkGraph'
import {
  HowItWorksSection,
  StatsSection,
  TechnologySection
} from '@/components/sections'
import { SpeedIndicator } from '@/components/SpeedIndicator'
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Clock, Globe, Shield, Users, Wifi, Zap } from "lucide-react"

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}

const features: Feature[] = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience speeds up to 1Gbps, perfect for gaming and streaming"
  },
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "Advanced encryption and security protocols to protect your data"
  },
  {
    icon: Clock,
    title: "Flexible Time Plans",
    description: "Choose from hourly, daily, or weekly packages that suit your needs"
  },
  {
    icon: Globe,
    title: "Wide Coverage",
    description: "Connect at any of our partner gaming cafes across the city"
  },
  {
    icon: Users,
    title: "Premium Support",
    description: "24/7 dedicated customer support for instant assistance"
  },
  {
    icon: Wifi,
    title: "Easy Connection",
    description: "One-click connection with our smart login system"
  }
]

const pricingPlans: PricingPlan[] = [
  {
    name: "Hourly",
    price: "10k",
    features: ["1 Hour Access", "Full Speed", "Basic Support"]
  },
  {
    name: "Daily",
    price: "50k",
    features: ["24 Hours Access", "Priority Speed", "Premium Support"],
    popular: true
  },
  {
    name: "Weekly",
    price: "200k",
    features: ["7 Days Access", "Ultra Speed", "24/7 VIP Support"]
  }
]


export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background relative overflow-hidden">
        <BlurredBackground>
          <AnimatedSection className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-background/80 backdrop-blur-lg rounded-full px-6 py-3 border border-violet-500/20">
            <nav className="flex items-center space-x-8">
              {["Features", "Pricing", "Testimonials", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-muted-foreground hover:text-violet-500 transition-colors"
                >
                  {item}
                </a>
              ))}
              <ThemeToggle />
            </nav>
          </AnimatedSection>

          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center">
            <div className="container mx-auto px-6">
              <div className="flex flex-col lg:flex-row items-center gap-20">
                <MotionWrapper delay={0.2} className="flex-1 text-center lg:text-left space-y-8">
                  <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-violet-500/20 to-indigo-500/20 rounded-full px-5 py-2.5">
                    <Wifi className="h-5 w-5 text-violet-500 animate-pulse" />
                    <span className="text-sm font-semibold bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">
                      Premium WiFi Service
                    </span>
                  </div>
                  <h1 className="text-6xl lg:text-7xl font-bold tracking-tight">
                    Experience the
                    <br />
                    <span className="bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">
                      Future of WiFi
                    </span>
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                    Ultra-fast, secure, and reliable internet connectivity designed for modern gaming cafes.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-lg h-14 px-8 rounded-full transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
                    >
                      Get Started
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="text-lg h-14 px-8 rounded-full hover:bg-violet-500/10 transition-all duration-300 focus:ring-2 focus:ring-violet-500"
                    >
                      Learn More
                    </Button>
                  </div>
                </MotionWrapper>

                <MotionWrapper delay={0.4} className="flex-1 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-indigo-500/20 blur-3xl -z-10" />
                  <NetworkGraph />
                </MotionWrapper>
              </div>
            </div>
          </section>

          {/* Stats Cards Section */}
          <MotionWrapper delay={0.6}>
            <div className="py-16 bg-violet-50/50 dark:bg-violet-950/10 backdrop-blur-xl">
              <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Card className="bg-background/60 backdrop-blur-xl">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4">Network Status</h3>
                      <SpeedIndicator />
                    </CardContent>
                  </Card>
                  <ActiveConnections />
                  <Card className="bg-background/60 backdrop-blur-xl">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4">Server Load</h3>
                      <Progress value={25} className="h-2 bg-violet-200" />
                      <p className="text-sm text-muted-foreground mt-2">25% Utilized</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </MotionWrapper>

          <HowItWorksSection />
          <StatsSection />
          <TechnologySection />

          {/* Features Section with Stagger Animation */}
          <div className="py-40 bg-gradient-to-b from-muted/30 to-background relative">
            <div className="container mx-auto px-6">
              <MotionWrapper>
                <div className="text-center mb-16">
                  <h2 className="text-3xl lg:text-5xl font-bold mb-4">
                    Premium Features for{" "}
                    <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                      Premium Users
                    </span>
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Experience the best-in-class WiFi service with features designed for demanding users.
                  </p>
                </div>
              </MotionWrapper>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <MotionWrapper key={index} delay={index * 0.1}>
                    <Card className="group hover:border-violet-500/50 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-violet-500/10 group-hover:bg-violet-500/20 transition-colors duration-300">
                          <feature.icon className="h-6 w-6 text-violet-500" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </MotionWrapper>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing Section with Stagger Animation */}
          <div className="py-40 relative">
            <div className="container mx-auto px-6">
              <MotionWrapper>
                <div className="text-center mb-16">
                  <h2 className="text-3xl lg:text-5xl font-bold mb-4">
                    Simple{" "}
                    <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                      Pricing
                    </span>
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Choose the perfect plan for your gaming sessions.
                  </p>
                </div>
              </MotionWrapper>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {pricingPlans.map((plan, index) => (
                  <MotionWrapper key={index} delay={index * 0.2}>
                    <Card
                      key={index}
                      className={`relative ${plan.popular ? 'border-violet-500 shadow-lg' : ''}`}
                    >
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                          <span className="bg-violet-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Most Popular
                          </span>
                        </div>
                      )}
                      <CardContent className="p-6">
                        <div className="text-center">
                          <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                          <div className="text-4xl font-bold mb-6">
                            {plan.price}
                            <span className="text-lg text-muted-foreground"> VND</span>
                          </div>
                          <ul className="space-y-3 mb-6">
                            {plan.features.map((feature, i) => (
                              <li key={i} className="flex items-center justify-center text-muted-foreground">
                                <Wifi className="h-4 w-4 mr-2 text-violet-500" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <Button
                            className={`w-full ${plan.popular ? 'bg-violet-600 hover:bg-violet-700' : ''}`}
                            variant={plan.popular ? "default" : "outline"}
                          >
                            Get Started
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </MotionWrapper>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced CTA Section */}
          <MotionWrapper>
            <div className="relative py-32">
              <div className="absolute inset-0">
                <div className="absolute h-[600px] w-[600px] rounded-full bg-violet-500/10 blur-[100px] -bottom-48 -right-24 animate-pulse"></div>
                <div className="absolute h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[100px] bottom-0 left-0 animate-pulse delay-300"></div>
              </div>

              <div className="relative container mx-auto px-6">
                <Card className="max-w-4xl mx-auto bg-background/60 backdrop-blur-xl border-violet-500/20">
                  <CardContent className="p-16 text-center">
                    <h2 className="text-5xl font-bold mb-6">
                      Ready for
                      <span className="bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent ml-3">
                        Next-Gen WiFi?
                      </span>
                    </h2>
                    <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                      Join the future of internet connectivity today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-lg h-14 px-8 rounded-full transition-all duration-300 hover:scale-105"
                      >
                        Get Started Now
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        className="text-lg h-14 px-8 rounded-full hover:bg-violet-500/10 transition-all duration-300"
                      >
                        Contact Sales
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </MotionWrapper>
        </BlurredBackground>


      </div>
    </main>
  )
}
