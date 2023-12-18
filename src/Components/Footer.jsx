// Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black p-8 text-white text-center">
      <div className="mb-4">
        <p>&copy; Chinmaya Sahoo. All rights reserved.</p>
      </div>

      <div className="mb-4">
        <a href="/privacy-policy" className="text-white hover:underline mr-4">Privacy Policy</a>
        <a href="/terms-of-service" className="text-white hover:underline mr-4">Terms of Service</a>
        <a href="/contact-us" className="text-white hover:underline">Contact Us</a>
      </div>

      <div className="mb-4">
        <p>Contact us:</p>
        <p className="text-xl">chinmayasahoo.v@gmail.com</p>
      </div>

      <div>
        <p>Follow us:</p>
        <div className="flex justify-center mt-2">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-white mr-4">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="text-white mr-4">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-white">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
