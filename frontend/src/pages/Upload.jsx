import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';

function Upload() {
  const navigate = useNavigate();

  const handleRedirect = (type) => {
    navigate(`/uploadform/${type}`); // Pass type in URL
  };

  const uploadTypes = [
    { 
      type: 'notesupload', 
      displayName: 'Notes',
      icon: '📝',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    { 
      type: 'papersupload', 
      displayName: 'Question Papers',
      icon: '📄',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    { 
      type: 'booksupload', 
      displayName: 'Books',
      icon: '📚',
      color: 'bg-green-600 hover:bg-green-700'
    },
    { 
      type: 'lab-recorduploads', 
      displayName: 'Lab Records',
      icon: '🔬',
      color: 'bg-green-600 hover:bg-green-700'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-900
      relative overflow-hidden bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.8)_0%,_rgba(30,58,138,0.9)_50%,_#000_100%)]  font-poppins">
   
      <div className="max-w-4xl mx-auto mt-6">
        <h1 className="text-3xl font-bold text-blue-500 mb-2">Upload Resources</h1>
        <p className="text-gray-400 mb-8">Select what you want to contribute to the community</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {uploadTypes.map((item) => (
            <button
              key={item.type}
              onClick={() => handleRedirect(item.type)}
              className={`${item.color} text-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg flex flex-col items-center`}
            >
              <span className="text-4xl mb-3">{item.icon}</span>
              <h2 className="text-xl font-semibold text-center">
                {item.displayName}
              </h2>
            </button>
          ))}
        </div>

        <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 border border-gray-700">
          <h2 className="text-xl font-semibold text-white mb-3">Upload Guidelines</h2>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="mr-2 text-green-400">✓</span>
              <span>Files should be in PDF, DOCX, or JPG format</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-green-400">✓</span>
              <span>Maximum file size: 25MB</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-green-400">✓</span>
              <span>Ensure the content is relevant and properly labeled</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-green-400">✓</span>
              <span>No copyrighted material without permission</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Upload;
