"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  X,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  Facebook,
  ExternalLink,
  Mail,
} from "lucide-react";

interface TeamMember {
  _id?: string;
  name: string;
  position: string;
  image?: string;
  bio?: string;
  skills?: string[];
  social?: {
    [key: string]: string;
  };
  grade?: number;
  type: 'board' | 'member' | 'advisor';
}

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [boardMembers, setBoardMembers] = useState<TeamMember[]>([]);
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [advisors, setAdvisors] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('/api/team');
        if (!response.ok) {
          throw new Error('Failed to fetch team data');
        }
        
        const data = await response.json();
        
        setBoardMembers(data.filter((member: TeamMember) => member.type === 'board'));
        setMembers(data.filter((member: TeamMember) => member.type === 'member'));
        setAdvisors(data.filter((member: TeamMember) => member.type === 'advisor'));
      } catch (err) {
        console.error('Error fetching team data:', err);
        setError('Failed to load team data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchTeamData();
  }, []);

  const getSocialIcon = (platform: string, url: string) => {
    const iconProps = {
      size: 18,
      className:
        "text-[#9bd3ff] hover:text-white transition-colors duration-300",
    };

    switch (platform) {
      case "linkedin":
        return <Linkedin {...iconProps} />;
      case "github":
        return <Github {...iconProps} />;
      case "twitter":
        return <Twitter {...iconProps} />;
      case "instagram":
        return <Instagram {...iconProps} />;
      case "website":
      case "behance":
      case "facebook":
        return <ExternalLink {...iconProps} />;
      case "email":
        return <Mail {...iconProps} />;
      default:
        return <ExternalLink {...iconProps} />;
    }
  };

  if (loading) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#5bbcff] mx-auto mb-4"></div>
          <p className="text-white text-xl">Loading team data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 text-xl mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-[#5bbcff] text-white px-6 py-2 rounded-lg hover:bg-[#4aa8e6] transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-8 glow-text"
          >
            Our Team
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Meet the passionate individuals who drive innovation and excellence
            in the ICT Club. Our diverse team brings together unique skills,
            perspectives, and experiences to create an inspiring learning
            environment.
          </motion.p>
        </div>
      </section>

      {/* Board of Directors Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16 glow-text"
          >
            Board of Directors
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {boardMembers.map((member, index) => (
              <motion.div
                key={member._id || member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-glow rounded-xl p-6 text-center cursor-pointer transition-all duration-300 group relative"
                onClick={() => setSelectedMember(member)}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="w-24 h-24 rounded-full mx-auto mb-4 glow-border object-cover"
                />
                <h3 className="text-xl font-bold text-white mb-2 uppercase">
                  {member.name}
                </h3>
                <p className="text-[#9bd3ff] font-medium mb-4">
                  {member.position}
                </p>

                {/* Social Links on Hover */}
                {member.social && Object.keys(member.social).length > 0 && (
                  <div className="absolute inset-0 bg-black/90 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex space-x-4 mb-4">
                      {Object.entries(member.social).map(([platform, url]) => (
                        <a
                          key={platform}
                          href={platform === "email" ? `mailto:${url}` : url}
                          target={platform === "email" ? undefined : "_blank"}
                          rel={
                            platform === "email"
                              ? undefined
                              : "noopener noreferrer"
                          }
                          className="transition-colors duration-300"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {getSocialIcon(platform, url)}
                        </a>
                      ))}
                    </div>
                    <p className="text-white text-sm font-medium">
                      Click for details
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16 glow-text"
          >
            Members
          </motion.h2>

          {/* Group members by grade */}
          {[12, 11, 10, 9].map((grade) => {
            const gradeMembers = members.filter(member => member.grade === grade);
            
            if (gradeMembers.length === 0) return null;
            
            return (
              <div key={grade} className="mb-16">
                <motion.h3
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-2xl md:text-3xl font-bold text-white text-center mb-8"
                >
                  Grade {grade}
                </motion.h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {gradeMembers.map((member, index) => (
                    <motion.div
                      key={member._id || `${member.name}-${index}`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                      className="card-glow rounded-xl p-6 text-center transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <h4 className="text-lg font-bold text-white mb-1 uppercase">
                        {member.name}
                      </h4>
                      <p className="text-[#9bd3ff] text-sm font-medium mb-2">
                        {member.position}
                      </p>
                  
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Advisors Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16 glow-text"
          >
            Advisors
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advisors.map((person, index) => (
              <motion.div
                key={person._id || person.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-glow rounded-xl p-6 text-center transition-all duration-300"
              >
                <Image
                  src={person.image || "/placeholder.svg"}
                  alt={person.name}
                  width={100}
                  height={100}
                  className="w-20 h-20 rounded-full mx-auto mb-4 glow-border object-cover"
                />
                <h3 className="text-lg font-bold text-white mb-2 uppercase">
                  {person.name}
                </h3>
                <p className="text-[#9bd3ff] text-sm mb-2">{person.position}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Modal */}
      {selectedMember && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMember(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="card-glow rounded-xl p-8 max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
              title="Close details"
              aria-label="Close details"
            >
              <X size={24} />
            </button>

            <div className="text-center">
              <Image
                src={selectedMember.image || "/placeholder.svg"}
                alt={selectedMember.name}
                width={150}
                height={150}
                className="w-32 h-32 rounded-full mx-auto mb-6 glow-border object-cover"
              />
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">
                {selectedMember.name}
              </h3>
              <p className="text-[#9bd3ff] font-medium mb-4">
                {selectedMember.position}
              </p>
              {selectedMember.bio && (
                <p className="text-gray-300 mb-6">{selectedMember.bio}</p>
              )}

              {selectedMember.skills && selectedMember.skills.length > 0 && (
                <div>
                  <h4 className="text-white font-semibold mb-3">Skills</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {selectedMember.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-[#5bbcff]/20 text-[#9bd3ff] px-3 py-1 rounded-full text-sm border border-[#5bbcff]/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
