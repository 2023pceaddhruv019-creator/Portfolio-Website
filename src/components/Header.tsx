import React, { useState } from 'react';
import { ArrowUpRight, Menu, X, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate, useLocation } from 'react-router-dom';

interface HeaderProps {
  onContactClick: () => void;
}

export default function Header({ onContactClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'Services', link: '/#services' },
    { name: 'Works', link: '/#works' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '#contact' }
  ] as const;

  // Determine active item based on actual pathname
  const activeTab = location.pathname === '/about' ? 'About' : 'Home';

  const handleItemClick = (name: typeof menuItems[number]['name']) => {
    if (name === 'Contact') {
      onContactClick();
      return;
    }

    if (name === 'About') {
      navigate('/about');
      return;
    }

    if (name === 'Home') {
      navigate('/', { state: { scrollTo: 'top' } });
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (name === 'Services' || name === 'Works') {
      const targetId = name.toLowerCase();
      if (location.pathname !== '/') {
        // Redirect to homepage and pass transition scrolling target
        navigate('/', { state: { scrollTo: targetId } });
      } else {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-8 py-4 bg-black/35 backdrop-blur-md border-b border-zinc-950/45">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Name */}
        <div 
          onClick={() => navigate('/')} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative w-8 h-8 flex items-center justify-center">
            {/* Custom high fidelity logo matching the red/white double crescent overlap */}
            <svg viewBox="0 0 100 100" className="w-7 h-7 transform group-hover:rotate-12 transition-transform duration-300">
              {/* Outer Left Crescent / Red circle */}
              <circle cx="42" cy="50" r="30" fill="#ff1a1a" className="opacity-95" />
              {/* Inner Right Crescent / Dark/White overlap overlay */}
              <path d="M 58 20 A 30 30 0 0 0 58 80 A 30 30 0 0 1 58 20" fill="#ffffff" />
              {/* Core design elements */}
              <circle cx="50" cy="50" r="10" fill="#000000" />
            </svg>
          </div>
          <span className="font-display font-semibold tracking-tight text-lg sm:text-xl text-white group-hover:text-brand-red transition-colors">
            Dhruv Singh Rawat
          </span>
        </div>

        {/* Center Navigation Capsule - Desktop */}
        <nav className="hidden md:flex items-center bg-black/40 backdrop-blur-md border border-zinc-800/50 px-1.5 py-1.5 rounded-full shadow-lg shadow-black/40">
          <ul className="flex items-center gap-1 font-sans text-xs tracking-wide">
            {menuItems.map((item) => {
              const isActive = activeTab === item.name;
              return (
                <li key={item.name}>
                  <button
                    onClick={() => handleItemClick(item.name)}
                    className={`relative px-4 py-1.5 rounded-full font-medium transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? 'text-white bg-brand-red font-semibold shadow-inner' 
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
                    }`}
                  >
                    {item.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Action Button - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onContactClick}
            className="flex items-center gap-1 bg-brand-red hover:bg-brand-red-dark text-white px-5 py-2 rounded-full text-sm font-semibold tracking-wide shadow-lg shadow-brand-red/10 hover:shadow-brand-red/20 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            <span>Hire Me</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Hamburger - Mobile */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-400 hover:text-white bg-zinc-900/40 border border-zinc-800 rounded-full transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-black/95 border-b border-zinc-800 px-6 py-6 md:hidden shadow-2xl flex flex-col gap-4"
          >
            <ul className="flex flex-col gap-3 font-sans text-sm font-medium tracking-wide">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => {
                      handleItemClick(item.name);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 rounded-lg transition-colors cursor-pointer ${
                      activeTab === item.name 
                        ? 'text-white bg-brand-red font-semibold' 
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-900/40'
                    }`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
            <div className="h-[1px] bg-zinc-800 my-2" />
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white py-3 rounded-lg text-sm font-semibold tracking-wide transition-colors duration-300 w-full"
            >
              <span>Hire Me</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
