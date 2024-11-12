// import React from 'react';
// import {Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import Header from './components/layouts/Header';
// import Footer from './components/layouts/Footer';

// function App() {
// return (
// <>
// <Header />
// <Routes>
// <Route path="/" element={<Home />} />
// <Route path="/about" element={<About />} />
// </Routes>
// <Footer/>
// </>

// );
// }

// export default App;

// src/App.js
import React from "react";
import { Routes, Route, Link } from "react-router-dom"; // Import Route and Link
import Home from "./pages/Home"; // Import the Home component
import About from "./pages/About"; // Import the About component
import Account from "./pages/Account"; // Import the Account component
import Header from "./components/layouts/Header"; // Import Header component
import Footer from "./components/layouts/Footer"; // Import Footer component

function App() {
  return (
    <>
      <Header />
      <nav className="bg-gray-800 p-4">
        <ul className="flex space-x-6 text-white">
          <li>
            <Link to="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/account" className="hover:text-gray-400">
              Account
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/about" element={<About />} /> {/* About route */}
        <Route path="/account" element={<Account />} /> {/* Account route */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
