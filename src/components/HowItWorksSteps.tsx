"use client"

import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

interface Step {
  title: string;
  description: string;
}

export default function HowItWorksSteps() {
  const steps: Step[] = [
    { title: "Sign Up", description: "Create your account in seconds" },
    { title: "Choose Plan", description: "Select the perfect package" },
    { title: "Start Gaming", description: "Connect and play instantly" }
  ]

  return (
    <div className="grid md:grid-cols-3 gap-8 relative">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          variants={fadeIn}
          className="relative"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Card className="relative z-10">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-violet-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-violet-500">{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </CardContent>
          </Card>
          {index < 2 && (
            <ChevronRight className="hidden md:block absolute top-1/2 -right-4 text-violet-500 z-20" />
          )}
        </motion.div>
      ))}
    </div>
  )
}
