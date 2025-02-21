"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function TechnologySection() {
  return (
    <div className="py-32 bg-gradient-to-b from-violet-50/50 to-background dark:from-violet-950/10 dark:to-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Powered by
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent ml-3">
              Advanced Technology
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the latest in network infrastructure and speed optimization
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Fiber Optic", value: "10Gbps", description: "Backbone Connection" },
            { title: "Latency", value: "<1ms", description: "Server Response" },
            { title: "Bandwidth", value: "Unlimited", description: "No Data Caps" },
            { title: "Uptime", value: "99.99%", description: "Service Reliability" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="bg-background/60 backdrop-blur-xl border-violet-500/20">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-violet-600 mb-2">{stat.title}</h3>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
