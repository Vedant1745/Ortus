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
                  padding: '12px 18px',
                  borderRadius: '8px',
                  margin: '4px 0',
                  background: currentPage === item.id ? 'rgba(26, 35, 126, 0.1)' : 'transparent',
                  fontWeight: currentPage === item.id ? 600 : 500,
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                  color: currentPage === item.id ? '#1a237e' : '#374151',
                }}
                onClick={() => {
                  setCurrentPage(item.id);
                  setMenuOpen(false);
                }}
                onMouseOver={e => {
                  if (currentPage !== item.id) {
                    e.currentTarget.style.background = 'rgba(26, 35, 126, 0.05)';
                    e.currentTarget.style.color = '#1a237e';
                  }
                }}
                onMouseOut={e => {
                  if (currentPage !== item.id) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#374151';
                  }
                }}
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