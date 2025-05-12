import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCode, FaEnvelope, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiPython, SiCplusplus, SiLeetcode, SiMysql, SiReact, SiJavascript } from 'react-icons/si';


const AboutusPage = () => {
  const skills = [
    { name: 'MERN Stack', icon: <FaReact className="w-6 h-6" /> },
    { name: 'Node.js', icon: <FaNodeJs className="w-6 h-6" /> },
    { name: 'MongoDB', icon: <SiMongodb className="w-6 h-6" /> },
    { name: 'Express', icon: <SiExpress className="w-6 h-6" /> },
    { name: 'SQL', icon: <SiMysql className="w-6 h-6" /> },
    { name: 'React', icon: <SiReact className="w-6 h-6" /> },
    { name: 'JavaScript', icon: <SiJavascript className="w-6 h-6" /> },
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/yourusername', icon: <FaGithub /> },
    { name: 'LeetCode', url: 'https://leetcode.com/yourprofile', icon: <SiLeetcode /> },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile', icon: <FaLinkedin /> },
    { name: 'Email', url: 'mailto:dipanshupanwarxyz@gmail.com', icon: <FaEnvelope /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-900
      relative overflow-hidden bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.8)_0%,_rgba(30,58,138,0.9)_50%,_#000_100%)] text-white font-poppins ">

      <div className="max-w-6xl mx-auto mt-6">
        {/* Profile Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-8 mb-20"
        >
          <div className="w-full md:w-1/3 relative group">
            <img 
              src="/src/assets/WhatsApp Image 2025-04-14 at 13.05.44_b2d9685b.jpg"
              alt="Dipanshu Panwar" 
              className="rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-blue-500 mix-blend-overlay opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity duration-300" />
          </div>

          <div className="w-full md:w-2/3 space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Dipanshu Panwar
              </h1>
              <p className="text-xl text-gray-300">MERN Stack Developer & Founder of Dip Notes</p>
              <div className="flex items-center space-x-4 text-blue-300">
                <span className="flex items-center">
                  <FaCode className="mr-2" /> CGPA: 7.9
                </span>
                <span>•</span>
                <span>IT Student</span>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">I specialize in <strong>MERN Stack Development</strong>, and I’m constantly exploring new technologies to bring the best experiences to our users. I believe in learning by sharing, and this platform is a reflection of that philosophy.
              Passionate developer building accessible educational resources. Specializing in full-stack development 
              while creating platforms that empower students through shared knowledge and collaborative learning.
            </p>
            <p>            In addition to my technical journey, I love guiding other students, solving real-world problems, and building a strong community of learners and developers. Let’s make knowledge free and accessible to all!
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors text-2xl"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Technical Arsenal
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gray-800 rounded-xl flex flex-col items-center space-y-3 hover:bg-gray-700 transition-colors"
              >
                <span className="text-3xl text-blue-400">{skill.icon}</span>
                <span className="font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-block bg-gray-800 rounded-2xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Our Mission
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Empowering students with free, high-quality academic resources. We're building a community where knowledge 
              flows freely, helping you ace exams, build projects, and grow as a developer. Join us in making education 
              accessible to all!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutusPage;