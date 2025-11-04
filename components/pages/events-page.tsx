"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { Calendar, MapPin, Users, X, ChevronLeft, ChevronRight, ArrowRight, Check } from "lucide-react"

// Data remains the same as provided
const events = [
  {
    id: 1,
    title: "INSTALLATION CEREMONY 2025",
    date: "2025-07-27",
    location: "Kalika Manavgyan Secondary School",
    participants: 100,
    image: "/images/installation/img1.jpg",
    description: "Successfully completed installation ceremony marking the start of a new tenure for ICT Club of Kalika",
    details:
      "ICT Club of Kalika has successfully completed its installation ceremony on 27th of July 2025. With this event, it marks the start of a new tenure with fresh leadership and renewed energy to drive technology innovation and digital literacy among students.",
    highlights: [
      "Siddhant Panthi installed as President",
      "Sanjog Pandey appointed as Vice President",
      "Ramit Neupane takes role of Secretary",
      "Shasank Shrestha designated as Treasurer",
      "Bishnu Adhikari appointed as Head of Executive",
      "Nayan Acharya installed as IT Head",
      "Narayan Bhusal takes position of IT Officer",
      "Complete executive committee successfully installed",
    ],
    gallery: [
      "/images/installation/img1.jpg",
      "/images/installation/img2.jpg",
    ],
  },
  {
    id: 2,
    title: "NEW LEADERSHIP BEGINS",
    date: "2025-07-27",
    location: "Kalika Manavgyan Secondary School",
    participants: 100,
    image: "/images/installation/img2.jpg",
    description: "President Siddhant Panthi reveals the Board of Directors for the tenure 2025-26",
    details:
      "Following the successful installation ceremony, President Siddhant Panthi unveiled the complete Board of Directors for ICT Club of Kalika for the academic year 2025-26. The new leadership team brings diverse skills and expertise to drive innovation and digital literacy.",
    highlights: [
      "Siddhant Panthi - President",
      "Sanjog Pandey - Vice President",
      "Ramit Neupane - Secretary",
      "Shasank Shrestha - Treasurer",
      "Bishnu Adhikari - Head of Executive",
      "Nayan Acharya - IT Head",
      "Narayan Bhusal - IT Officer",
      "Nishan Regmi - Media",
      "Sweta Lamsal - Joint Secretary",
      "Aaditya Khanal - Leader of Grade 11",
      "Himanshu Sapkota - Leader of Grade 10",
      "Samriddha Poudel - Leader of Grade 9",
      "Prazwal Roka - Executive Member",
      "Amit Pandey - Executive Member",
      "Raunak Acharya - Executive Member",
      "Aman Pokharel - Executive Member",
      "Nischal Darnal - Executive Member",
      "Anushka Pokhrel - Executive Member",
      "Rabin Chudali - Executive Member",
      "Girija Karki - Executive Member",
      "Sumit Kawar Magar - Executive Member",
      "Anshu Aryal - Executive Member",
      "Susant Gautam - Executive Member",
    ],
    gallery: [
      "/images/installation/img2.jpg",
      "/images/installation/img1.jpg",
    ],
  },
  {
    id: 3,
    title: "IT FEST 2082 - TITLE WINNERS",
    date: "2025-08-29",
    location: "Chitwan",
    participants: 50,
    image: "/images/itfest/img1.jpg",
    description: "ICT Club of Kalika becomes the Title Winner of IT Fest 2082 organized by Interact Club of Valmiki",
    details:
      "ICT Club of Kalika participated in IT Fest 2082, a 3-day event held from August 29-31, 2025, organized by Interact Club of Valmiki in Chitwan. Our talented team showcased exceptional skills and innovation throughout the three days, ultimately winning the championship trophy and being crowned as the Title Winners of the event.",
    highlights: [
      "3-day event: August 29, 30, 31, 2025",
      "ICT Club of Kalika wins the championship",
      "Team showcased exceptional technical skills",
      "Grabbed the trophy as Title Winners",
      "Event organized by Interact Club of Valmiki",
      "Competition held in Chitwan",
      "Proud moment for ICT Club of Kalika",
    ],
    gallery: [
      "/images/itfest/img1.jpg",
      "/images/itfest/img2.jpg",
    ],
  },
]

