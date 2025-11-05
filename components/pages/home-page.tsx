"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Users, Trophy } from "lucide-react"
import { useTeam } from "@/contexts/TeamContext"
import AdSenseAd from "@/components/ui/adsense-ad"
import React from "react"

const recentProjects = [
 
]

export default function HomePage() {  
  const { boardMembers, members, advisors, loading } = useTeam();
  
  // Calculate dynamic stats based on actual team data
  const totalMembers = boardMembers.length + members.length + advisors.length;
  
  const stats = [
    { icon: Users, label: "Active Members", value: loading ? "Loading..." : `${totalMembers}+` },
    { icon: Calendar, label: "Events Held", value: "50+" },
    { icon: Trophy, label: "Students Impacted", value: "500+" },
  ]  
  return (
    <>
      {/* AMP ad script injection */}
      <script
        async
        custom-element="amp-ad"
        src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"
      />
      {/* AMP ad markup injection */}
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <amp-ad width="100vw" height="320"
              type="adsense"
              data-ad-client="ca-pub-7528456570041321"
              data-ad-slot="9767595606"
              data-auto-format="rspv"
              data-full-width="">
              <div overflow=""></div>
            </amp-ad>
          `,
        }}
      />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-10"
            >
              <Image
                src="/logo.png"
                alt="ICT Club Logo"
                width={180}
                height={180}
                className="mx-auto glow-border rounded-full"
              />
            </motion.div>

            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 glow-text"
            >
              ICT Club of Kalika
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-[#9bd3ff] mb-8 font-light"
            >
              Innovate. Inspire. Impact.
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="https://membership.ictkalika.tech"
                className="bg-[#5bbcff] hover:bg-[#4aa3e6] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 glow-button flex items-center justify-center"
              >
                Join the Club
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                href="/events"
                className="border-2 border-[#9bd3ff] text-[#9bd3ff] hover:bg-[#9bd3ff] hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 glow-button"
              >
                Explore Events
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center card-glow rounded-xl p-8 transition-all duration-300"
                >
                  <stat.icon className="w-12 h-12 text-[#9bd3ff] mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-gray-300">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Ad Section */}
        <section className="py-10 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AdSenseAd 
              adSlot="9767595606" 
              responsive={true}
              className="my-8"
            />
          </div>
        </section>

        {/* Recent Projects Section 
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 glow-text">Recent Projects & Events</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Discover our latest initiatives and upcoming events that shape the future of technology
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recentProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="card-glow rounded-xl overflow-hidden transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex items-center text-[#9bd3ff] text-sm">
                      <Calendar size={16} className="mr-2" />
                      {new Date(project.date).toLocaleDateString()}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        */}
      </div>
    </>
  )
}
