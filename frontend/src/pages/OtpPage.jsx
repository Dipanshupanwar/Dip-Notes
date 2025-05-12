import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const OtpPage = () => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state;

  const handleOtpVerify = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/verify', { email, otp });
      alert('Signup successful!');
      navigate('/login');
    } catch (error) {
      console.error(error);
      alert('Invalid OTP!');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold mb-6 text-center">Enter OTP</h2>
        <form onSubmit={handleOtpVerify}>
          <input
            type="text"
            placeholder="Enter OTP"
            className="w-full p-2 mb-6 border"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default OtpPage;
