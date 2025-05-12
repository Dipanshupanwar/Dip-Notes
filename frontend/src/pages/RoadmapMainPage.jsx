import React from 'react';
import { Link } from 'react-router-dom';
import {
    AcademicCapIcon,
    CodeBracketIcon,
    ShieldCheckIcon,
    ChartBarIcon,
    CpuChipIcon,
    BriefcaseIcon
  } from '@heroicons/react/24/outline';
import Navbar from '../components/layout/Navbar';
  
  
  

  const categories = [
    { 
      name: "Web Development",
      path: "/roadmap/webdev",
      icon: CodeBracketIcon, // ✅ Correct v2 icon
      desc: "Master front-end, back-end, and full-stack technologies. Build modern web applications from scratch."
    },
    { 
      name: "Android Development",
      path: "/roadmap/android",
      icon: AcademicCapIcon,
      desc: "Create native Android apps using Kotlin/Java. Learn mobile architecture patterns and best practices."
    },
    { 
      name: "Full Stack",
      path: "/roadmap/fullstack",
      icon: CpuChipIcon, // ✅ Replaces ChipIcon
      desc: "End-to-end development expertise. Combine front-end and back-end skills to build complete solutions."
    },
    { 
      name: "Data Science",
      path: "/roadmap/datascience",
      icon: ChartBarIcon,
      desc: "Unlock insights from data. Master statistics, machine learning, and data visualization tools."
    },
    { 
      name: "Machine Learning",
      path: "/roadmap/ml",
      icon: AcademicCapIcon,
      desc: "From fundamentals to advanced AI models. Implement algorithms and solve real-world problems."
    },
    { 
      name: "AI",
      path: "/roadmap/ai",
      icon: AcademicCapIcon,
      desc: "Explore neural networks, NLP, and computer vision. Build intelligent systems that learn and adapt."
    },
    { 
      name: "Cyber Security",
      path: "/roadmap/cyber",
      icon: ShieldCheckIcon,
      desc: "Protect digital assets and secure systems. Learn ethical hacking and defense strategies."
    },
    { 
      name: "Network Security",
      path: "/roadmap/network",
      icon: ShieldCheckIcon,
      desc: "Secure network infrastructure. Master firewalls, intrusion detection, and secure protocols."
    },
    { 
      name: "Ethical Hacking",
      path: "/roadmap/hacking",
      icon: ShieldCheckIcon,
      desc: "White-hat hacking techniques. Learn penetration testing and vulnerability assessment."
    },
    { 
      name: "Software Testing",
      path: "/roadmap/testing",
      icon: ShieldCheckIcon,
      desc: "Ensure software quality. Master automation testing and QA methodologies."
    },
    { 
      name: "Placement Preparation",
      path: "/roadmap/placement",
      icon: BriefcaseIcon,
      desc: "Ace technical interviews. Master DSA, system design, and communication skills."
    }
  ];
  

function RoadmapMainPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-900
      relative overflow-hidden bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.8)_0%,_rgba(30,58,138,0.9)_50%,_#000_100%)] text-white">
    
      <div className="max-w-7xl mx-auto mt-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
            Start Your Career Journey
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover curated learning paths developed with industry experts. Whether you're starting fresh or 
            leveling up, our roadmaps provide the perfect blueprint for success in tech's most dynamic fields.
          </p>
        </div>

        {/* Roadmap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(({ name, path, icon: Icon, desc }) => (
            <Link 
              to={path} 
              key={name}
              className="group relative overflow-hidden rounded-2xl bg-gray-800/50 hover:bg-gray-700/70 transition-all duration-300 ease-in-out transform hover:-translate-y-1 shadow-xl hover:shadow-2xl"
            >
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-600 to-purple-500 rounded-lg">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="ml-4 text-2xl font-semibold text-transparent bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text">
                    {name}
                  </h2>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                <div className="mt-4 flex items-center text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm">Explore Roadmap</span>
                  <svg 
                    className="ml-2 w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400/30 rounded-2xl transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* Inspirational Footer */}
        <div className="mt-16 text-center border-t border-gray-700/50 pt-12">
          <h3 className="text-2xl font-light mb-4 text-gray-300">
            "The only way to do great work is to love what you do." 
            <span className="block text-sm mt-2 text-gray-400">- Steve Jobs</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our roadmaps are continuously updated with the latest industry trends and technologies. 
            Each path includes recommended resources, project ideas, and milestone checklists to 
            keep you motivated and on track.
          </p>
        </div>
      </div>
    </div>
  );
}

export default RoadmapMainPage;