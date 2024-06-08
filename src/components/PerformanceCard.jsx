/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';

const PerformanceCard = () => {
  return (
    <div className="bg-slate-900 text-white p-2 rounded-lg ">
      <h2 className="text-2xl font-bold mb-4">Performance : </h2>
      <div className="flex justify-between items-center mb-2">
        <span>Today's Low</span>
        <span>Today's High</span>
      </div>
      <div className="flex justify-between items-center mb-6">
        <span className="text-2xl">22,789.05</span>
        <span className="text-2xl">23,320.20</span>
      </div>
      <div className="flex justify-between items-center mb-2">
        <span>52W Low</span>
        <span>52W High</span>
      </div>
      <div className="flex justify-between items-center mb-6">
        <span className="text-2xl">18,555.40</span>
        <span className="text-2xl">23,338.70</span>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <div>Open</div>
          <div className="text-2xl">22,821.85</div>
        </div>
        <div>
          <div>Prev. Close</div>
          <div className="text-2xl">22,821.40</div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceCard;
