import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import ResetPassword from './ResetPassword';

function ForgotVerifyOtp() {
  const location = useLocation(); // Get the location object
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Access the email from location state
  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handleOTPSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/verify-otp', { email, otp });

      if (res.data.success) {
        setSuccess('OTP verified successfully!');
        setError('');
        setVerified(true);
      } else {
        setError('Invalid OTP');
        setSuccess('');
      }
    } catch (err) {
      setError(err.response?.data?.msg || 'Something went wrong.');
      setSuccess('');
    }
  };

  return verified ? (
    <ResetPassword email={email} />
  ) : (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Verify OTP</h2>
        <p className="text-sm text-gray-600 text-center mb-4">
          Enter the 6-digit OTP sent to your email.
        </p>
        <form onSubmit={handleOTPSubmit}>
          <input
            type="text"
            maxLength="6"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {error && (
            <div className="text-red-500 text-sm mb-4 text-center font-medium">
              {error}
            </div>
          )}

          {success && (
            <div className="text-green-500 text-sm mb-4 text-center font-medium">
              {success}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotVerifyOtp;
