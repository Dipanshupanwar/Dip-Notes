import { useState } from 'react';
import axios from 'axios';

function ResetPassword({ email }) {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleReset = async (e) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      setSuccess('');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/auth/reset-password', { email, newPassword });
      setSuccess('Password updated successfully. You can now log in.');
      setError('');
    } catch (err) {
      setError(err.response?.data?.msg || 'Failed to reset password.');
      setSuccess('');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Reset Your Password</h2>
        <form onSubmit={handleReset}>
          <input
            type="password"
            placeholder="New Password"
            className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          {error && (
            <div className="text-red-600 text-sm mb-4 text-center font-medium">
              {error}
            </div>
          )}

          {success && (
            <div className="text-green-600 text-sm mb-4 text-center font-medium">
              {success}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold transition duration-200"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
