// src/pages/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();

  const renderLinks = () => {
    if (!user) {
      return (
        <>
                      <Link to="/" className="hover:text-amber-300 transition font-medium">
              Home
            </Link>
 
          <Link to="/login" className="hover:text-blue-300 transition font-medium">
            Login
          </Link>
          <Link to="/signup" className="hover:text-blue-300 transition font-medium">
            Signup
          </Link>
        </>
      );
    }

    switch (user.role) {
      case 'USER':
        return (
          <>
           <Link to="/recruitment" className="hover:text-amber-300 transition font-medium">
              Recruitment
            </Link>
            <Link to="/placements" className="hover:text-amber-300 transition font-medium">
              Placements
            </Link>
 
            <button
              onClick={logout}
              className="bg-sky-600 hover:bg-sky-700 text-white px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        );

      case 'ADMIN':
        return (
          <>
            <Link to="/admin" className="hover:text-amber-300 transition font-medium">
              Admin Dashboard
            </Link>
            <Link to="/recruitment" className="hover:text-amber-300 transition font-medium">
              Recruitment
            </Link>
            <Link to="/placements" className="hover:text-amber-300 transition font-medium">
              Placements
            </Link>
            <button
              onClick={logout}
              className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        );

      default:
        return (
          <button
            onClick={logout}
            className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded"
          >
            Logout
          </button>
        );
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <Link to="/" className="text-xl font-semibold tracking-wide hover:text-blue-400 transition duration-200">
        🎓 Placement Portal
      </Link>
      <div className="flex gap-4 items-center">{renderLinks()}</div>
    </nav>
  );
};

export default Header;
