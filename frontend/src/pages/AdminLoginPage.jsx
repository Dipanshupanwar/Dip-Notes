import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState('');
  const navigate = useNavigate();

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    try {
     const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/authadmin/login`, {
  email,
  password,
});


      if (res.data.token && res.data.role === 'admin') {
        localStorage.setItem('adminToken', res.data.token); // optional: store token
        alert('Admin login successful!');
        navigate('/admin-dashboard');
      } else {
        setWarning('Access denied. Not an admin.');
      }
    } catch (error) {
      console.error(error);
      setWarning('Invalid admin credentials.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        <form onSubmit={handleAdminLogin}>
          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border mb-4"
          />
          <input
            type="password"
            placeholder="Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border mb-4"
          />

          {warning && (
            <p className="text-red-600 text-sm mb-4 text-center">{warning}</p>
          )}

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded"
          >
            Login as Admin
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
