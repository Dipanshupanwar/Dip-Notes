import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowDownTrayIcon, 
  ArrowLeftIcon,
  CheckCircleIcon,
  BookOpenIcon,
  ClockIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

import { roadmapData } from '../data/Roadmaps';
import Navbar from '../components/layout/Navbar';

function RoadmapDetailPage() {
  const { category } = useParams();
  const roadmap = roadmapData[category];

  if (!roadmap) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Roadmap Not Found</h2>
          <p className="text-gray-600 mb-6">
            The requested roadmap doesn't exist or may have been moved.
          </p>
          <Link 
            to="/roadmap" 
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Browse All Roadmaps
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-blue-900 ">

      <div className="max-w-6xl mx-auto mt-6">
        {/* Header with Back Button */}
        <div className="flex justify-between items-center mb-12">
          <Link 
            to="/roadmap" 
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            All Roadmaps
          </Link>
          <a 
            href={roadmap.pdfUrl} 
            download
            className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
            Download Full Guide
          </a>
        </div>

        {/* Roadmap Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{roadmap.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {roadmap.description}
          </p>
        </div>

        {/* Visual Roadmap */}
        <div className="mb-16 bg-white p-6 rounded-2xl shadow-xl border border-gray-200">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-6">
     
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
              <AcademicCapIcon className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-blue-800">
                {roadmap.levels.length} Learning Levels
              </span>
            </div>
            <div className="flex items-center bg-purple-50 px-4 py-2 rounded-full">
              <ClockIcon className="h-5 w-5 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-purple-800">
                Estimated Duration: {calculateTotalDuration(roadmap.levels)}
              </span>
            </div>
          </div>
        </div>

        {/* Learning Path */}
        <div className="space-y-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Your Learning Journey
          </h2>
          
          {roadmap.levels.map((level, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-blue-500"
            >
              <div className="bg-gradient-to-r from-gray-50 to-white p-6 sm:p-8">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-6">
                    <span className="text-blue-600 font-bold text-xl">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-2xl font-semibold text-gray-900">
                        {level.title}
                      </h3>
                      <span className="inline-flex items-center mt-2 sm:mt-0 px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                        <ClockIcon className="h-4 w-4 mr-1" />
                        {level.duration}
                      </span>
                    </div>
                    
                    <div className="mt-6 grid md:grid-cols-2 gap-8">
                      {/* Skills Section */}
                      <div>
                        <div className="flex items-center mb-4">
                          <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                          <h4 className="text-lg font-medium text-gray-900">
                            Skills to Master
                          </h4>
                        </div>
                        <ul className="space-y-3">
                          {level.skills.map((skill, i) => (
                            <li key={i} className="flex items-start">
                              <span className="flex-shrink-0 h-6 w-6 text-green-500 mr-3 mt-1">
                                ✓
                              </span>
                              <span className="text-gray-700">{skill}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Resources Section */}
                      <div>
                        <div className="flex items-center mb-4">
                          <BookOpenIcon className="h-5 w-5 text-blue-500 mr-2" />
                          <h4 className="text-lg font-medium text-gray-900">
                            Recommended Resources
                          </h4>
                        </div>
                        <ul className="space-y-3">
                          {level.resources.map((resource, i) => (
                            <li key={i} className="flex items-start">
                              <span className="flex-shrink-0 h-6 w-6 text-blue-500 mr-3 mt-1">
                                📚
                              </span>
                              <span className="text-gray-700">{resource}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Download the complete roadmap with additional resources, project ideas, and community recommendations.
          </p>
          <a 
            href={roadmap.pdfUrl} 
            download
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
            Download Full Roadmap Package
          </a>
        </div>
      </div>
    </div>
  );
}

// Helper function to calculate total duration
function calculateTotalDuration(levels) {
  const months = levels.reduce((total, level) => {
    const match = level.duration.match(/(\d+)/);
    return total + (match ? parseInt(match[0]) : 0);
  }, 0);
  
  if (months <= 6) return `${months} months`;
  if (months <= 12) return `${Math.floor(months/12)} year`;
  return `${Math.floor(months/12)} years`;
}

export default RoadmapDetailPage;