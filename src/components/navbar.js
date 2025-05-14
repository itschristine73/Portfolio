import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="p-4 flex justify-between items-center text-fadedWhite animated-gradient sticky top-0 z-30">
      
      {/* Logo / Brand Name */}
      <a className="text-4xl font-bold" href='/'>Sneha Biswakarma</a>
      
      {/* Hamburger Icon for Mobile */}
      <div className="lg:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      
      {/* Desktop Navbar Links */}
      <div className="hidden lg:flex space-x-4">
        <a href="#about" className="text-xl transition-all">About</a>
        <a href="#education" className="text-xl transition-all">Education</a>
        <a href="#projects" className="text-xl transition-all">Projects</a>
      </div>

      {/* Mobile Navbar Links */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-2/3 h-full bg-[#1a0000]/90 p-6 space-y-6 transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500 ease-in-out z-50`}
      >
        <div className="flex justify-end">
          <button onClick={() => setMenuOpen(false)} className="text-3xl">
            <FaTimes />
          </button>
        </div>
        <div className="space-y-4 text-lg font-medium flex flex-col gap-2">
          <a href="#about" onClick={() => setMenuOpen(false)} className="text-white hover:text-grungeRed transition">About</a>
          <a href="#education" onClick={() => setMenuOpen(false)} className="text-white hover:text-grungeRed transition">Education</a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="text-white hover:text-grungeRed transition">Projects</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
