import React, { useState } from 'react';
import { FaSearch, FaUser, FaShoppingBag, FaBars, FaTimes } from 'react-icons/fa';
import { Link, Navigate, useNavigate } from 'react-router-dom';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const routes = [
    { name: 'Home', path: '/' },
    { name: 'Shop All', path: '/shop-all' },
    { name: 'Bestsellers', path: '/best-sellers' },
    { name: 'Collection', path: '/collection' },
    { name: 'About Us', path: '/about' },
    { name: 'Blog', path: '/blog' },
  ];
  const navigate = useNavigate()
  const Cart =() =>{
    navigate('/cart')
  }
  

  return (
    <header className="bg-gray-50 shadow">
      <div className=" mx-auto flex items-center justify-between py-4 px-4 xl:px-[100px] 2xl:px-[200px] md:px-6">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-text-color2">
          <Link to='/'>
          <span className="text-primary-color">Bloom</span> Beauty

          </Link>
        </div>

        {/* Menu Button for Mobile */}
        <button 
          className="lg:hidden text-text-color1 text-2xl focus:outline-none" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          // type='button'
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex space-x-6 text-text-color1">
          {routes.map((route, index) => (
            <Link key={index} to={route.path} className="hover:text-primary-color text-[16px] leading-[24px] font-[400]">
              {route.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Links */}
        <nav 
          className={`fixed top-[63px] left-0 w-full h-full bg-pink-100 flex flex-col p-[20px]  space-y-6 text-text-color1 transition-transform duration-300 ease-in-out transform ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:hidden`}
        >
          {routes.map((route, index) => (
            <Link   onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} key={index} to={route.path} className="text-[16px] leading-[24px] font-[400] hover:text-primary-color">
              {route.name}
            </Link>
          ))}
      
        </nav>

        {/* Icons */}
        <div className="hidden lg:flex items-center space-x-6 text-gray-600">
          <div className="flex flex-col items-center">
            <FaSearch className="text-xl hover:text-primary-color" />
            <span className="text-xs">Search</span>
          </div>
          <div className="flex flex-col items-center">
          <Link to={'/account'} className='flex flex-col items-center'>
          <FaUser className="text-xl hover:text-primary-color" />
          <span className="text-xs">Account</span>
          </Link>
          </div>
          <div onClick={Cart} className="flex flex-col items-center">
            <FaShoppingBag className="text-xl hover:text-primary-color" />
            <span className="text-xs">Cart</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
