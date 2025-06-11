import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [notes, setNotes] = useState([]);
  const navigate =  useNavigate()   
   const baseURL = import.meta.env.VITE_API_URL;



  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        const config = { headers: { Authorization: `Bearer ${token}` } };

        const [userRes, ratingRes, feedbackRes, notesRes] = await Promise.all([
  

axios.get(`${baseURL}/api/admin/users`, config),
axios.get(`${baseURL}/api/admin/ratings`, config),
axios.get(`${baseURL}/api/admin/feedbacks`, config),
axios.get(`${baseURL}/api/admin/notes`, config),
        ]);

        setUsers(userRes.data);
        setRatings(ratingRes.data);
        setFeedbacks(feedbackRes.data);
        setNotes(notesRes.data);
      } catch (error) {
        console.error('Error fetching admin data', error);
      }
    };

    fetchAdminData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-900 to-gray-700 text-white p-6">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">👋 Welcome Back, Admin!</h1>
        <p className="text-gray-300">Here’s what’s happening on Dip Notes today.</p>
          <button
          onClick={() => navigate('/admin/edit-ebooks')}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded shadow"
        >
          📚 Upload E-Book
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <Card title="Total Users" value={users.length} color="bg-blue-600" />
        <Card title="Ratings" value={ratings.length} color="bg-yellow-500" />
        <Card title="Feedbacks" value={feedbacks.length} color="bg-green-500" />
        <Card title="Uploads" value={notes.length} color="bg-red-500" />
      </div>

      {/* Sections */}
      <Section title="User Login Details">
        {users.length ? (
          <ul className="space-y-2">
            {users.map((user) => (
              <li key={user._id} className="bg-gray-800 p-3 rounded">{user.username} ({user.email})</li>
            ))}
          </ul>
        ) : (
          <p>No users yet.</p>
        )}
      </Section>

      <Section title="User Ratings">
        {ratings.length ? (
          <ul className="space-y-2">
            {ratings.map((rate, i) => (
              <li key={i} className="bg-gray-800 p-3 rounded">
                {rate.fullName} - ⭐ {rate.rating}
              </li>
            ))}
          </ul>
        ) : (
          <p>No ratings submitted.</p>
        )}
      </Section>

      <Section title="Feedback Messages">
        {feedbacks.length ? (
          <ul className="space-y-2">
            {feedbacks.map((feedback) => (
              <li key={feedback._id} className="bg-gray-800 p-3 rounded">
                <strong>{feedback.name}</strong>: {feedback.message}
              </li>
            ))}
          </ul>
        ) : (
          <p>No feedback received.</p>
        )}
      </Section>

      <Section title="Notes / Posts Uploaded">
        {notes.length ? (
          <ul className="space-y-2">
            {notes.map((note) => (
              <li key={note._id} className="bg-gray-800 p-3 rounded">
                <strong>{note.subject}</strong> ({note.department}) - uploaded by {note.name} , drive ({note.driveLink}), subject- {note.subject}
              </li>
            ))}
          </ul>
        ) : (
          <p>No notes uploaded yet.</p>
        )}
      </Section>
    </div>
  );
};

const Card = ({ title, value, color }) => (
  <div className={`p-5 rounded-lg shadow-md ${color}`}>
    <h2 className="text-lg font-semibold">{title}</h2>
    <p className="text-3xl font-bold">{value}</p>
  </div>
);

const Section = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-semibold mb-4 border-b border-gray-600 pb-2">{title}</h2>
    {children}
  </div>
);

export default AdminDashboard;
