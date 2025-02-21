"use client"

import { useState } from "react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/hooks/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Wifi, Github, Mail, Facebook, Zap, Shield, Clock, Loader2 } from "lucide-react"
import { mockLogin, mockSocialLogin } from "./mock-data"
import { AuthError } from "./types"

const formSchema = z.object({
  username: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
})

export default function AuthPage() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [socialLoading, setSocialLoading] = useState<'github' | 'email' | 'facebook' | null>(null)
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true)
      const user = await mockLogin(values.username, values.password)
      
      if (user) {
        toast({
          title: "Login successful!",
          description: `Welcome back, ${user.name}`,
        })
        // Simulate redirect
        setTimeout(() => {
          window.location.href = "/dashboard"
        }, 1000)
      } else {
        toast({
          title: "Login failed",
          description: "Invalid username or password",
          variant: "destructive",
        })
      }
    } catch (error: unknown) {
      const authError = error as AuthError
      toast({
        title: "Error",
        description: authError.message || "An unexpected error occurred",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  async function handleSocialLogin(provider: 'github' | 'email') {
    try {
      setSocialLoading(provider)
      const user = await mockSocialLogin(provider)
      
      if (user) {
        toast({
          title: "Login successful!",
          description: `Welcome, ${user.name}`,
        })
        // Simulate redirect
        setTimeout(() => {
          window.location.href = "/dashboard"
        }, 1000)
      }
    } catch (error: unknown) {
      const authError = error as AuthError
      toast({
        title: "Social login failed",
        description: authError.message || "Could not authenticate with provider",
        variant: "destructive",
      })
    } finally {
      setSocialLoading(null)
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
              Premium WiFi Access for Elite Users
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
                  <h3 className="font-semibold mb-1">High-Speed Connection</h3>
                  <p className="text-sm text-slate-400">Enjoy blazing fast speeds up to 1Gbps</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="h-8 w-8 bg-violet-500/10 rounded-lg flex items-center justify-center mt-1">
                  <Shield className="h-4 w-4 text-violet-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Enhanced Security</h3>
                  <p className="text-sm text-slate-400">Advanced encryption for your protection</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="h-8 w-8 bg-violet-500/10 rounded-lg flex items-center justify-center mt-1">
                  <Clock className="h-4 w-4 text-violet-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">24/7 Access</h3>
                  <p className="text-sm text-slate-400">Unlimited connection time, always available</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-violet-500/20 to-transparent blur-3xl"></div>
      </div>

      {/* Right Section - Login Form */}
      <div className="lg:w-1/2 bg-background flex items-center justify-center p-8 relative">
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight">Welcome back</h2>
            <p className="text-sm text-muted-foreground mt-2">
              Use demo account - username: user, password: user123
            </p>
          </div>

          <Card className="border-0 shadow-none">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <CardContent className="space-y-4 p-0">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem className="space-y-1">
                        <FormControl>
                          <Input
                            placeholder="Username"
                            {...field}
                            type="text"
                            autoCapitalize="none"
                            autoCorrect="off"
                            autoComplete="username"
                            className="h-11 bg-muted/50 border-0 focus-visible:ring-primary"
                            disabled={isLoading}
                          />
                        </FormControl>
                        <FormMessage className="text-sm" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem className="space-y-1">
                        <FormControl>
                          <Input
                            placeholder="Password"
                            {...field}
                            type="password"
                            autoComplete="current-password"
                            className="h-11 bg-muted/50 border-0 focus-visible:ring-primary"
                            disabled={isLoading}
                          />
                        </FormControl>
                        <FormMessage className="text-sm" />
                      </FormItem>
                    )}
                  />
                  <div className="flex items-center justify-end">
                    <Button 
                      variant="link" 
                      className="text-sm text-primary hover:text-primary/90 p-0"
                      disabled={isLoading}
                    >
                      Forgot password?
                    </Button>
                  </div>
                </CardContent>
                <div className="space-y-4">
                  <Button 
                    className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-200"
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {isLoading ? "Signing in..." : "Sign In"}
                  </Button>
                  
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <Separator />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <Button
                      variant="outline"
                      className="bg-background hover:bg-muted/50"
                      onClick={() => handleSocialLogin('github')}
                      disabled={isLoading || !!socialLoading}
                    >
                      {socialLoading === 'github' ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : (
                        <Github className="mr-2 h-4 w-4" />
                      )}
                      Github
                    </Button>
                    <Button
                      variant="outline"
                      className="bg-background hover:bg-muted/50"
                      onClick={() => handleSocialLogin('facebook')}
                      disabled={isLoading || !!socialLoading}
                    >
                      {socialLoading === 'facebook' ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : (
                        <Facebook className="mr-2 h-4 w-4" />
                      )}
                      Facebook
                    </Button>
                    <Button
                      variant="outline"
                      className="bg-background hover:bg-muted/50"
                      onClick={() => handleSocialLogin('email')}
                      disabled={isLoading || !!socialLoading}
                    >
                      {socialLoading === 'email' ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : (
                        <Mail className="mr-2 h-4 w-4" />
                      )}
                      Email
                    </Button>
                  </div>
                </div>
              </form>
            </Form>
          </Card>

          <p className="text-center text-sm text-gray-500">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="text-violet-600 hover:text-violet-700 font-medium"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}