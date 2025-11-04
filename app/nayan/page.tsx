//my personal page from the ict domain

import React from 'react';
import { Github, Linkedin, Twitter, Mail, ExternalLink, Calendar, MapPin, Briefcase, GraduationCap, Code, BookOpen, MessageSquare } from 'lucide-react';

export default function NayanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Profile Section */}
      <section id="profile" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl w-full text-center">
          <div className="mb-8">
            <img
              src="/images/nayan-acharya.jpg"
              alt="Nayan Acharya"
              className="w-48 h-48 rounded-full mx-auto border-4 border-purple-500 shadow-2xl object-cover"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Nayan Acharya
          </h1>
          <p className="text-2xl md:text-3xl text-purple-300 mb-6">
            IT Head & Full Stack Developer
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Passionate about building innovative solutions and leading technical teams. 
            Specializing in Button Clicking at ICT KALIKA
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://linkedin.com/in/nayan135" target="_blank" rel="noopener noreferrer" 
               className="text-white hover:text-purple-400 transition-colors">
              <Linkedin size={32} />
            </a>
            <a href="https://twitter.com/nooneknows135" target="_blank" rel="noopener noreferrer"
               className="text-white hover:text-purple-400 transition-colors">
              <Twitter size={32} />
            </a>
            <a href="https://github.com/nayan135" target="_blank" rel="noopener noreferrer"
               className="text-white hover:text-purple-400 transition-colors">
              <Github size={32} />
            </a>
            <a href="mailto:nayan@ypstem.org"
               className="text-white hover:text-purple-400 transition-colors">
              <Mail size={32} />
            </a>
          </div>
          <div className="flex justify-center gap-4">
            <a href="#contact" 
               className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
              Get In Touch
            </a>
            <a href="#projects" 
               className="border-2 border-purple-500 hover:bg-purple-500/20 text-white px-8 py-3 rounded-full font-semibold transition-colors">
              View Projects
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
