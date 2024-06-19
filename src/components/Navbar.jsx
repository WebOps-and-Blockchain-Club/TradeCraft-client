import React, { useState, useEffect, useRef } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import WalletIcon from '@mui/icons-material/Wallet';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Avatar from '@mui/material/Avatar'; // Import Avatar component from Material-UI

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Function to toggle dropdown state
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Effect to close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    // Add event listener when dropdown is open
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Clean up event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className='navbar' style={{paddingLeft : "20px",backgroundColor :  "",width : "91%"}}>
      <nav className="light-black top-0 left-0 w-full bg-slate-900 z-50 flex justify-between items-center mt-2" style={{ backgroundColor: "rgb(20, 19, 19)", width: "100%" }}>
        <a href="/user">
          <div className="flex justify-between items-center">
            <img src="../../icon.png" alt="Logo" width="60" className="mr-2 " style={{ backgroundColor: "rgb(20, 19, 19)" }} />
            <h1 className="text-white text-2xl font-bold">Tradecraft</h1>
          </div>
        </a>
        <div className="flex justify-between items-center">
          <a href="/user">
            <h1 className="mr-5 text-white hover-green">Explore</h1>
          </a>
          <a href="/investments">
            <h1 className="text-white hover-green">Investments</h1>
          </a>
        </div>
        <div className="flex items-center">
          <div className="light-black grey-border flex items-center bg-slate-800 p-2 rounded-md">
            <SearchIcon style={{ color: 'white' }} />
            <input
              style={{ width: "500px" }}
              placeholder="What are you looking for today?"
              type="text"
              aria-label="search"
              className="light-black bg-transparent text-white outline-none ml-2"
            />
          </div>
        </div>
        <div className="flex items-center relative">
          <a href="/notifications" className="hover-zoom hover-white">
            <NotificationsNoneIcon className="hover-zoom hover-white" style={{ color: 'grey' }} />
          </a>
          <a href="/wallet">
            <WalletIcon style={{ color: 'grey' }} className="icon mr-3 ml-3 hover-white" />
          </a>
          <a href="/cart" className="hover-zoom hover-white">
            <ShoppingCartIcon style={{ color: 'grey' }} className="icon mr-2 ml-3" />
          </a>
          <button
            type="button"
            id="user-menu"
            aria-haspopup="menu"
            aria-expanded={isDropdownOpen}
            onClick={toggleDropdown}
            className="flex items-center ml-3 focus:outline-none"
          >
            <span className="relative flex h-9 w-9 shrink-0 overflow-hidden rounded-full">
              <Avatar
                alt="User Avatar"
                src="" // Replace with your actual avatar image URL
              />
            </span>
            <KeyboardArrowDownIcon style={{ color: 'white' }} className="ml-2" />
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <div className="grey-border light-black absolute right-0 mt-2 w-96 bg-white rounded-md overflow-hidden shadow-lg z-10 max-h-198" ref={dropdownRef}>
                <div className="py-1">
                  <div className="block px-4 py-2 text-lg font-semibold border-b border-gray-300 text-white hover-eerie-black">
                    <h2 className='text-white'>User_name</h2>
                    <p style={{ color: "grey", fontSize: "15px" }}>user@gmail.com</p>
                  </div>
                  <div className='dropdown-cont'>
                    <a href="/user" className="block px-4 py-2 text-sm text-gray-700 hover-eerie-black" style={{ color: "white", borderRadius: "10px", width: "98%", marginLeft: "3px" }}>BANK & AUTOPAY</a>
                    <a href="/user" className="block px-4 py-2 text-sm text-gray-700 hover-eerie-black" style={{ color: "white", borderRadius: "10px", width: "98%", marginLeft: "3px" }}>IMPORTANT FUNDS</a>
                    <a href="/user" className="block px-4 py-2 text-sm text-gray-700 hover-eerie-black" style={{ color: "white", borderRadius: "10px", width: "98%", marginLeft: "3px" }}>WATCHLISTS</a>
                    <a href="/user" className="block px-4 py-2 text-sm text-gray-700 hover-eerie-black" style={{ color: "white", borderRadius: "10px", width: "98%", marginLeft: "3px" }}>ORDERS</a>
                    <a href="/user" className="block px-4 py-2 text-sm text-gray-700 hover-eerie-black" style={{ color: "white", borderRadius: "10px", width: "98%", marginLeft: "3px" }}>REPORTS</a>
                    <a href="/user" className="block px-4 py-2 text-sm text-gray-700 hover-eerie-black " style={{ color: "white", borderRadius: "10px", width: "98%", marginLeft: "3px" }}>SIPS</a>
                    <hr style={{ opacity: "0.5" }} />
                    <a href="/user" className="block px-4 py-2 text-sm text-gray-700 hover-eerie-black" style={{ color: "white", borderRadius: "10px", width: "98%", marginLeft: "3px" }}>CUSTOMER SUPPPORT 24X7</a>
                    <a href="/user" className="block px-4 py-2 text-sm text-gray-700 hover-eerie-black" style={{ color: "white", borderRadius: "10px", width: "98%", marginLeft: "3px" }}>SETTINGS</a>
                    <hr style={{ opacity: "0.5" }} />
                    <a href="/user" className="block px-4 py-2 text-sm text-gray-700 hover-eerie-black" style={{ color: "red" }}>SIGN OUT</a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
      {isDropdownOpen && <div className="backdrop" onClick={() => setIsDropdownOpen(false)}></div>}
    </div>
  );
};

export default Navbar;
