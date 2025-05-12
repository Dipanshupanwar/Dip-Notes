// src/components/SemesterDrive.jsx
import { Link } from 'react-router-dom';
import Navbar from './layout/Navbar';

const SemesterDrive = ({ title, semesterLinks, uploadPath }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 font-poppins text-white">
    
      
      <main className="container mx-auto px-4 py-8 flex flex-col items-center">
        {/* Header Section */}
        <section className="w-full max-w-4xl text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-500 mb-6 animate-fade-in">
            {title}
          </h2>
          
          {/* Semester Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-12">
            {semesterLinks.map((sem, index) => (
              <a
                key={index}
                href={sem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-2 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                {sem.name}
              </a>
            ))}
          </div>

          {/* Upload Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-300">
              Click and Get Below
            </h3>
            <Link to={uploadPath}>
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Upload
              </button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SemesterDrive;