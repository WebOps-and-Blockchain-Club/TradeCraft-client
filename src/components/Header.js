import React, { useState} from 'react';

const Header = () => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const handleLoginClick = () => {
    setShowLoginPopup(true);
  };

  return (
    <header className="relative py-2 w-full">
      <nav className="container mx-auto grid grid-cols-1 lg:grid-cols-3">
        <div className="h-10 flex justify-center text-gray-600 font-bold text-3xl items-center my-2">
          TradeCraft
        </div>
        <div className='flex justify-center items-center my-2'>
          <div className='flex h-10 border border-gray-200 rounded items-center w-3/4 lg:w-5/6 overflow-hidden'>
            <div className='px-3'>
              <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#64748b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <input type="text" placeholder='What are you looking for today?' className="w-80 py-1 focus:outline-none search-bar"></input>
          </div>
        </div>
        <div className='flex justify-center items-center my-2'>
          <button onClick={handleLoginClick} className="h-10 text-center bg-emerald-400 hover:bg-emerald-600 text-white px-4 rounded cursor-pointer">
            Login/Register
          </button>
        </div>
      </nav>

      {showLoginPopup && (
        <div  className='absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-30'>
          <div className='absolute top-1/5 left-1/5 z-10 w-3/5 h-3/5 border rounded-lg grid grid-cols-1 lg:grid-cols-2 overflow-hidden'>
            <div className='absolute w-1/2 h-full hidden lg:block bg-emerald-400 text-3xl font-semibold text-white'>
              <p className='pt-16 pl-10'> Simple, Free</p>
              <p className=' pl-10'> Paper Trading.</p>
            </div>
            <div className='absolute h-full w-full lg:left-1/2 lg:w-1/2 bg-white '>
              <div className='px-4 py-4 '>
                <svg className='float-right size-6 stroke-gray-400' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" onClick={() => setShowLoginPopup(false)}>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </div>
              <div className='text-center text-2xl py-10 text-gray-700 font-bold'>Welcome to TradeCraft</div>
              <div className='text-center text-lg py-10 text-gray-700'>
                <p>Just click on continue</p>
                <p>Authentication part is left</p>
              </div>
              <button className="absolute top-4/5 h-10 mx-1/10 w-4/5 text-center bg-emerald-400 hover:bg-emerald-600 text-white px-4 rounded cursor-pointer">Continue</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;