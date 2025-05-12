// src/components/CGPACalculator.jsx
import { useState } from 'react';
import Navbar from './layout/Navbar';

const CGPACalculator = () => {
  const [semesters, setSemesters] = useState([
    { semester: 1, sgpa: '' },
    { semester: 2, sgpa: '' },
    { semester: 3, sgpa: '' },
    { semester: 4, sgpa: '' },
    { semester: 5, sgpa: '' },
    { semester: 6, sgpa: '' },
    { semester: 7, sgpa: '' },
    { semester: 8, sgpa: '' },
  ]);

  const [activeSemesters, setActiveSemesters] = useState(1);
  const [cgpa, setCgpa] = useState(null);

  const handleSgpaChange = (index, value) => {
    const newSemesters = [...semesters];
    newSemesters[index].sgpa = value;
    setSemesters(newSemesters);
  };

  const calculateCGPA = () => {
    const validSemesters = semesters.slice(0, activeSemesters).filter(s => s.sgpa !== '');
    if (validSemesters.length === 0) {
      alert('Please enter at least one SGPA');
      return;
    }

    const total = validSemesters.reduce((sum, sem) => sum + parseFloat(sem.sgpa), 0);
    const calculatedCgpa = total / validSemesters.length;
    setCgpa(calculatedCgpa.toFixed(2));
  };

  const resetCalculator = () => {
    setSemesters(semesters.map(sem => ({ ...sem, sgpa: '' })));
    setActiveSemesters(1);
    setCgpa(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 font-poppins text-white">
  
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-gray-800 rounded-xl shadow-2xl p-6 md:p-8">
          <h1 className="text-3xl font-bold text-center text-blue-500 mb-8">CGPA Calculator</h1>
          
          <div className="mb-8">
            <label className="block text-lg font-medium mb-2">
              Number of Semesters Completed:
            </label>
            <select
              value={activeSemesters}
              onChange={(e) => setActiveSemesters(parseInt(e.target.value))}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>

          <div className="space-y-4 mb-8">
            {semesters.slice(0, activeSemesters).map((sem, index) => (
              <div key={sem.semester} className="flex items-center">
                <label className="w-32 text-lg font-medium">
                  Semester {sem.semester}:
                </label>
                <input
                  type="number"
                  min="0"
                  max="10"
                  step="0.01"
                  value={sem.sgpa}
                  onChange={(e) => handleSgpaChange(index, e.target.value)}
                  placeholder="Enter SGPA"
                  className="flex-1 bg-gray-700 border border-gray-600 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <button
              onClick={calculateCGPA}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Calculate CGPA
            </button>
            <button
              onClick={resetCalculator}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Reset
            </button>
          </div>

          {cgpa && (
            <div className="text-center p-6 bg-blue-900 bg-opacity-30 rounded-lg animate-fade-in">
              <h2 className="text-2xl font-bold mb-2">Your CGPA</h2>
              <div className="text-5xl font-extrabold text-green-400">{cgpa}</div>
              <p className="mt-4 text-gray-300">
                Based on {activeSemesters} semester(s)
              </p>
            </div>
          )}

          <div className="mt-8 text-gray-400">
            <h3 className="text-xl font-semibold mb-2">How it works:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Select the number of semesters you've completed</li>
              <li>Enter your SGPA for each semester</li>
              <li>Click "Calculate CGPA" to get your cumulative GPA</li>
              <li>SGPA values should be between 0 and 10</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CGPACalculator;