import React from "react";

const Footer = () => {
  return (
    <div className="footer-container" style={{ padding: "40px",backgroundColor : "" }}>
      <footer className="footer text-gray-400 py-10">
        <div className="container mx-auto px-4 flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <a href="/user">
          <div className="flex justify-between items-center">
            <img src="../../icon.png" alt="Logo" width="60" className="mr-2 " style={{ backgroundColor: "rgb(20, 19, 19)" }} />
           
          </div>
        </a>
            <h2 className="text-white text-2xl mb-4">TradeCraft</h2>
            <address>
              Center For Innovation,
              <br />
              IIT Madras, Chennai
              <br />
              Tamil Nadu - 600036
              <br />
              <a className="text-blue-500" href="mailto:cfi@iitm.ac.in">
                Contact Us
              </a>
            </address>
            <div className="mt-4 flex space-x-3">
              <a
                href="https://www.instagram.com/webopsblockchainclub_iitm/"
                className="text-gray-400 hover:text-white"
              >
                {" "}
                <img
                  className=""
                  src="//assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/instagram_icon_groww.f8c7d006.svg"
                  width="40"
                  height="30"
                  alt="Groww Instagram Page"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/webopsblockchainclub-iitm/mycompany/"
                className="text-gray-400 hover:text-white"
              >
                {" "}
                <img
                  className=""
                  src="//assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/linkedin_icon_groww.a0c17280.svg"
                  width="40"
                  height="30"
                  alt="Groww Linkedin Page"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-white text-xl mb-4">Products</h3>
            <ul>
              <li>
                <a
                  className="hover:text-white text-gray-400 hover:text-white"
                  href="/user"
                >
                  Stocks
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white text-gray-400 hover:text-white"
                  href="/user"
                >
                  Futures & Options
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white text-gray-400 hover:text-white"
                  href="/user"
                >
                  IPO
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white text-gray-400 hover:text-white"
                  href="/user"
                >
                  Mutual Funds
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white text-gray-400 hover:text-white"
                  href="/user"
                >
                  NFO
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-white text-xl mb-4">TradeCraft</h3>
            <ul>
              <li>
                <a
                  className="hover:text-white text-gray-400 hover:text-white"
                  href="/user"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white text-gray-400 hover:text-white"
                  href="/user"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white text-gray-400 hover:text-white"
                  href="/user"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white text-gray-400 hover:text-white"
                  href="/user"
                >
                  Media & Press
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white text-gray-400 hover:text-white"
                  href="/user"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white text-gray-400 hover:text-white"
                  href="/user"
                >
                  Help and Support
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white text-gray-400 hover:text-white"
                  href="/user"
                >
                  Trust and Safety
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-white text-xl mb-4">Quick Links</h3>
            <ul>
              <li>
                <a
                  className="hover:text-white text-gray-400 hover:text-white"
                  href="/user"
                >
                  AMC Mutual Funds
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white text-gray-400 hover:text-white"
                  href="/user"
                >
                  Calculators
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white text-gray-400 hover:text-white"
                  href="/user"
                >
                  Glossary
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white text-gray-400 hover:text-white"
                  href="/user"
                >
                  Open Demat Account
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white text-gray-400 hover:text-white"
                  href="/user"
                >
                  Groww Digest
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white text-gray-400 hover:text-white"
                  href="/user"
                >
                  Sitemap
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white text-gray-400 hover:text-white"
                  href="/user"
                >
                  Income Tax Calculator
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-10 border-t border-gray-700 pt-4 text-center" >
          <p className="text-center" style={{ textAlign: "center" }}>
            © 2023-2025 TradeCraft. All rights reserved, built with ❤️ in C
            <a href="https://cfi.iitm.ac.in/" className="text-red-500" style={{ color: "red" }}>Φ</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
