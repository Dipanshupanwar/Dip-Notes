import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import { useEffect } from 'react';

const RateUsPage = () => {
  // State management
  const [formData, setFormData] = useState({
    name: '',
    rating: 0,
    review: '',
  });
  const [reviews, setReviews] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');




useEffect(() => {
  const fetchReviews = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/reviews');
      const data = await response.json();
      setReviews(data);
    } catch (err) {
      console.error('Failed to fetch reviews:', err);
    }
  };

  fetchReviews();
}, []);


  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle star rating selection
  const handleRating = (rating) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
  
    if (!formData.name || !formData.rating || !formData.review) {
      setError('Please fill all required fields');
      return;
    }
  
    setIsSubmitting(true);
  
    try {
      const response = await fetch('http://localhost:5000/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (!response.ok) throw new Error('Failed to save review');
  
      const savedReview = await response.json();
  
      setReviews(prev => [savedReview, ...prev]);
      setFormData({ name: '', rating: 0, review: '' });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  

  // Star rating component
  const StarRating = ({ rating, onRate, hoverRating, onHover }) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            className={`text-3xl cursor-pointer transition-colors ${
              star <= (hoverRating || rating) ? 'text-yellow-400' : 'text-gray-400'
            }`}
            onClick={() => onRate(star)}
            onMouseEnter={() => onHover(star)}
            onMouseLeave={() => onHover(0)}
          >
            ★
          </button>
        ))}
      </div>
    );
  };

  // Review card component
  const ReviewCard = ({ review }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 backdrop-blur-sm"
      >
    
        <div className="flex items-center justify-between mb-4">
      
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-xl font-medium">
                {review.name.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <h3 className="font-semibold text-lg">{review.name}</h3>
              <p className="text-gray-400 text-sm">
                {new Date(review.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </p>
            </div>
          </div>
          <div className="flex gap-1 text-yellow-400">
            {'★'.repeat(review.rating)}
            {'☆'.repeat(5 - review.rating)}
          </div>
        </div>
        <p className="text-gray-300 leading-relaxed">{review.review}</p>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-900
      relative overflow-hidden bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.8)_0%,_rgba(30,58,138,0.9)_50%,_#000_100%)] text-white font-poppins ">
   
      <div className="max-w-4xl mx-auto mt-7">
        {/* Rating Form Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800/50 rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-700 backdrop-blur-sm mb-12"
        >
          <header className="text-center mb-8">
            <motion.h1 
              className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Rate Our Platform
            </motion.h1>
            <p className="text-gray-400">We value your feedback!</p>
          </header>

          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-6 p-4 bg-red-900/30 rounded-lg border border-red-700 text-red-300"
            >
              {error}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-gray-700/70 border border-gray-600 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Rating</label>
              <StarRating
                rating={formData.rating}
                onRate={handleRating}
                hoverRating={formData.hoverRating}
                onHover={(rating) => setFormData(prev => ({ ...prev, hoverRating: rating }))}
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Your Review</label>
              <textarea
                name="review"
                value={formData.review}
                onChange={handleChange}
                className="w-full bg-gray-700/70 border border-gray-600 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all min-h-[150px]"
                placeholder="Share your experience with us..."
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                isSubmitting
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 shadow-lg'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : 'Submit Review'}
            </motion.button>
          </form>
        </motion.section>

        {/* Reviews Section */}
        <section>
          <motion.h2 
            className="text-2xl font-bold mb-8 text-center text-green-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Community Feedback
          </motion.h2>
          
          {reviews.length > 0 ? (
            <div className="space-y-6">
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="max-w-md mx-auto">
                <div className="text-gray-500 mb-4 text-6xl">★</div>
                <h3 className="text-xl text-gray-400 mb-2">No reviews yet</h3>
                <p className="text-gray-500">Be the first to share your experience!</p>
              </div>
            </motion.div>
          )}
        </section>
      </div>
    </div>
  );
};

export default RateUsPage;