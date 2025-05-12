import React from 'react';
import { Linkedin, Github, Mail, Code } from 'lucide-react'; // Or use Heroicons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-8 flex-wrap">

          {/* Logo Section */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <img 
              src="\src\assets\WhatsApp Image 2025-04-14 at 13.05.44_b2d9685b.jpg" 
              alt="Logo" 
              className="w-20 h-20 mb-4 rounded-full"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
                dipanshu panwar <br></br>
              Transforming ideas into digital solutions
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold border-b-2 border-green-500 pb-2 mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>📍 Indore, India</li>
              <li>📞 +91 9754957069</li>
              <li>
                <a href="mailto:your.email@example.com" className="hover:text-green-400 transition">
                  📧 workdipanshu07@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold border-b-2 border-green-500 pb-2 mb-4">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://leetcode.com/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition"
              >
                <Code className="w-6 h-6" />
              </a>
              <a 
                href="mailto:your.email@example.com" 
                className="text-gray-400 hover:text-green-400 transition"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Dipanshu panwar. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;