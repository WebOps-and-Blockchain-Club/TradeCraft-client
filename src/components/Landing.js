import React, { useState } from 'react';

const Landing = () => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const handleLoginClick = () => {
    setShowLoginPopup(true);
  };

  const handleClosePopup = () => {
    setShowLoginPopup(false);
  };

  return (
    <>
      <div className='mt-20'>
        <div className='text-7xl px-8 text-gray-700 text-center'>All things finance,</div>
        <div className=' text-7xl px-8 text-gray-700 text-center'>right here</div>
        <div className=' text-7xl px-8 text-gray-600 text-center'>
          <button onClick={handleLoginClick} className="h-10 text-lg text-center bg-emerald-400 hover:bg-emerald-600 text-white px-4 rounded cursor-pointer">
            Get started
          </button>
        </div>
      </div>

      {showLoginPopup && (
        <div className='fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-30 flex justify-center items-center'>
          <div className='relative z-10 w-3/5 h-3/5 border rounded-lg grid grid-cols-1 lg:grid-cols-2 overflow-hidden'>
            <div className='absolute w-1/2 h-full hidden lg:block bg-emerald-400 text-3xl font-semibold text-white'>
              <p className='pt-16 pl-10'> Simple, Free</p>
              <p className=' pl-10'> Paper Trading.</p>
            </div>
            <div className='absolute h-full w-full lg:left-1/2 lg:w-1/2 bg-white '>
              <div className='px-4 py-4 '>
                <svg className='float-right size-6 stroke-gray-400 cursor-pointer' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" onClick={handleClosePopup}>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
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
    </>
  );
};

export default Landing;