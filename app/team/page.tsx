import TeamPage from "@/components/pages/team-page"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Team - ICT Club of Kalika Leadership",
  description: "Meet the passionate leaders and members of ICT Club of Kalika. Our diverse team of technology enthusiasts, including Siddhant Panthi (President), Sanjog Pandey (Vice President), and Nayan Acharya (IT Head), drives innovation and excellence in Nepal's tech community.",
  keywords: "ICT Club Kalika Team, Siddhant Panthi President, Sanjog Pandey Vice President, Nayan Acharya IT Head, Technology Leaders Nepal, ICT Club Leadership, Tech Team Nepal, Programming Team, Innovation Leaders",
  openGraph: {
    title: "Meet Our Team - ICT Club of Kalika Leadership",
    description: "Meet the passionate leaders driving innovation at ICT Club of Kalika. Our diverse team of technology enthusiasts leads Nepal's premier tech community.",
    url: "https://ictkalika.tech/team",
    type: "website",
    images: [
      {
        url: "/images/nayan-acharya.jpg",
        width: 1200,
        height: 630,
        alt: "ICT Club of Kalika Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Our Team - ICT Club of Kalika Leadership",
    description: "Meet the passionate leaders driving innovation at ICT Club of Kalika.",
  },
  alternates: {
    canonical: "https://ictkalika.tech/team",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function Team() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ICT Club of Kalika",
            "url": "https://ictkalika.tech",
            "employee": [
              {
                "@type": "Person",
                "name": "Siddhant Panthi",
                "jobTitle": "President",
                "description": "Leading the club with passion for technology and innovation, specializing in Leadership, Web Development, and Project Management.",
                "url": "https://ictkalika.tech/team",
                "worksFor": {
                  "@type": "Organization",
                  "name": "ICT Club of Kalika"
                },
                "sameAs": [
                  "https://linkedin.com/in/siddhantpanthi",
                  "https://github.com/siddhantpanthi",
                  "https://instagram.com/siddu.psd"
                ],
                "knowsAbout": ["Leadership", "Web Development", "Project Management", "Graphics Designing"]
              },
              {
                "@type": "Person",
                "name": "Sanjog Pandey",
                "jobTitle": "Vice President",
                "description": "Coordinating events and fostering collaboration among members, with expertise in Event Management and UI/UX Design.",
                "url": "https://ictkalika.tech/team",
                "worksFor": {
                  "@type": "Organization",
                  "name": "ICT Club of Kalika"
                },
                "sameAs": [
                  "https://linkedin.com/in/sangogpandey",
                  "https://github.com/sangogpandey",
                  "https://instagram.com/sangogpandey"
                ],
                "knowsAbout": ["Event Management", "UI/UX Design", "Team Building"]
              },
              {
                "@type": "Person",
                "name": "Nayan Acharya",
                "jobTitle": "IT Head",
                "description": "IT Head overseeing technical projects and infrastructure with expertise in System Administration, Web Infrastructure, and Technical Leadership.",
                "url": "https://ictkalika.tech/team",
                "email": "nayan@nayanacharya.xyz",
                "worksFor": {
                  "@type": "Organization",
                  "name": "ICT Club of Kalika"
                },
                "sameAs": [
                  "https://linkedin.com/in/nayan135",
                  "https://twitter.com/nooneknows135",
                  "https://nayan135.com.np"
                ],
                "image": "https://ictkalika.tech/images/nayan-acharya.jpg",
                "knowsAbout": ["System Administration", "Technical Leadership", "Web Development", "Web Infrastructure"]
              }
            ]
          })
        }}
      />
      <TeamPage />
    </>
  )
}
