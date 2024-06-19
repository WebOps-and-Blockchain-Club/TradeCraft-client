import React, { useState, useRef, useEffect } from 'react';
import './DashboardTabs.css'; // Make sure to create and import your CSS file

const DashboardTabs = () => {
  const [selectedTab, setSelectedTab] = useState('Stocks');
  const stocksRef = useRef(null);
  const mutualFundsRef = useRef(null);
  const [lineStyle, setLineStyle] = useState({});

  const handleTabClick = (tab, ref) => {
    setSelectedTab(tab);
    setLineStyle({
      width: ref.current.offsetWidth,
      left: ref.current.offsetLeft,
    });
  };

  useEffect(() => {
    // Set the initial position of the underline
    if (stocksRef.current) {
      setLineStyle({
        width: stocksRef.current.offsetWidth,
        left: stocksRef.current.offsetLeft,
      });
    }
  }, []);

  return (
    <div className="valign-wrapper" style={{ height: '60px', position: 'relative' }}>
      <div className="dashboardTabsLine" style={lineStyle}></div>
      <div
        ref={stocksRef}
        className={`valign-wrapper dashboardTabsText bodyXLarge ${selectedTab === 'Stocks' ? 'dashboardTabsTextActive' : ''}`}
        onClick={() => handleTabClick('Stocks', stocksRef)}
      >
        Stocks
      </div>
      <div
        ref={mutualFundsRef}
        className={`valign-wrapper dashboardTabsText bodyXLarge ${selectedTab === 'Mutual Funds' ? 'dashboardTabsTextActive' : ''}`}
        onClick={() => handleTabClick('Mutual Funds', mutualFundsRef)}
      >
        Tester
      </div>
    </div>
  );
};

export default DashboardTabs;
