"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const testimonials = [
  {
    name: "Alex Chen",
    role: "Pro Gamer",
    content: "Best WiFi service I've ever used for gaming. Zero lag, zero problems.",
    rating: 5
  },
  // ...existing testimonials...
]

export default function TestimonialsSection() {
  return (
    <div id="testimonials" className="py-32 relative">
      <motion.div 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container mx-auto px-6"
      >
        <motion.div variants={fadeIn} className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            What Our
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent ml-3">
              Users Say
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-violet-500 mb-4" />
                  <p className="text-lg mb-4">{testimonial.content}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                    <div className="flex">
                      {Array(testimonial.rating).fill(null).map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
