import React, { useState } from 'react';
import { Heart, Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, setCurrentPage }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'career', label: 'Career' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="logo">
          <Heart className="inline-block mr-2" size={24} />
          Ortus Healthcare
        </div>
        {/* Hamburger for mobile */}
        <button
          className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        {/* Desktop menu */}
        <ul className="nav-menu hidden lg:flex">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
              onClick={() => setCurrentPage(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>
        {/* Mobile menu */}
        {menuOpen && (
          <ul className="nav-menu flex flex-col absolute top-20 left-0 w-full bg-white shadow-lg z-50 lg:hidden animate-fadeInUp p-2">
            {navItems.map((item) => (
              <li
                key={item.id}
                className={`nav-item border-b border-gray-100 ${currentPage === item.id ? 'active' : ''}`}
                style={{
                  fontSize: '1rem',
                  padding: '10px 18px',
                  borderRadius: '12px',
                  margin: '4px 0',
                  background: currentPage === item.id ? 'rgba(59,130,246,0.08)' : 'transparent',
                  fontWeight: currentPage === item.id ? 600 : 400,
                  transition: 'background 0.2s',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  setCurrentPage(item.id);
                  setMenuOpen(false);
                }}
                onMouseOver={e => (e.currentTarget.style.background = 'rgba(59,130,246,0.05)')}
                onMouseOut={e => (e.currentTarget.style.background = currentPage === item.id ? 'rgba(59,130,246,0.08)' : 'transparent')}
              >
                {item.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navigation;