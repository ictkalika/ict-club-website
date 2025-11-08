"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Mail, Users, Award, Briefcase, GraduationCap } from "lucide-react"

const partnershipStats = [
  { icon: Users, label: "Students", value: "7000+" },
  { icon: Award, label: "Years of Excellence", value: "50+" },
  { icon: Briefcase, label: "Alumni Success", value: "100%" },
  { icon: GraduationCap, label: "Academic Programs", value: "10+" },
]

export default function PartnersPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 glow-text">Our Partners</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Building bridges between education and industry through strategic partnerships that empower our members
              with real-world experience, cutting-edge resources, and career opportunities.
            </p>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#5bbcff] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#9bd3ff] rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Main Partner Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="card-glow rounded-xl p-12 text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="bg-white/10 rounded-lg p-8 mb-6 mx-auto w-fit">
                <Image
                  src="/images/kalika-logo.png"
                  alt="KALIKA MANAVGYAN SECONDARY SCHOOL Logo"
                  width={200}
                  height={200}
                  className="h-40 w-auto object-contain"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 glow-text">
                KALIKA MANAVGYAN SECONDARY SCHOOL
              </h2>
              <div className="text-[#5bbcff] font-medium mb-6">FOUNDING PARTNER</div>
              <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
                Our founding institution providing educational excellence and innovative learning solutions. KALIKA
                MANAVGYAN SECONDARY SCHOOL has been instrumental in establishing and supporting the ICT Club, providing
                resources, guidance, and opportunities for students to excel in the field of information and
                communication technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
            >
              {partnershipStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="text-center"
                >
                  <stat.icon className="w-8 h-8 text-[#5bbcff] mx-auto mb-3" />
                  <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                  <p className="text-gray-300 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12"
            >
              <a
                href="https://kalikaschoolbtl.edu.np"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#5bbcff] hover:bg-[#4aa3e6] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 glow-button"
              >
                <ExternalLink className="mr-2" size={20} />
                Visit School Website
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 glow-text">Partnership Benefits</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              How our partnership with KALIKA MANAVGYAN SECONDARY SCHOOL benefits our members
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "State-of-the-Art Facilities",
                description:
                  "Access to computer labs, high-speed internet, and modern technology equipment for hands-on learning and project development.",
                icon: "🖥️",
              },
              {
                title: "Expert Guidance",
                description:
                  "Mentorship from experienced faculty members with expertise in various fields of information and communication technology.",
                icon: "👨‍🏫",
              },
              {
                title: "Academic Integration",
                description:
                  "Seamless integration of club activities with academic curriculum, providing practical application of classroom learning.",
                icon: "📚",
              },
              {
                title: "Resource Support",
                description:
                  "Financial and logistical support for organizing events, workshops, competitions, and other club activities.",
                icon: "💰",
              },
              {
                title: "Community Engagement",
                description:
                  "Opportunities to engage with the wider school community and showcase technological innovations and achievements.",
                icon: "🤝",
              },
              {
                title: "Career Development",
                description:
                  "Career counseling, college application support, and connections to alumni network for future academic and professional growth.",
                icon: "🚀",
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-glow rounded-xl p-8 text-center transition-all duration-300"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="card-glow rounded-xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 glow-text">Become Our Partner</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Interested in partnering with the ICT Club? We welcome collaborations with educational institutions,
              technology companies, and organizations that share our vision of empowering students through technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:ictkalika82@gmail.com?subject=Partnership Inquiry"
                className="bg-[#5bbcff] hover:bg-[#4aa3e6] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 glow-button flex items-center justify-center"
              >
                <Mail className="mr-2" size={20} />
                Contact Us
              </a>
              <a
                href="/about"
                className="border-2 border-[#9bd3ff] text-[#9bd3ff] hover:bg-[#9bd3ff] hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 glow-button"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

