import React from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 bg-neutral-900/50 text-white">
      <div className="container px-4 mx-auto relative text-sm">
        {/* Main Nav Row */}
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight font-semibold">VirtualR</span>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href} 
                  className="text-neutral-300 hover:text-orange-500 transition duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
          href="#"
          className="relative overflow-hidden py-2 px-4 mx-3 rounded-md border border-neutral-700 text-neutral-300 hover:text-white group transition-colors duration-300"
        >
          <span className="absolute bottom-0 left-0 w-full h-0 bg-linear-to-r from-orange-500 to-orange-800 transition-all duration-300 ease-out group-hover:h-full -z-10" />
          <span className="relative z-10">Sign in</span>
        </a>
             <a
          href="#"
          className="relative overflow-hidden bg-linear-to-r from-orange-500 to-orange-800 py-2 px-4 mx-3 rounded-md text-white font-medium group"
        >
          <span className="absolute top-0 -inset-full h-full w-1/2 block bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg] transition-all duration-700 ease-out -translate-x-full group-hover:translate-x-[300%]" />

          <span className="relative z-10">Sign up</span>
        </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button onClick={toggleNavbar} className="text-neutral-300 hover:text-white transition duration-200 focus:outline-none">
              {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="fixed inset-x-0 top-[60px] z-50 bg-neutral-900/95 backdrop-blur-xl w-full p-8 flex flex-col justify-center items-center lg:hidden border-b border-neutral-800 animate-in fade-in slide-in-from-top-5 duration-200">
            <ul className="w-full text-center mb-6">
              {navItems.map((item, index) => (
                <li key={index} className="py-3">
                  <a 
                    href={item.href} 
                    className="text-base text-neutral-300 hover:text-orange-500 block w-full py-2 transition duration-200"
                    onClick={() => setMobileDrawerOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row w-full gap-4 justify-center items-center">
              <a href="#" className="w-full sm:w-auto text-center py-2 px-6 border border-neutral-500 rounded-md hover:bg-neutral-800 transition duration-200">
                Sign In
              </a>
              <a href="#" className="w-full sm:w-auto text-center bg-linear-to-r from-orange-500 to-orange-800 py-2 px-6 rounded-md hover:opacity-90 transition duration-200">
                Start for free
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
