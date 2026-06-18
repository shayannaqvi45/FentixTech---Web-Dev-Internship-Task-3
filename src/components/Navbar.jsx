import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaCamera, FaSearch, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  const linkClass = ({ isActive }) => 
    `px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
      isActive ? 'text-brand-teal' : 'text-gray-500 hover:text-brand-teal'
    }`;

  const mobileLinkClass = ({ isActive }) => 
    `block px-4 py-2 text-base font-semibold transition-colors duration-200 ${
      isActive ? 'bg-teal-50 text-brand-teal' : 'text-gray-600 hover:bg-gray-50 hover:text-brand-teal'
    }`;

  return (
    <nav className="sticky top-0 bg-white border-b border-gray-100 z-50 shadow-sm">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center cursor-pointer" onClick={handleLogoClick}>
            <FaCamera className="text-brand-teal text-3xl mr-2" />
            <span className="text-brand-teal text-2xl font-bold tracking-wider uppercase">Catalog-Z</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/" end className={linkClass}>
              Photos
            </NavLink>
            <NavLink to="/videos" className={linkClass}>
              Videos
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
            <button 
              onClick={() => navigate('/')} 
              className="text-gray-500 hover:text-brand-teal p-2 rounded-full hover:bg-gray-50 transition-colors"
              aria-label="Search"
            >
              <FaSearch className="text-xl" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <button 
              onClick={() => navigate('/')} 
              className="text-gray-500 hover:text-brand-teal p-2 rounded-full hover:bg-gray-50"
              aria-label="Search"
            >
              <FaSearch className="text-lg" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-brand-teal p-2 rounded-md focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 py-2 animate-fadeIn">
          <div className="space-y-1">
            <NavLink to="/" end className={mobileLinkClass} onClick={() => setIsOpen(false)}>
              Photos
            </NavLink>
            <NavLink to="/videos" className={mobileLinkClass} onClick={() => setIsOpen(false)}>
              Videos
            </NavLink>
            <NavLink to="/about" className={mobileLinkClass} onClick={() => setIsOpen(false)}>
              About
            </NavLink>
            <NavLink to="/contact" className={mobileLinkClass} onClick={() => setIsOpen(false)}>
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
