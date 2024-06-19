import React, { useState } from 'react';
import './WatchListPopup.css'; // Assuming you have a CSS file for styling

const WatchListPopup = ({ isOpen, onClose, onSave }) => {
  const [watchlistName, setWatchlistName] = useState('');

  const handleSaveClick = () => {
    if (watchlistName.trim()) {
      onSave(watchlistName);
      setWatchlistName('');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-describedby="dialog-description"
      aria-labelledby="dialog-title"
      className="fixed left-[50%] top-[50%] light-black z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg duration-200 text-white bg-slate-950 sm:rounded-lg sm:max-w-[400px]"
      style={{ pointerEvents: 'auto' }}
    >
      <div className="flex  flex-col space-y-1.5 text-center sm:text-left ">
        <h2 id="dialog-title" className="text-lg font-semibold text-center leading-none tracking-tight">
          Create new WatchList
        </h2>
      </div>
      <div className="grid py-4">
        <div className="grid grid-cols-4 items-center">
          <input
            className="flex h-10 w-full rounded-md grey-border bg-background px-3 py-2 text-sm col-span-5 text-black"
            id="name"
            placeholder="Enter name"
            value={watchlistName}
            onChange={(e) => setWatchlistName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
        <button
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 submit-button px-4 py-2 bg-blue-500 hover:bg-blue-900"
          type="button"
          style = {{backgroundColor : "#00B386ff"}}
          onClick={handleSaveClick}
        >
          Save changes
        </button>
      </div>
      <button
        type="button"
        className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100"
        onClick={onClose}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-x h-4 w-4"
        >
          <path d="M18 6 6 18"></path>
          <path d="m6 6 12 12"></path>
        </svg>
        <span className="sr-only">Close</span>
      </button>
    </div>
  );
};

export default WatchListPopup;
