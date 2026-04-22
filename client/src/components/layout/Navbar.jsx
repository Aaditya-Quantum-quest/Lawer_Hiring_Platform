import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#f8f9fc]/80 dark:bg-[#191c1e]/80 backdrop-blur-xl shadow-none shadow-[0_12px_40px_rgba(25,28,30,0.06)] border-b border-white/20">
      <div className="flex justify-between items-center px-4 sm:px-6 lg:px-12 py-4 sm:py-5 w-full mx-auto max-w-screen-2xl">
        {/* Brand */}
        <Link to="/" className="text-xl sm:text-2xl text-[#1A2B5F] dark:text-[#f8f9fc] font-headline tracking-widest uppercase">
          The Digital Jurisconsult
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link to="/" className="text-[#1A2B5F] dark:text-[#e6c364] font-medium border-b-2 border-[#C9A84C] pb-1 hover:text-[#C9A84C] transition-all duration-300">
            Home
          </Link>
          <Link to="/search" className="text-[#191c1e]/70 dark:text-[#f8f9fc]/70 pb-1 hover:text-[#C9A84C] transition-all duration-300">
            Find Lawyers
          </Link>
          <Link to="/" className="text-[#191c1e]/70 dark:text-[#f8f9fc]/70 pb-1 hover:text-[#C9A84C] transition-all duration-300">
            Courts
          </Link>
          <Link to="/" className="text-[#191c1e]/70 dark:text-[#f8f9fc]/70 pb-1 hover:text-[#C9A84C] transition-all duration-300">
            Legal News
          </Link>
          <Link to="/" className="text-[#191c1e]/70 dark:text-[#f8f9fc]/70 pb-1 hover:text-[#C9A84C] transition-all duration-300">
            About
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          <div className="hidden sm:flex space-x-4">
            <button className="text-[#1A2B5F] dark:text-[#dce1ff] hover:text-[#C9A84C] transition-colors flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px] sm:text-[24px]">language</span>
            </button>
            <button className="text-[#1A2B5F] dark:text-[#dce1ff] hover:text-[#C9A84C] transition-colors flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px] sm:text-[24px]">notifications</span>
            </button>
          </div>
          <Link to="/register" className="hidden sm:block bg-navy-gradient text-on-primary px-5 sm:px-6 py-2 sm:py-2.5 rounded text-sm sm:text-base hover:opacity-90 transition-opacity font-medium tracking-wide">
            Post a Case
          </Link>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-[#1A2B5F] dark:text-[#f8f9fc] hover:text-[#C9A84C] transition-colors p-2">
            <span className="material-symbols-outlined text-[28px]">menu</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
