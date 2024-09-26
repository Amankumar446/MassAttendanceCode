import React, { useState } from 'react';
import { NotificationManager } from 'react-notifications';

const Login = ({ closeModal }) => {
  const [user, setUser] = useState({ email: '', password: '' });

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.email === '' || user.password === '') {
      NotificationManager.error('Please fill all fields', 'Error', 3000);
      return;
    }
    NotificationManager.success('Login Successful', 'Success', 3000);
    closeModal();  // Close modal on successful login
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-end">
            <button onClick={closeModal} className="text-left font-bold font-serif bg-red-600 text-white p-2 rounded">X</button>
        </div>
      <h2 className="text-2xl mb-4 text-center">Login</h2>
      <form onSubmit={handleSubmit} className="w-full">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleInput}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleInput}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <button type="submit" className="w-full bg-blue-900 text-white p-2 rounded mb-2">
          Login
        </button>
        
      </form>
    </div>
  );
};

export default Login;
