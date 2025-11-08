

"use client"

import { motion } from "framer-motion"
import { Mail } from "lucide-react"

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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 glow-text">Partnership Opportunities</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We are actively seeking partnerships with educational institutions, technology companies, and organizations 
              that share our vision of empowering students through technology and innovation.
            </p>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#5bbcff] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#9bd3ff] rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Seeking Partners Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="card-glow rounded-xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 glow-text">We're Seeking Partners!</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              The ICT Club is looking for visionary partners who want to invest in the future of technology education. 
              Whether you're an educational institution, tech company, startup, or organization passionate about 
              empowering students, we'd love to hear from you.
            </p>
            
            <div className="bg-white/5 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-[#5bbcff] mb-4">Why Partner With Us?</h3>
              <ul className="text-gray-300 space-y-2 text-left max-w-2xl mx-auto list-disc list-inside">
                <li>Connect with talented and motivated students passionate about technology</li>
                <li>Contribute to shaping the next generation of tech professionals</li>
                <li>Build meaningful relationships with an active tech community</li>
                <li>Gain visibility and recognition among students and educators</li>
                <li>Collaborate on innovative projects and initiatives</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:ictkalika82@gmail.com?subject=Partnership Inquiry"
                className="bg-[#5bbcff] hover:bg-[#4aa3e6] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 glow-button flex items-center justify-center"
              >
                <Mail className="mr-2" size={20} />
                Get in Touch
              </a>
              <a
                href="/about"
                className="border-2 border-[#9bd3ff] text-[#9bd3ff] hover:bg-[#9bd3ff] hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 glow-button"
              >
                Learn About Us
              </a>
            </div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 glow-text">What We Offer Partners</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Benefits and opportunities for organizations that partner with the ICT Club
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Talented Student Network",
                description:
                  "Access to a community of motivated students passionate about technology, innovation, and continuous learning.",
                icon: "�",
              },
              {
                title: "Brand Visibility",
                description:
                  "Showcase your brand at our events, workshops, and online platforms reaching hundreds of students and educators.",
                icon: "�",
              },
              {
                title: "Collaborative Projects",
                description:
                  "Opportunity to collaborate on real-world projects, hackathons, and innovation challenges with our members.",
                icon: "🤝",
              },
              {
                title: "Talent Pipeline",
                description:
                  "Early access to emerging talent for internships, mentorship programs, and future recruitment opportunities.",
                icon: "🎯",
              },
              {
                title: "Event Sponsorship",
                description:
                  "Sponsor our flagship events like Digital Horizon, IT Fest, and workshops to reach our engaged community.",
                icon: "🎪",
              },
              {
                title: "Knowledge Exchange",
                description:
                  "Share expertise through guest lectures, workshops, and mentorship programs while learning from fresh perspectives.",
                icon: "�",
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 glow-text">Ready to Partner?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              If you're interested in partnering with the ICT Club and supporting the next generation of tech innovators, 
              we'd love to hear from you. Contact us at <span className="text-[#5bbcff] font-semibold">ictkalika82@gmail.com</span> to 
              discuss partnership opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:ictkalika82@gmail.com?subject=Partnership Inquiry"
                className="bg-[#5bbcff] hover:bg-[#4aa3e6] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 glow-button flex items-center justify-center"
              >
                <Mail className="mr-2" size={20} />
                Email Us Now
              </a>
              <a
                href="/about"
                className="border-2 border-[#9bd3ff] text-[#9bd3ff] hover:bg-[#9bd3ff] hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 glow-button"
              >
                Learn More About ICT Club
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
