import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, setCurrentPage }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services', hasDropdown: true },
    { id: 'career', label: 'Career' },
    { id: 'contact', label: 'Contact' }
  ];

  const serviceItems = [
    { id: 'cro-development', label: 'CRO & Site Development' },
    { id: 'project-management', label: 'Project Management' },
    { id: 'medical-writing', label: 'Medical Writing' },
    { id: 'translation-services', label: 'Translation Services' },
    { id: 'regulatory-services', label: 'Regulatory Services' },
    { id: 'clinical-services', label: 'Clinical Services' },
    { id: 'pathology-lab', label: 'Central Pathology Lab' },
    { id: 'auditing-monitoring', label: 'Auditing & Monitoring' },
    { id: 'training', label: 'Training' },
    { id: 'pharmacokinetics-biostatistics', label: 'PK & Biostatistics' }
  ];

  const handleServiceClick = (serviceId: string) => {
    setCurrentPage(serviceId);
    setServicesDropdownOpen(false);
    setMenuOpen(false);
  };

  const handleServicesMainClick = () => {
    setCurrentPage('services');
    setServicesDropdownOpen(false);
    setMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Ortus Healthcare" className="h-14 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-12">
            {navItems.map((item) => (
              <div key={item.id} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="flex items-center space-x-1 px-3 py-3 text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-200"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <span 
                      className="hover:text-blue-600 transition-colors duration-200"
                      onClick={handleServicesMainClick}
                    >
                      {item.label}
                    </span>
                    <ChevronDown className="w-4 h-4" />
                    
                    {/* Services Dropdown */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                        <div className="p-4">
                          <div className="grid grid-cols-1 gap-2">
                            {serviceItems.map((service) => (
                              <button
                                key={service.id}
                                className="text-left px-3 py-3 text-base text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-full transition-colors duration-200"
                                onClick={() => handleServiceClick(service.id)}
                              >
                                {service.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    className={`px-4 py-3 text-base font-medium rounded-full transition-colors duration-200 ${
                      currentPage === item.id
                        ? 'text-white'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                    style={currentPage === item.id ? { backgroundColor: '#1a237e' } : {}}
                    onClick={() => setCurrentPage(item.id)}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              className="p-2 rounded-full text-gray-700 hover:text-blue-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navItems.map((item) => (
                <div key={item.id}>
                  {item.hasDropdown ? (
                    <div>
                      <div className="flex items-center justify-between px-3 py-3 text-gray-700 font-medium">
                        <span 
                          className="cursor-pointer hover:text-blue-600 transition-colors duration-200"
                          onClick={handleServicesMainClick}
                        >
                          {item.label}
                        </span>
                        <ChevronDown 
                          className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`}
                          onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                        />
                      </div>
                      {servicesDropdownOpen && (
                        <div className="ml-4 border-l-2 border-gray-200 pl-4">
                          {serviceItems.map((service) => (
                            <button
                              key={service.id}
                              className="block w-full text-left px-3 py-3 text-base text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-full transition-colors duration-200"
                              onClick={() => handleServiceClick(service.id)}
                            >
                              {service.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      className={`w-full text-left px-3 py-3 text-base font-medium rounded-full transition-colors duration-200 ${
                        currentPage === item.id 
                          ? 'text-white' 
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                      style={currentPage === item.id ? { backgroundColor: '#1a237e' } : {}}
                      onClick={() => {
                        setCurrentPage(item.id);
                        setMenuOpen(false);
                      }}
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;