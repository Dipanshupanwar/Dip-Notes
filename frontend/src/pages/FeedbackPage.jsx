import { useState } from 'react';


const FeedbackPage = () => {
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    rating: 0,
    message: '',
    feedbackType: 'general'
  });
  const [submitted, setSubmitted] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRating = (rating) => {
    setFeedback(prev => ({
      ...prev,
      rating
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(feedback)
      });
  
      const result = await response.json();
  
      if (response.ok) {
        console.log('Feedback submitted:', result.message);
        setSubmitted(true);
        setTimeout(() => {
          setFeedback({
            name: '',
            email: '',
            rating: 0,
            message: '',
            feedbackType: 'general'
          });
          setSubmitted(false);
        }, 3000);
      } else {
        alert(result.message || 'Failed to submit feedback');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };
  
  return (
    <div className="min-h-screen  bg-gradient-to-br from-purple-900 via-black to-blue-900
      relative overflow-hidden bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.8)_0%,_rgba(30,58,138,0.9)_50%,_#000_100%)]">
  
      <div className="max-w-3xl mx-auto mt-6">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 sm:p-8 text-white">
            <h1 className="text-3xl font-bold mb-2">Share Your Thoughts</h1>
            <p className="text-blue-100">We value your feedback to improve DIP Notes</p>
          </div>
          
          {/* Content Section */}
          <div className="p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600">Your feedback has been submitted successfully.</p>
                <p className="text-gray-500 mt-1">We appreciate your time and input.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name <span className="text-gray-500">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={feedback.name}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-gray-500">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={feedback.email}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How would you rate your experience?
                  </label>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className={`text-3xl transition-colors duration-200 ${
                          star <= (hoverRating || feedback.rating) 
                            ? 'text-yellow-400' 
                            : 'text-gray-300'
                        }`}
                      >
                        ★
                      </button>
                    ))}
                    <span className="ml-2 text-sm text-gray-500">
                      {feedback.rating > 0 ? `${feedback.rating} star${feedback.rating > 1 ? 's' : ''}` : 'Not rated'}
                    </span>
                  </div>
                </div>

                <div>
                  <label htmlFor="feedbackType" className="block text-sm font-medium text-gray-700 mb-1">
                    Type of Feedback
                  </label>
                  <select
                    id="feedbackType"
                    name="feedbackType"
                    value={feedback.feedbackType}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                  >
                    <option value="general">General Feedback</option>
                    <option value="bug">Bug Report</option>
                    <option value="feature">Feature Request</option>
                    <option value="ui">UI/UX Suggestion</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Feedback <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={feedback.message}
                    onChange={handleChange}
                    rows="5"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                    placeholder="Tell us what you think..."
                    required
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
                  >
                    Submit Feedback
                    <svg className="ml-2 -mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Footer Section */}
          <div className="bg-gray-50 px-6 py-4 sm:px-8 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              Your feedback helps us improve DIP Notes. We read every submission.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;