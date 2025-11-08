// Event Schema for SEO - generates structured data for each event

export function generateEventSchema(event: {
  id: number
  title: string
  date: string
  location: string
  participants: number
  image: string
  description: string
  details: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    "@id": `https://ictkalika.tech/events#event-${event.id}`,
    "name": event.title,
    "description": event.description,
    "startDate": event.date,
    "endDate": event.date,
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": event.location,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": event.location,
        "addressCountry": "Nepal"
      }
    },
    "image": [
      event.image
    ],
    "organizer": {
      "@type": "Organization",
      "name": "ICT Club of Kalika",
      "url": "https://ictkalika.tech",
      "logo": "https://ictkalika.tech/images/logo.png",
      "sameAs": [
        "https://www.facebook.com/ictkalika",
        "https://www.instagram.com/ictkalika",
        "https://github.com/ICTKalika"
      ]
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "NPR",
      "availability": "https://schema.org/InStock",
      "url": `https://ictkalika.tech/events#event-${event.id}`,
      "validFrom": event.date
    },
    "performer": {
      "@type": "Organization",
      "name": "ICT Club of Kalika"
    },
    "attendee": {
      "@type": "Organization",
      "name": "Students and Tech Enthusiasts"
    }
  }
}

// Generate schemas for all events
export function generateAllEventsSchema(events: any[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": events.map((event, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": generateEventSchema(event)
    }))
  }
}

// Specific event schemas with more details
export const DIGITAL_HORIZON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Event",
  "@id": "https://ictkalika.tech/events#digital-horizon-2025",
  "name": "Digital Horizon - A Step Towards Digital Nepal",
  "description": "3-day mentorship program empowering students with technology knowledge - Presidential Plan of Action",
  "startDate": "2025-11-06",
  "endDate": "2025-11-08",
  "duration": "P3D",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": {
    "@type": "Place",
    "name": "Gainchaur Academy",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Syangja",
      "addressRegion": "Gandaki Province",
      "addressCountry": "Nepal"
    }
  },
  "organizer": {
    "@type": "Organization",
    "name": "ICT Club of Kalika",
    "url": "https://ictkalika.tech",
    "description": "Student-led technology club promoting digital literacy",
    "sameAs": [
      "https://www.facebook.com/ictkalika",
      "https://www.instagram.com/ictkalika",
      "https://github.com/ICTKalika"
    ]
  },
  "performer": {
    "@type": "Organization",
    "name": "ICT Club of Kalika Team"
  },
  "about": [
    {
      "@type": "Thing",
      "name": "Computer Basics"
    },
    {
      "@type": "Thing",
      "name": "Cyber Crime Awareness"
    },
    {
      "@type": "Thing",
      "name": "Internet and Web Development"
    },
    {
      "@type": "Thing",
      "name": "Contemporary Technology"
    },
    {
      "@type": "Thing",
      "name": "Artificial Intelligence"
    }
  ],
  "audience": {
    "@type": "EducationalAudience",
    "educationalRole": "student",
    "audienceType": "High School Students"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "NPR",
    "availability": "https://schema.org/InStock"
  },
  "isAccessibleForFree": true,
  "inLanguage": "en",
  "maximumAttendeeCapacity": 150
}

export const INSTALLATION_CEREMONY_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Event",
  "@id": "https://ictkalika.tech/events#installation-ceremony-2025",
  "name": "Installation Ceremony 2025",
  "description": "Successfully completed installation ceremony marking the start of a new tenure for ICT Club of Kalika",
  "startDate": "2025-07-27",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": {
    "@type": "EducationalOrganization",
    "name": "Kalika Manavgyan Secondary School",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kalika",
      "addressCountry": "Nepal"
    }
  },
  "organizer": {
    "@type": "Organization",
    "name": "ICT Club of Kalika",
    "url": "https://ictkalika.tech",
    "sameAs": [
      "https://www.facebook.com/ictkalika",
      "https://www.instagram.com/ictkalika",
      "https://github.com/ICTKalika"
    ]
  },
  "isAccessibleForFree": true,
  "maximumAttendeeCapacity": 100
}

export const IT_FEST_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Event",
  "@id": "https://ictkalika.tech/events#it-fest-2082",
  "name": "IT Fest 2082 - Title Winners",
  "description": "ICT Club of Kalika becomes the Title Winner of IT Fest 2082 organized by Interact Club of Valmiki",
  "startDate": "2025-08-29",
  "endDate": "2025-08-31",
  "duration": "P3D",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": {
    "@type": "Place",
    "name": "Chitwan",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chitwan",
      "addressCountry": "Nepal"
    }
  },
  "organizer": {
    "@type": "Organization",
    "name": "Interact Club of Valmiki"
  },
  "winner": {
    "@type": "Organization",
    "name": "ICT Club of Kalika",
    "url": "https://ictkalika.tech",
    "award": "IT Fest 2082 Champions"
  },
  "competitor": {
    "@type": "Organization",
    "name": "ICT Club of Kalika"
  },
  "award": " Tittle Winner - IT Fest 2082",
  "maximumAttendeeCapacity": 50
}

export const DIGITAL_HORIZON_PALPA_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Event",
  "@id": "https://ictkalika.tech/events#digital-horizon-palpa-2082",
  "name": "Digital Horizon - Palpa Edition",
  "description": "3-day mentorship program bringing digital literacy to Palpa - Presidential Plan of Action",
  "startDate": "2025-10-15",
  "endDate": "2025-10-17",
  "duration": "P3D",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": {
    "@type": "Place",
    "name": "Gejha Sunrise Academy",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Palpa",
      "addressRegion": "Lumbini Province",
      "addressCountry": "Nepal"
    }
  },
  "organizer": {
    "@type": "Organization",
    "name": "ICT Club of Kalika",
    "url": "https://ictkalika.tech",
    "description": "Student-led technology club promoting digital literacy",
    "sameAs": [
      "https://www.facebook.com/ictkalika",
      "https://www.instagram.com/ictkalika",
      "https://github.com/ICTKalika"
    ]
  },
  "performer": {
    "@type": "Organization",
    "name": "ICT Club of Kalika Team"
  },
  "about": [
    {
      "@type": "Thing",
      "name": "Computer Basics"
    },
    {
      "@type": "Thing",
      "name": "Cyber Crime Awareness"
    },
    {
      "@type": "Thing",
      "name": "Internet and Web Development"
    },
    {
      "@type": "Thing",
      "name": "Contemporary Technology"
    },
    {
      "@type": "Thing",
      "name": "Artificial Intelligence"
    }
  ],
  "audience": {
    "@type": "EducationalAudience",
    "educationalRole": "student",
    "audienceType": "High School Students"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "NPR",
    "availability": "https://schema.org/InStock"
  },
  "isAccessibleForFree": true,
  "inLanguage": "en",
  "maximumAttendeeCapacity": 120,
  "keywords": "Digital Horizon, Palpa, Digital Nepal, Presidential Plan of Action, Technology Education, Mentorship Program"
}
