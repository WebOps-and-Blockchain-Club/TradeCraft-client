/* eslint-disable no-unused-vars */
import "./App.css";
import Navbar from "./components/Navbar";
import StockPage from "./pages/StockPage";
import StockInfo from "./components/StockInfo";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { useLocation } from "react-router-dom";
import ListPage from "./pages/ListPage";
import PinPage from "./pages/PinPage";
import Footer from "./components/Footer";
import OIPage from "./pages/OCPage";



function App() {
  const path = useLocation().pathname;
  return (
    <div className="bg-slate-900 min-w-[1200px]">
      {/* {path === ("/" ) ? null : <Navbar />} */}
      <div className=" min-h-screen mb-5">
        <Routes>
          <Route path="/"  element={<LoginPage />} />
          <Route path="/user" element={<StockPage />} />
          <Route path="/pin" element={<PinPage />} />
          <Route path="/oi" element={<OIPage />} />
          <Route path="/stockid" element={<StockInfo />} />
          <Route path="/indexid" element={<StockInfo />} />
          <Route path="/viewall" element={<ListPage />} />
        </Routes>
      </div>
       {path === ("/user" ) ? <Footer /> : null} 
    </div>
  );
}

export default App;
