import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import WatchListPopup from './WatchListPopup';
import "./WatchList.css";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [watchlists, setWatchlists] = useState([
    { name: 'WatchList 1', expanded: false },
    { name: 'WatchList 2', expanded: false }
  ]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSaveWatchlist = (name) => {
    setWatchlists([...watchlists, { name, expanded: false }]);
    closeModal();
  };

  const toggleExpand = (index) => {
    setWatchlists(watchlists.map((watchlist, i) => (
      i === index ? { ...watchlist, expanded: !watchlist.expanded } : watchlist
    )));
  };

  return (
    <div className="app-container" style={{backgroundColor : "rgb(20, 19, 19)"}}>
      <div className="flex justify-between items-center mt-6" >
        <div className="text-xl font-bold">All Watchlists</div>
        <a href="/watchlist"><div className="text-green-500" style={{fontSize : "20px",paddingRight : "50px"}}>View all</div></a>
      </div>
      <div className="watchlist-container" >
        {watchlists.map((watchlist, index) => (
          <div key={index} className="watchlist-card black-border " style={{backgroundColor : "rgb(20, 19, 19)"}} >
            <div className="header watchlist-contents flex justify-between items-center " onClick={() => toggleExpand(index)}>
              <h2 style={{fontSize : "20px"}}>{watchlist.name}</h2>
              <KeyboardArrowDownIcon className={watchlist.expanded ? "rotate-icon" : ""} />
            </div>
            {watchlist.expanded && (
              <div className="watchlist-content ">
                <p style={{fontSize : "20px",padding:"20px"}}>
                  Watchlist items
                </p>
              </div>
            )}
          </div>
        ))}
        <div className="create-watchlist-button black-border" style={{marginTop : "30px",width : "400px",backgroundColor : "rgb(20, 19, 19)"}}>
          <button
            onClick={openModal}
            className={`p-[1px] rounded-full ${isModalOpen ? "text-green-500" : "hover:bg-gray-500"}`}
          >
            <AddCircleOutlineIcon />
          </button>
          <span style={{paddingRight : "120px", color: "#45F6CCff" }}>Create New Watchlist</span>
        </div>
      </div>

      {isModalOpen && <div className="modal-overlay"></div>}

      <WatchListPopup
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={handleSaveWatchlist}
      />
    </div>
  );
};

export default App;
