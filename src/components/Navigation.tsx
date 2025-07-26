import React from 'react';
import { Heart } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, setCurrentPage }) => {
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
        <ul className="nav-menu">
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
      </div>
    </nav>
  );
};

export default Navigation;