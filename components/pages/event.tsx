"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Calendar, MapPin, Users, X, ChevronLeft, ChevronRight } from "lucide-react"

const slideshowImages = [
  {
    src: "/images/installation/img1.jpg",
    title: "INSTALLATION CEREMONY 2025",
    description: "Successfully completed on 27th July 2025 - Marking the start of a new tenure",
    eventId: 1,
  },
   {
    src: "/images/installation/img2.jpg",
    title: "NEW LEADERSHIP BEGINS",
    description: "Siddhant Panthi Revealed his Board of Directors for 2025-26",
    eventId: 2,
  },
  {
    src: "/images/itfest/img1.jpg",
    title: "IT FEST 2082 - TITLE WINNERS",
    description: "ICT Club of Kalika wins the championship at IT Fest organized by Interact Club of Valmiki",
    eventId: 3,
  },
]

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

export default function EventsPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedEvent, setSelectedEvent] = useState<(typeof events)[0] | null>(null)
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-advance slideshow every 5 seconds
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isPaused])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideshowImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length)
  }

  const handleSlideshowClick = () => {
    const currentSlideImage = slideshowImages[currentSlide]
    if (currentSlideImage.eventId) {
      const event = events.find(e => e.id === currentSlideImage.eventId)
      if (event) {
        setSelectedEvent(event)
        setCurrentGalleryImage(0)
      }
    }
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
    <div className="pt-16">
      {/* Slideshow Section */}
      <section 
        className="relative h-screen overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 cursor-pointer"
            onClick={handleSlideshowClick}
          >
            <Image
              src={slideshowImages[currentSlide].src || "/placeholder.svg"}
              alt={slideshowImages[currentSlide].title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent hover:from-black/70 hover:via-black/30 transition-all duration-300" />
          </motion.div>
        </AnimatePresence>

        {/* Slideshow Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 glow-button z-10"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 glow-button z-10"
        >
          <ChevronRight size={24} />
        </button>

        {/* Slideshow Content */}
        <div 
          className="absolute bottom-0 left-0 right-0 p-8 md:p-16 cursor-pointer"
          onClick={handleSlideshowClick}
        >
          <motion.div
            key={currentSlide}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 glow-text hover:text-[#9bd3ff] transition-colors duration-300">
              {slideshowImages[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl hover:text-white transition-colors duration-300">
              {slideshowImages[currentSlide].description}
            </p>
            <p className="text-sm text-[#9bd3ff] mt-2 font-medium">
              Click to view event details →
            </p>
          </motion.div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slideshowImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-[#9bd3ff] glow-border" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Events Carousel Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 glow-text"> Events</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join us for exciting events, workshops, and competitions throughout the year
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-glow rounded-xl overflow-hidden cursor-pointer transition-all duration-300 group"
                onClick={() => {
                  setSelectedEvent(event)
                  setCurrentGalleryImage(0)
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{event.description}</p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-[#9bd3ff]">
                      <Calendar size={16} className="mr-2" />
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-[#9bd3ff]">
                      <MapPin size={16} className="mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-[#9bd3ff]">
                      <Users size={16} className="mr-2" />
                      {event.participants} participants
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Detail Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="card-glow rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-300"
              >
                <X size={20} />
              </button>

              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Event Details */}
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-4 glow-text">{selectedEvent.title}</h2>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-[#9bd3ff]">
                        <Calendar size={18} className="mr-3" />
                        {new Date(selectedEvent.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-[#9bd3ff]">
                        <MapPin size={18} className="mr-3" />
                        {selectedEvent.location}
                      </div>
                      <div className="flex items-center text-[#9bd3ff]">
                        <Users size={18} className="mr-3" />
                        {selectedEvent.participants} participants
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">{selectedEvent.details}</p>

                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Key Highlights</h3>
                      <ul className="space-y-2">
                        {selectedEvent.highlights.map((highlight, index) => (
                          <li key={index} className="text-gray-300 flex items-start">
                            <span className="text-[#9bd3ff] mr-2">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Image Gallery */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Event Gallery</h3>
                    <div className="relative">
                      <Image
                        src={selectedEvent.gallery[currentGalleryImage] || "/placeholder.svg"}
                        alt={`${selectedEvent.title} gallery ${currentGalleryImage + 1}`}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover rounded-lg glow-border"
                      />

                      {selectedEvent.gallery.length > 1 && (
                        <>
                          <button
                            onClick={prevGalleryImage}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-300"
                          >
                            <ChevronLeft size={16} />
                          </button>
                          <button
                            onClick={nextGalleryImage}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-300"
                          >
                            <ChevronRight size={16} />
                          </button>
                        </>
                      )}
                    </div>

                    {selectedEvent.gallery.length > 1 && (
                      <div className="flex justify-center mt-4 space-x-2">
                        {selectedEvent.gallery.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentGalleryImage(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              index === currentGalleryImage ? "bg-[#9bd3ff]" : "bg-white/30"
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
