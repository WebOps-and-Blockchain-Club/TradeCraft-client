/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';

const PerformanceCard = () => {
  return (
    <div className=" text-white p-2 rounded-lg ">
      <h2 className="text-2xl font-bold mb-4">Performance : </h2>
      <div className="flex justify-between items-center mb-2">
        <span>Open</span>
        <span>Prev-Day Close</span>
      </div>
      <div className="flex justify-between items-center mb-6">
        <span className="text-2xl text-bold"  style={{fontWeight : "bold"}}>18.79</span>
        <span className="text-2xl bold" style={{fontWeight : "bold"}}>18.79</span>
      </div>
      <div className="flex justify-between items-center mb-2">
        <span>Today's Low</span>
        <span>Today's High</span>
      </div>
      <div className="flex justify-between items-center mb-6">
        <span className="text-2xl"  style={{fontWeight : "bold"}}>18.79</span>
        <span className="text-2xl"  style={{fontWeight : "bold"}}>18.79</span>
      </div>
      <div className="flex justify-between items-center mb-2">
        <span>52W Low</span>
        <span>52W High</span>
      </div>
      <div className="flex justify-between items-center mb-6">
        <span className="text-2xl"  style={{fontWeight : "bold"}}>18.79</span>
        <span className="text-2xl"  style={{fontWeight : "bold"}}>18.79</span>
      </div>
      <div className="flex justify-between items-center">
        
      </div>
    </div>
  );
};

export default PerformanceCard;
