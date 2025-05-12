import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      if (res.data.token) {
        setWarning('');
        alert('Login successful!');
        navigate('/');
      } else {
        setWarning(res.data.msg || 'Login failed');
      }
    } catch (error) {
      console.error(error);
      setWarning('Incorrect email or password.');
    }
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password'); // Make sure you create this route
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-4 border"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-2 border"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="text-right text-sm text-blue-600 hover:underline mb-4">
            <button type="button" onClick={handleForgotPassword}>
              Forgot Password?
            </button>
          </div>

          {warning && (
            <div className="mb-4 text-sm text-red-600 text-center font-medium">
              {warning}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
