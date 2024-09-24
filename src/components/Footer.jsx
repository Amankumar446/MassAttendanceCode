//Footer
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white p-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">

        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="https://www.facebook.com/dsvvofficial?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="text-2xl hover:text-blue-500" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="text-2xl hover:text-blue-400" />
          </a>
          <a href="https://www.instagram.com/dsvvofficial?igsh=MW1wNWlyZzYwOHl2eA==" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="text-2xl hover:text-pink-500" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="text-2xl hover:text-blue-700" />
          </a>
        </div>

        <div className="text-center md:text-left mb-4 md:mb-0 py-4">
          <p className="text-gray-400">Contact us:</p>

          <div className="flex items-center justify-center md:justify-start space-x-2">
            <FontAwesomeIcon icon={faPhone} className="text-gray-400" />
            <span className="text-gray-400">+91 92583 60736</span>
          </div>

          <div className="flex items-center justify-center md:justify-start space-x-2">
            <FontAwesomeIcon icon={faEnvelope} className="text-gray-400" />
            <span className="text-gray-400">registrar@dsvv.ac.in</span>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-400">© 2024 Auto Attendance Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
