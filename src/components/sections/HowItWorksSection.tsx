"use client"

import MotionSection from '../MotionSection'
import AnimatedContent from '../AnimatedContent'
import HowItWorksSteps from '../HowItWorksSteps'

export default function HowItWorksSection() {
  return (
    <div className="py-32 bg-violet-50/50 dark:bg-violet-950/10 relative">
      <MotionSection className="container mx-auto px-6">
        <AnimatedContent>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-center">
            How It
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent ml-3">
              Works
            </span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16">
            Get started in three simple steps
          </p>
        </AnimatedContent>

        <HowItWorksSteps />
      </MotionSection>
    </div>
  )
}
