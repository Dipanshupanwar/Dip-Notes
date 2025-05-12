import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const ForgotPasswordPage = () => {
 
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 
  



  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/forgot-password', { email });
      
      if (res.data.success) {
        setMessage('OTP has been sent to your email.');
        setError('');
        navigate("/forgot-verify", { state: { email } });

            } else {
        setMessage('');
        setError('Failed to send OTP. Please try again.');
      }
    } catch (err) {
      setError(
        err.response?.data?.msg || 'Something went wrong. Please try again.'
      );
      setMessage('');
    }
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold mb-6 text-center">Forgot Password</h2>
        <form onSubmit={handleForgotPassword}>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 mb-4 border"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {message && (
            <div className="mb-4 text-sm text-green-600 text-center font-medium">
              {message}
            </div>
          )}

          {error && (
            <div className="mb-4 text-sm text-red-600 text-center font-medium">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
        