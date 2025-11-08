import EventsPage from "@/components/pages/events-page"
import { Metadata } from "next"
import { 
  DIGITAL_HORIZON_SCHEMA, 
  DIGITAL_HORIZON_PALPA_SCHEMA,
  INSTALLATION_CEREMONY_SCHEMA, 
  IT_FEST_SCHEMA 
} from "@/lib/event-schema"

export const metadata: Metadata = {
  title: "Events - ICT Club of Kalika",
  description: "Discover upcoming and past events by ICT Club of Kalika. Join our tech workshops, coding bootcamps, AI seminars, and innovation competitions. Stay updated with Nepal's premier technology events and networking opportunities.",
  keywords: "ICT Club Events, Technology Workshops Nepal, Coding Bootcamp, AI Workshop Series, Tech Events Kalika, Programming Competition, Innovation Events, Tech Seminars Nepal, Technology Conferences",
  openGraph: {
    title: "Tech Events & Workshops - ICT Club of Kalika",
    description: "Join ICT Club of Kalika's exciting tech events, workshops, and competitions. Connect with Nepal's tech community through our innovative programs.",
    url: "https://ictkalika.tech/events",
    type: "website",
    images: [
      {
        url: "/images/ictkalika-logo.png",
        width: 1200,
        height: 630,
        alt: "ICT Club of Kalika Events",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Events & Workshops - ICT Club of Kalika",
    description: "Join our exciting tech events, workshops, and competitions in Nepal's premier technology community.",
  },
  alternates: {
    canonical: "https://ictkalika.tech/events",
  },
}

export default function Events() {
  return (
    <>
      {/* Breadcrumb Schema for Navigation */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://ictkalika.tech"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Events",
                "item": "https://ictkalika.tech/events"
              }
            ]
          })
        }}
      />
      
      {/* Event Series Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EventSeries",
            "name": "ICT Club of Kalika Events",
            "description": "Regular technology events, workshops, and competitions organized by ICT Club of Kalika",
            "organizer": {
              "@type": "Organization",
              "name": "ICT Club of Kalika",
              "url": "https://ictkalika.tech"
            },
            "url": "https://ictkalika.tech/events",
            "location": {
              "@type": "Place",
              "name": "Kalika",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Nepal",
                "addressLocality": "Kalika"
              }
            },
            "about": [
              "Technology Workshops",
              "Programming Competitions",
              "AI and Machine Learning",
              "Web Development",
              "Innovation Challenges"
            ]
          })
        }}
      />
      
      {/* Digital Horizon Event Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(DIGITAL_HORIZON_SCHEMA)
        }}
      />
      
      {/* Digital Horizon Palpa Event Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(DIGITAL_HORIZON_PALPA_SCHEMA)
        }}
      />
      
      {/* Installation Ceremony Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(INSTALLATION_CEREMONY_SCHEMA)
        }}
      />
      
      {/* IT Fest Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(IT_FEST_SCHEMA)
        }}
      />
      
      <EventsPage />
    </>
  )
}
  