"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import Link from "next/link"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Wifi, Zap, Shield, Clock, Loader2 } from "lucide-react"
import { useState } from "react"

import { signUpSchema, type SignUpFormData } from "./types"

export default function SignUpPage() {
  const [isLoading, setIsLoading] = useState(false)
  
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: ""
    }
  })

  async function onSubmit(values: SignUpFormData) {
    try {
      setIsLoading(true)
      // TODO: Integrate with backend authentication
      console.log('Form submitted:', values)
    } catch (error) {
      console.error('Signup error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Section - Features */}
      <div className="lg:w-1/2 dark:bg-[#0F172A] bg-primary/5 text-foreground p-8 lg:p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,51,122,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] animate-[grain_8s_steps(10)_infinite]"></div>
        <div className="relative z-10">
          <div className="flex items-center space-x-3 mb-12">
            <div className="h-10 w-10 bg-violet-500/10 rounded-lg flex items-center justify-center">
              <Wifi className="h-5 w-5 text-violet-400" />
            </div>
            <h1 className="text-2xl font-bold">WiFi VIP</h1>
          </div>

          <div className="max-w-md">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Join Our Premium Network
            </h2>
            <p className="text-slate-400 mb-8 lg:text-lg">
              Experience lightning-fast internet with our premium WiFi service designed for demanding users.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="h-8 w-8 bg-violet-500/10 rounded-lg flex items-center justify-center mt-1">
                  <Zap className="h-4 w-4 text-violet-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Instant Access</h3>
                  <p className="text-sm text-slate-400">Get connected immediately after registration</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="h-8 w-8 bg-violet-500/10 rounded-lg flex items-center justify-center mt-1">
                  <Shield className="h-4 w-4 text-violet-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Secure Connection</h3>
                  <p className="text-sm text-slate-400">Enterprise-grade security for your data</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="h-8 w-8 bg-violet-500/10 rounded-lg flex items-center justify-center mt-1">
                  <Clock className="h-4 w-4 text-violet-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Flexible Plans</h3>
                  <p className="text-sm text-slate-400">Choose from hourly, daily, or weekly packages</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-violet-500/20 to-transparent blur-3xl"></div>
      </div>

      {/* Right Section - Sign Up Form */}
      <div className="lg:w-1/2 bg-background flex items-center justify-center p-8 relative">
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight">Create your account</h2>
            <p className="text-sm text-gray-500 mt-2">
              Join our premium WiFi network today
            </p>
          </div>

          <Card className="border-0 shadow-none">
            <CardContent className="p-0">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your email" 
                            {...field} 
                            className="h-11 bg-muted/50 border-0 focus-visible:ring-violet-500"
                            disabled={isLoading}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Choose a username" 
                            {...field} 
                            className="h-11 bg-muted/50 border-0 focus-visible:ring-violet-500"
                            disabled={isLoading}
                          />
                        </FormControl>
                        <FormDescription>
                          This will be your display name in the system
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input 
                            type="password" 
                            placeholder="Create a password" 
                            {...field} 
                            className="h-11 bg-muted/50 border-0 focus-visible:ring-violet-500"
                            disabled={isLoading}
                          />
                        </FormControl>
                        <FormDescription>
                          Password must contain at least 8 characters, including uppercase, lowercase,
                          numbers, and special characters
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <Input 
                            type="password" 
                            placeholder="Confirm your password" 
                            {...field} 
                            className="h-11 bg-muted/50 border-0 focus-visible:ring-violet-500"
                            disabled={isLoading}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-200"
                    disabled={isLoading}
                  >
                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {isLoading ? "Creating account..." : "Create Account"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <div className="text-sm text-center">
              Already have an account?{" "}
              <Link 
                href="/auth" 
                className="text-primary hover:text-primary/90 font-medium"
              >
                Sign in
              </Link>
            </div>
            <div className="text-xs text-muted-foreground text-center">
              By creating an account, you agree to our{" "}
              <Link href="/terms" className="text-primary hover:text-primary/90 hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-primary hover:text-primary/90 hover:underline">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}