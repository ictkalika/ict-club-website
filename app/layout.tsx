import type React from "react"
import ClientLayout from "./clientLayout"
import './globals.css'

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 5.0,
  userScalable: true,
}

export const metadata = {
  title: {
    default: 'ICT Club of Kalika - Student led IT Club',
    template: '%s | ICT Club of Kalika'

  },
  description: 'Innovate • Educate • Inspire. Founded in 2022 at Kalika Manavgyan Secondary School, ICT Club of Kalika is a vibrant community of students passionate about technology. We empower youth through hands-on workshops, tech projects, and collaborative events—promoting digital literacy, coding, robotics, and ICT innovations.',
  keywords: [
    'ICT Club Kalika',
    'Kalika Manavgyan Secondary School',
    'Student Technology Club',
    'Digital Literacy Nepal',
    'Coding Workshop',
    'Robotics Club',
    'Programming Community',
    'Tech Projects Nepal',
    'Student ICT Innovation',
    'Technology Education',
    'Youth Tech Community',
    'School Technology Club',
    'Nepal ICT',
    'Tech Events Nepal',
    'Coding Community'
  ].join(', '),
  
  authors: [{ name: 'ICT Club of Kalika', url: 'https://ictkalika.tech' }],
  creator: 'ICT Club of Kalika',
  publisher: 'ICT Club of Kalika',
  metadataBase: new URL('https://ictkalika.tech'),
  alternates: {
    canonical: 'https://ictkalika.tech',
  },
  other: {
   
  },
  openGraph: {
    title: 'ICT Club of Kalika - Student led IT Club',
    description: 'Founded in 2022 at Kalika Manavgyan Secondary School, ICT Club of Kalika is a vibrant community of students passionate about technology. We empower youth through hands-on workshops, tech projects, and collaborative events—promoting digital literacy, coding, robotics, and ICT innovations.',
    url: 'https://ictkalika.tech',
    siteName: 'ICT Club of Kalika',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'ICT Club of Kalika - Student led IT Club',
      },
      {
        url: '/images/logo.png',
        width: 800,
        height: 600,
        alt: 'ICT Club of Kalika Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ICT Club of Kalika - Student led IT Club',
    description: 'Founded in 2022 at Kalika Manavgyan Secondary School, ICT Club of Kalika is a vibrant community of students passionate about technology promoting digital literacy, coding, robotics, and ICT innovations.',
    images: ['/images/logo.png'],
    creator: '@ictkalika',
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
 
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
   
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}
