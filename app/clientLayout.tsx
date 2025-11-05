"use client"

import type React from "react"
import { Montserrat } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import ParticleBackground from "@/components/ui/particle-background"
import LoadingScreen from "@/components/ui/loading-screen"
import { TeamProvider } from "@/contexts/TeamContext"
import { useState, useEffect } from "react"

const montserrat = Montserrat({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Simulate loading time for initial page load
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleLoadingComplete = () => {
    setShowContent(true)
  }

  return (
    <html lang="en">
      <head>
        <title>ICT Club of Kalika</title>
        <meta name="description" content="Innovate. Inspire. Impact." />
      </head>
      <body className={montserrat.className}>
        <TeamProvider>
          <LoadingScreen isLoading={isLoading} onComplete={handleLoadingComplete} />

          {(showContent || !isLoading) && (
            <div className="min-h-screen bg-gradient-to-br from-[#041f66] via-[#0a2c7a] to-[#122d91] relative overflow-x-hidden">
              <ParticleBackground />
              <Navbar />
              <main className="relative z-10">{children}</main>
              <Footer />
            </div>
          )}
        </TeamProvider>
      </body>
    </html>
  )
}
