import React, { useState } from 'react';
import { NotificationManager } from 'react-notifications';

const Signup = ({ closeModal }) => {
  const [user, setUser] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name === '' || user.email === '' || user.password === '') {
      NotificationManager.error('Please fill in all fields', 'Error', 3000);
      return;
    }
    NotificationManager.success('Signup successful', 'Success', 3000);
    closeModal();  // Close modal on successful signup
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-2xl mb-4 text-center">Sign Up</h2>
      <form onSubmit={handleSubmit} className="w-full">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <button type="submit" className="w-full bg-blue-900 text-white p-2 rounded mb-2">
          Sign Up
        </button>
        <button type="button" onClick={closeModal} className="w-full bg-red-600 text-white p-2 rounded">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Signup;
