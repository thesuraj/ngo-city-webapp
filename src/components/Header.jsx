import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/events', label: 'Events' },
    { path: '/personalities', label: 'Personalities' },
    { 
      path: '/places', label: 'Places To Visit',
      submenu: [
        { name: 'Service 1', href: '/service-1' },
        { name: 'Service 2', href: '/service-2' },
      ],
    },
    { path: '/city-history', label: 'City History' },
    { path: '/my-volunteering', label: 'My Volunteering' }
  ];

  const isActive = (path) => location.pathname === path;
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [openMobileSubmenuIndex, setOpenMobileSubmenuIndex] = useState(null);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <div className="bg-emerald-600 p-2 rounded-lg">
              <Heart className="text-white" size={24} fill="white" />
            </div>
            <span className="text-xl font-bold text-gray-900">My Etawah</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, idx) => (
              <div
                key={`${item.path}-${idx}`}
                className="relative"
                onMouseEnter={() => item.submenu && setOpenDropdownIndex(idx)}
                onMouseLeave={() => item.submenu && setOpenDropdownIndex(null)}
              >
                <Button
                  variant="ghost"
                  className={`${
                    isActive(item.path)
                      ? 'text-emerald-600 bg-emerald-50'
                      : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                  } transition-colors`}
                  onClick={() => navigate(item.path)}
                >
                  {item.label}
                </Button>

                {/* {item.submenu && openDropdownIndex === idx && (
                  <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
                    {item.submenu.map((s, sidx) => (
                      <button
                        key={`${s.href}-${sidx}`}
                        onClick={() => navigate(s.href)}
                        className="w-full text-left px-4 py-2 text-gray-700 hover:bg-emerald-50"
                      >
                        {s.name}
                      </button>
                    ))}
                  </div>
                )} */}

              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item, idx) => (
                <div key={`${item.path}-mobile-${idx}`}>
                  {!item.submenu && (
                    <Button
                      variant="ghost"
                      className={`${
                        isActive(item.path)
                          ? 'text-emerald-600 bg-emerald-50'
                          : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                      } justify-start transition-colors`}
                      onClick={() => {
                        navigate(item.path);
                        setMobileMenuOpen(false);
                      }}
                    >
                      {item.label}
                    </Button>
                  )}

                  {item.submenu && (
                    <div>
                      <Button
                        variant="ghost"
                        className={`${
                          isActive(item.path)
                            ? 'text-emerald-600 bg-emerald-50'
                            : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                        } justify-between w-full transition-colors`}
                        onClick={() => setOpenMobileSubmenuIndex(openMobileSubmenuIndex === idx ? null : idx)}
                      >
                        <span>{item.label}</span>
                      </Button>

                      {openMobileSubmenuIndex === idx && (
                        <div className="pl-4 mt-1 flex flex-col">
                          {item.submenu.map((s, sidx) => (
                            <Button
                              key={`${s.href}-${sidx}`}
                              variant="ghost"
                              className="justify-start text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
                              onClick={() => {
                                navigate(s.href);
                                setMobileMenuOpen(false);
                                setOpenMobileSubmenuIndex(null);
                              }}
                            >
                              {s.name}
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
