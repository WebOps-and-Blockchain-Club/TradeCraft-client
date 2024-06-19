import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StockPage from "./pages/StockPage";
import Stock from "./pages/Stock";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route index element={<StockPage />}  />
          <Route path="/user" element={<StockPage />}  />
          <Route path = "/stockinfo" element = {<Stock />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
