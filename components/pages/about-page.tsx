"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Users, Target, Eye, Award } from "lucide-react"
import AdSenseAd from "@/components/ui/adsense-ad"

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Banner Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/ictkalikaabout.png" alt="ICT Club Banner" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 glow-text">About Us</h1>
            <p className="text-xl md:text-2xl text-[#9bd3ff] max-w-2xl mx-auto">
              Innovating the future through technology and collaboration
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-lg text-gray-300 leading-relaxed"
          >
            <div className="card-glow rounded-xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6 glow-text">Our Story</h2>
              <p className="mb-6">
                The ICT Club of ICT Kalika is a vibrant community of technology enthusiasts, innovators, and future
                leaders. Established in 2079, we have been at the forefront of technological advancement in our
                institution, fostering a culture of learning, innovation, and collaboration.
              </p>
              <p className="mb-6">
                Our journey began with a simple vision: to create a platform where students could explore, learn, and
                excel in various fields of Information and Communication Technology. What started as a small group of
                passionate individuals has now grown into a thriving community that impacts hundreds of students.
              </p>
              <p>
                From organizing workshops and seminars to participating in competitions and developing real-world
                projects, we are committed to bridging the gap between theoretical knowledge and practical application.
                Our club serves as a catalyst for technological innovation and personal growth.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 glow-text">Our Foundation</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide our journey and shape our impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card-glow rounded-xl p-8 text-center"
            >
              <Target className="w-12 h-12 text-[#5bbcff] mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To foster innovation, inspire creativity, and create a lasting impact through technology. We provide a
                platform for students to explore, learn, and excel in various fields of ICT while building a strong
                community of tech enthusiasts.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-glow rounded-xl p-8 text-center"
            >
              <Eye className="w-12 h-12 text-[#5bbcff] mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To be the leading technology club that empowers students to become innovative leaders in the digital
                world. We envision a future where our members contribute significantly to Nepal's technological
                advancement and global tech community.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card-glow rounded-xl p-8 text-center"
            >
              <Award className="w-12 h-12 text-[#5bbcff] mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
              <p className="text-gray-300 leading-relaxed">
                Innovation, collaboration, excellence, and inclusivity. We believe in continuous learning, ethical
                technology use, and creating opportunities for all students regardless of their background or current
                skill level.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 glow-text">What We Do</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover the various activities and programs that make our club unique
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Workshops & Training",
                description:
                  "Regular workshops on programming languages, web development, AI/ML, and emerging technologies",
                icon: "🎓",
              },
              {
                title: "Competitions & Hackathons",
                description: "Organizing and participating in coding competitions, hackathons, and tech challenges",
                icon: "🏆",
              },
              {
                title: "Project Development",
                description: "Collaborative projects that solve real-world problems and build practical skills",
                icon: "💻",
              },
              {
                title: "Industry Connections",
                description: "Networking events with industry professionals and guest lectures from tech experts",
                icon: "🤝",
              },
              {
                title: "Research & Innovation",
                description: "Supporting student research projects and encouraging innovative thinking",
                icon: "🔬",
              },
              {
                title: "Community Outreach",
                description: "Tech awareness programs and digital literacy initiatives in the community",
                icon: "🌍",
              },
            ].map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-glow rounded-xl p-6 text-center transition-all duration-300"
              >
                <div className="text-4xl mb-4">{activity.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{activity.title}</h3>
                <p className="text-gray-300">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AdSense Ad - After About Content */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <AdSenseAd 
              adSlot="3254228805" 
              responsive={true}
              className="rounded-lg overflow-hidden"
            />
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">`
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="card-glow rounded-xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 glow-text">Join Our Journey</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Ready to be part of something bigger? Explore our team, discover upcoming events, and see how you can
              contribute to our mission of technological innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/team"
                className="bg-[#5bbcff] hover:bg-[#4aa3e6] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 glow-button flex items-center justify-center"
              >
                <Users className="mr-2" size={20} />
                Meet Our Team
              </Link>
              <Link
                href="/events"
                className="border-2 border-[#9bd3ff] text-[#9bd3ff] hover:bg-[#9bd3ff] hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 glow-button"
              >
                Explore Events
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