export default function EventsPageReimagined() {
  const [selectedEvent, setSelectedEvent] = useState<(typeof events)[0] | null>(null)
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0)

  // Get the featured event (we'll use the first one)
  const featuredEvent = events[0]

  const handleOpenModal = (event: (typeof events)[0]) => {
    setSelectedEvent(event)
    setCurrentGalleryImage(0)
  }

  const nextGalleryImage = () => {
    if (selectedEvent) {
      setCurrentGalleryImage((prev) => (prev + 1) % selectedEvent.gallery.length)
    }
  }

  const prevGalleryImage = () => {
    if (selectedEvent) {
      setCurrentGalleryImage((prev) => (prev - 1 + selectedEvent.gallery.length) % selectedEvent.gallery.length)
    }
  }

  return (
    <div className="pt-24 pb-16 bg-zinc-900 text-gray-100">
      {/* Featured Event Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <Image
              src={featuredEvent.image || "/placeholder.svg"}
              alt={featuredEvent.title}
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-2xl shadow-2xl shadow-cyan-900/20"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">
              Featured Event
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white my-4">
              {featuredEvent.title}
            </h1>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-zinc-300 mb-6">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2 text-cyan-400" />
                {new Date(featuredEvent.date).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2 text-cyan-400" />
                {featuredEvent.location}
              </div>
            </div>
            <p className="text-lg text-zinc-300 mb-8 max-w-lg">
              {featuredEvent.description}
            </p>
            <motion.button
              onClick={() => handleOpenModal(featuredEvent)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-zinc-900 font-bold rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/30"
            >
              Read More
              <ArrowRight size={20} className="ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Events Carousel Section */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">All Events</h2>
            <p className="text-lg text-zinc-300 mb-10 max-w-2xl">
              Explore our past workshops, competitions, and ceremonies.
            </p>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="pl-4 sm:pl-6 lg:pl-8"
        >
          <div className="flex overflow-x-auto gap-6 py-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-cyan-700 scrollbar-track-zinc-800">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="snap-start flex-shrink-0 w-80 md:w-96 bg-zinc-800 border border-zinc-700 rounded-xl overflow-hidden shadow-lg transition-all duration-300 group"
              >
                <div className="relative overflow-hidden h-48">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-2 truncate">{event.title}</h3>
                  <div className="flex items-center text-sm text-cyan-400 mb-4">
                    <Calendar size={14} className="mr-1.5" />
                    {new Date(event.date).toLocaleDateString()}
                  </div>
                  <p className="text-zinc-300 text-sm mb-5 line-clamp-2">{event.description}</p>
                  <button
                    onClick={() => handleOpenModal(event)}
                    className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group-hover:underline"
                  >
                    View Details <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                  </button>
              _</div>
              </motion.div>
            ))}
            <div className="flex-shrink-0 w-8 pr-4 sm:pr-6 lg:pr-8"></div> {/* E_nd spacer */}
          </div>
        </motion.div>
      </section>

      {/* Event Detail Modal (Re-skinned) */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedEvent(null)}
          >
  _          <motion.div
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              transition={{ duration: 0.3, ease: "circOut" }}
              className="bg-zinc-900 border border-zinc-700/80 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl shadow-cyan-900/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with Image */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <Image
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent" />
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedEvent(null)}
                  aria-label="Close modal"
                  className="absolute top-4 right-4 z-10 bg-zinc-800/70 hover:bg-zinc-700/90 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <X size={24} />
                </button>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                    {selectedEvent.title}
                  </h2>
                  <div className="flex flex-wrap gap-3 text-sm">
                    <div className="flex items-center text-cyan-300 bg-cyan-900/50 backdrop-blur-sm px-3 py-1.5 rounded-full font-medium">
                      <Calendar size={14} className="mr-2" />
                      {new Date(selectedEvent.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center text-cyan-300 bg-cyan-900/50 backdrop-blur-sm px-3 py-1.5 rounded-full font-medium">
                      <MapPin size={14} className="mr-2" />
                      {selectedEvent.location}
                    </div>
                    <div className="flex items-center text-cyan-300 bg-cyan-900/50 backdrop-blur-sm px-3 py-1.5 rounded-full font-medium">
                      <Users size={14} className="mr-2" />
                      {selectedEvent.participants} participants
                    </div>
        _          </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="overflow-y-auto max-h-[calc(90vh-20rem)] md:max-h-[calc(90vh-22rem)] scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-800">
                <div className="p-6 md:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Description & Highlights */}
                    <div className="lg:col-span-2 space-y-8">
                      {/* Description */}
                      <div>
                        <h3 className="text-xl font-bold text-cyan-400 mb-4 border-l-4 border-cyan-500 pl-3">
                          Event Details
                        </h3>
                        <p className="text-zinc-300 leading-relaxed text-base prose-invert max-w-none">
                          {selectedEvent.details}
                        </p>
                      </div>

                      {/* Highlights */}
                      <div>
                        <h3 className="text-xl font-bold text-cyan-400 mb-5 border-l-4 border-cyan-500 pl-3">
                          Key Highlights
                        </h3>
          _            <div className="grid gap-3">
                          {selectedEvent.highlights.map((highlight, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                      _      transition={{ delay: index * 0.05 }}
                              className="flex items-start bg-zinc-800/60 border border-zinc-700/70 rounded-lg p-3.5"
                            >
                              <Check className="text-cyan-400 mr-3 mt-0.5 flex-shrink-0" size={18} />
                              <span className="text-zinc-300 text-sm">{highlight}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                  _</div>

                    {/* Right Column - Gallery */}
                    <div className="lg:col-span-1">
                      <h3 className="text-xl font-bold text-cyan-400 mb-5 border-l-4 border-cyan-500 pl-3">
                        Gallery
                      </h3>
                      <div className="space-y-4">
                        <div className="relative rounded-lg overflow-hidden border border-zinc-700/80 shadow-lg">
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={currentGalleryImage}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Image
                                src={selectedEvent.gallery[currentGalleryImage] || "/placeholder.svg"}
                                alt={`${selectedEvent.title} gallery ${currentGalleryImage + 1}`}
                            	_ width={400}
                  _             height={300}
                                className="w-full h-64 object-cover"
                              />
                	          </motion.div>
                          </AnimatePresence>

                          {selectedEvent.gallery.length > 1 && (
                            <>
                              <button
                                onClick={prevGalleryImage}
                                aria-label="Previous image"
                                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-zinc-800/70 hover:bg-zinc-700/90 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
                              >
                -----------------      <ChevronLeft size={20} />
                              </button>
                              <button
                                onClick={nextGalleryImage}
                                aria-label="Next image"
          _                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-zinc-800/70 hover:bg-zinc-700/90 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
                              >
                                <ChevronRight size={20} />
                              </button>
                            </>
                          )}

                          {/* Image Counter */}
                          <div className="absolute bottom-3 right-3 bg-zinc-900/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                    _        {currentGalleryImage + 1} / {selectedEvent.gallery.length}
                          </div>
                      A_ </div>

-----------------            {/* Gallery Thumbnails */}
                        {selectedEvent.gallery.length > 1 && (
                          <div className="grid grid-cols-4 gap-2.5">
                s            {selectedEvent.gallery.map((img, index) => (
                              <button
                                key={index}
                                onClick={() => setCurrentGalleryImage(index)}
                                aria-label={`View image ${index + 1}`}
                                className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                                  index === currentGalleryImage 
                                    ? "border-cyan-500" 
                                    : "border-zinc-700/60 opacity-60 hover:opacity-100 hover:border-zinc-500"
s                              }`}
                              >
-----------------                <Image
                                  src={img}
                                  alt={`Thumbnail ${index + 1}`}
                                  fill
                                  className="object-cover"
A                              />
                              </button>
                            ))}
                          </div>
s                      )}
  s                  </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
  s      )}
      </AnimatePresence>
s  </div>
  )
}
