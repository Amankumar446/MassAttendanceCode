import React, { useState } from 'react';
import dsvvlogo from './dsvvlogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn, faUserAlt, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

export default function Header() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    setIsDropdownOpen(false);
  };

  const openSignupModal = () => {
    setIsSignupModalOpen(true);
    setIsDropdownOpen(false);
  };

  const closeModals = () => {
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Check if we are on the home page
  const isHomePage = location.pathname === '/';

  return (
    <div className='flex flex-wrap items-center justify-between bg-blue-800 p-4'>
      <img src={dsvvlogo} alt='logo' className='md:w-66 md:h-42' />
      <h1 className='text-white font-bold font-serif text-2xl md:text-4xl'>Auto Attendance Portal</h1>

      {/* Buttons for larger screens only on home page */}
      {isHomePage && (
        <div className='hidden md:flex space-x-4'>
          <button onClick={openLoginModal} className='bg-yellow-400 p-2 rounded-full font-bold'>
            <FontAwesomeIcon icon={faSignIn} /> Login
          </button>
          <button onClick={openSignupModal} className='bg-yellow-400 p-2 rounded-full font-bold'>
            <FontAwesomeIcon icon={faUserAlt} /> Signup
          </button>
        </div>
      )}

      {/* Hamburger icon for smaller screens */}
      <div className='relative block md:hidden'>
        <button onClick={toggleDropdown} className='text-white'>
          <FontAwesomeIcon icon={faBars} className='text-2xl' />
        </button>
        {isDropdownOpen && (
          <div className='absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg'>
            <Link to="/Login" className="p-2 w-40 bg-blue-900 rounded-lg text-white font-bold text-center">Login</Link>
            <Link to="/Signup" className="p-2 w-40 bg-blue-900 rounded-lg text-white font-bold text-center">Sign Up</Link>
          </div>
        )}
      </div>

      {/* Login and Signup Modals */}
      {isLoginModalOpen && (
        <div className='fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center'>
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <Login closeModal={closeModals} />
          </div>
        </div>
      )}

      {isSignupModalOpen && (
        <div className='fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center'>
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <Signup closeModal={closeModals} />
          </div>
        </div>
      )}
    </div>
  );
}
