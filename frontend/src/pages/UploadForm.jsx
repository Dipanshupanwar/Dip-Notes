import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';



function UploadForm() {
  const { type } = useParams();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    semester: '',
    department: '',
    driveLink: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const payload = { ...formData, type };

    try {
      await axios.post('http://localhost:5000/api/upload', payload);
      alert('Upload request submitted successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        semester: '',
        department: '',
        driveLink: '',
        description: '',
      });
    } catch (err) {
      console.error(err);
      alert('Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Format the type for display (remove 'upload' and replace dashes)
  const formatType = (type) => {
    return type.replace('upload', '').replace('-', ' ').trim();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900  font-poppins">

      <div className="max-w-2xl mx-auto mt-6">

        <div className="bg-gray-800 bg-opacity-50 rounded-xl shadow-xl overflow-hidden border border-gray-700">
          {/* Form Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6">
            <h2 className="text-2xl font-bold text-white text-center">
              Upload {formatType(type)}
            </h2>
            <p className="text-blue-100 text-center mt-1">
              Please fill in all required details
            </p>
          </div>

          {/* Form Body */}
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-gray-300 mb-2">Your Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Your Email</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Subject Name</label>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                  placeholder="e.g. Data Structures"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Semester</label>
                <input
                  name="semester"
                  value={formData.semester}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                  placeholder="e.g. 3rd Semester"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Department</label>
                <input
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                  placeholder="e.g. Computer Science"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Google Drive Link</label>
                <input
                  name="driveLink"
                  type="url"
                  value={formData.driveLink}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                  placeholder="https://drive.google.com/..."
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Additional Information</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all min-h-[120px]"
                placeholder="Any special instructions or details about your upload..."
              ></textarea>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all ${isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-green-600 hover:bg-green-700 hover:shadow-lg'
                  }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Upload Request'}
              </button>
            </div>
          </form>
        </div>

        {/* Upload Guidelines */}
        <div className="mt-8 bg-gray-800 bg-opacity-50 rounded-xl p-6 border border-gray-700">
          <h3 className="text-xl font-semibold text-blue-400 mb-4">Upload Guidelines</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-green-400 mr-2 mt-1">✓</span>
              <span>Ensure your Google Drive link has sharing permissions set to "Anyone with the link can view"</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 mt-1">✓</span>
              <span>Files should be properly named (e.g. "DS_3rdSem_Notes_Unit1.pdf")</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 mt-1">✓</span>
              <span>Only upload materials you have permission to share</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 mt-1">✓</span>
              <span>Double-check semester and subject information before submitting</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UploadForm;