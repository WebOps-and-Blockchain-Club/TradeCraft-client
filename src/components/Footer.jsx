/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="container mx-auto px-4 flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h2 className="text-white text-2xl mb-4">TradeCraft</h2>
          <address>
            Center of Innovation, Near GC<br />
            IIT Madras, Chennai<br />
            Tamil Nadu - 600036<br />
            <Link to="mailto:cfi@iitm.ac.in" className="text-blue-500">Contact Us</Link>
          </address>
          <div className="mt-4 flex space-x-3">
            <Link to="/user" className="text-blue-500"><i className="fab fa-facebook"></i></Link>
            <Link to="/user" className="text-red-500"><i className="fab fa-youtube"></i></Link>
            <Link to="/user" className="text-pink-500"><i className="fab fa-instagram"></i></Link>
            <Link to="/user" className="text-blue-500"><i className="fab fa-linkedin"></i></Link>
            <Link to="/user" className="text-blue-400"><i className="fab fa-telegram"></i></Link>
          </div>
        </div>
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h3 className="text-white text-xl mb-4">Products</h3>
          <ul>
            <li><Link to="/user" className="hover:text-white">Stocks</Link></li>
            <li><Link to="/user" className="hover:text-white">Futures & Options</Link></li>
            <li><Link to="/user" className="hover:text-white">IPO</Link></li>
            <li><Link to="/user" className="hover:text-white">Mutual Funds</Link></li>
            <li><Link to="/user" className="hover:text-white">NFO</Link></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h3 className="text-white text-xl mb-4">TradeCraft</h3>
          <ul>
            <li><Link to="/user" className="hover:text-white">About Us</Link></li>
            <li><Link to="/user" className="hover:text-white">Pricing</Link></li>
            <li><Link to="/user" className="hover:text-white">Blog</Link></li>
            <li><Link to="/user" className="hover:text-white">Media & Press</Link></li>
            <li><Link to="/user" className="hover:text-white">Careers</Link></li>
            <li><Link to="/user" className="hover:text-white">Help and Support</Link></li>
            <li><Link to="/user" className="hover:text-white">Trust and Safety</Link></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4">
          <h3 className="text-white text-xl mb-4">Quick Links</h3>
          <ul>
            <li><Link to="/user" className="hover:text-white">AMC Mutual Funds</Link></li>
            <li><Link to="/user" className="hover:text-white">Calculators</Link></li>
            <li><Link to="/user" className="hover:text-white">Glossary</Link></li>
            <li><Link to="/user" className="hover:text-white">Open Demat Account</Link></li>
            <li><Link to="/user" className="hover:text-white">Groww Digest</Link></li>
            <li><Link to="/user" className="hover:text-white">Sitemap</Link></li>
            <li><Link to="/user" className="hover:text-white">Income Tax Calculator</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-10 border-t border-gray-700 pt-4 text-center">
        <p>© 2023-2025 TradeCraft. All rights reserved </p>
      </div>
    </footer>
  );
}

export default Footer;
