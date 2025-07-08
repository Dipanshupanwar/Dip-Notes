import React, { useEffect, useState ,useRef } from 'react';
import axios from 'axios';

const EditEbooks = () => {
  const [ebooks, setEbooks] = useState([]);
  const [form, setForm] = useState({ title: '', author: '' });
  const [cover, setCover] = useState(null);
  const [pdf, setPdf] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [refreshCounter, setRefreshCounter] = useState(0);
  const [uploadProgress, setUploadProgress] = useState(0);
  const coverInputRef = useRef();
const pdfInputRef = useRef();


  const fetchEbooks = async () => {
    setIsLoading(true);
    try {
const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/ebooks/all`);
      setEbooks(res.data);
    } catch (err) {
      console.error('Failed to fetch ebooks', err);
      alert('Failed to load ebooks. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEbooks();
  }, [refreshCounter]);

  const validateFiles = () => {
    if (!cover || !pdf) {
      alert('Please upload both Cover and PDF');
      return false;
    }

    if (pdf.size > 20 * 1024 * 1024) {
      alert('PDF file is too large (max 20MB)');
      return false;
    }

    const validImageTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!validImageTypes.includes(cover.type)) {
      alert('Please upload a valid image (JPEG, PNG, or WEBP)');
      return false;
    }

    return true;
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!validateFiles()) return;

    const formData = new FormData();
    formData.append('title', form.title);
    formData.append('author', form.author);
    formData.append('cover', cover);
    formData.append('pdf', pdf);

    setIsLoading(true);
    setUploadProgress(0);

    try {
      await axios.post('http://localhost:5000/api/ebooks/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(percentCompleted);
        }
      });
      alert('E-book uploaded successfully!');
      setForm({ title: '', author: '' });
      setCover(null);
      setPdf(null);
      setRefreshCounter(prev => prev + 1);
      setUploadProgress(0);
      if (coverInputRef.current) coverInputRef.current.value = "";
if (pdfInputRef.current) pdfInputRef.current.value = "";
     
    } catch (err) {
      console.error('Upload error:', err);
      alert(err.response?.data?.message || 'Failed to upload e-book.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this e-book?");
    if (!confirmDelete) return;

    setIsLoading(true);
    try {
      await axios.delete(`http://localhost:5000/api/ebooks/${id}`);
      alert("E-book deleted successfully.");
      setRefreshCounter(prev => prev + 1);
    } catch (err) {
      console.error("Delete error:", err);
      alert(err.response?.data?.message || "Failed to delete e-book.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = (setter, e) => {
    if (e.target.files && e.target.files[0]) {
      setter(e.target.files[0]);
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto text-white bg-gray-900 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">📚 Manage E-books</h2>

      {/* Upload Form */}
      <form onSubmit={handleUpload} className="bg-gray-800 p-6 rounded mb-10 shadow-lg border border-gray-700">
        <h3 className="text-2xl font-semibold mb-6">📥 Upload a New E-book</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-300">E-book Title</label>
            <input
              type="text"
              placeholder="e.g. Java Notes for Professionals"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full p-2 rounded text-black focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Author */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-300">Author Name</label>
            <input
              type="text"
              placeholder="e.g. John Doe or Anonymous"
              value={form.author}
              onChange={(e) => setForm({ ...form, author: e.target.value })}
              className="w-full p-2 rounded text-black focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Cover Upload */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-300">
              Cover Image (JPG/PNG/WEBP)
            </label>
            <input
              type="file"
              accept="image/*"
              ref={coverInputRef}
              onChange={(e) => handleFileChange(setCover, e)}
              className="w-full p-2 bg-white rounded focus:outline-none file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-200 file:text-gray-700 hover:file:bg-gray-300"
              required
            />
          </div>

          {/* PDF Upload */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-300">
              PDF File (Max 20MB)
            </label>
            <input
              type="file"
              name="pdf"
              accept="application/pdf"
              ref={pdfInputRef}
              onChange={(e) => handleFileChange(setPdf, e)}
              className="w-full p-2 bg-white rounded focus:outline-none file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-200 file:text-gray-700 hover:file:bg-gray-300"
              required
            />
          </div>
        </div>

        {/* Progress Bar */}
        {uploadProgress > 0 && uploadProgress < 100 && (
          <div className="mt-4 w-full bg-gray-700 rounded-full h-2.5">
            <div
              className="bg-green-500 h-2.5 rounded-full"
              style={{ width: `${uploadProgress}%` }}
            ></div>
            <div className="text-xs text-gray-300 mt-1 text-right">
              {uploadProgress}% uploaded
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className={`mt-6 w-full md:w-auto px-6 py-2 text-white font-semibold rounded transition ${
            isLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
          }`}
        >
          {isLoading ? '⏳ Uploading...' : '🚀 Upload E-book'}
        </button>
      </form>

      {/* List of E-books */}
      <h3 className="text-2xl font-semibold mb-4">📖 Uploaded E-books</h3>
      {isLoading && !ebooks.length ? (
        <div className="text-center py-10">Loading ebooks...</div>
      ) : ebooks.length === 0 ? (
        <div className="text-center py-10 text-gray-400">No ebooks found. Upload one to get started!</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ebooks.map((book) => (
            <div key={book._id} className="bg-gray-800 p-4 rounded shadow hover:shadow-lg transition-shadow">
              <img 
                src={book.coverImageUrl} 
                alt={book.title} 
                className="w-full h-48 object-contain mb-2 rounded bg-black"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/300x400?text=Cover+Not+Available";
                }}
              />
              <h4 className="text-xl font-bold truncate">{book.title}</h4>
              <p className="text-sm text-gray-400 mb-2 truncate">by {book.author}</p>
              <div className="flex justify-between items-center">
                { console.log( book.pdfUrl)}
                <a
                  href={book.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline text-sm"
                >
                  View PDF
                </a>
                <button
                  onClick={() => handleDelete(book._id)}
                  disabled={isLoading}
                  className="px-3 py-1 bg-red-600 rounded hover:bg-red-700 text-sm disabled:bg-gray-600 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Deleting...' : 'Delete'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EditEbooks;