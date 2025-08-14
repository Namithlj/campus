import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains('dark')
  );

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(document.documentElement.classList.contains('dark'));
  };

  const renderLinks = () => {
    if (!user) {
      return (
        <>
          <Link to="/" className="hover:text-amber-300 transition font-medium px-3 py-1 rounded">
            Home
          </Link>
          <Link to="/login" className="hover:text-blue-300 transition font-medium px-3 py-1 rounded">
            Login
          </Link>
          <Link to="/signup" className="hover:text-blue-300 transition font-medium px-3 py-1 rounded">
            Signup
          </Link>
        </>
      );
    }

    switch (user.role) {
      case 'USER':
        return (
          <>
            <Link to="/recruitment" className="hover:text-amber-300 transition font-medium px-3 py-1 rounded">
              Recruitment
            </Link>
            <Link to="/placements" className="hover:text-amber-300 transition font-medium px-3 py-1 rounded">
              Placements
            </Link>
            <button
              onClick={logout}
              className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded shadow transition"
            >
              Logout
            </button>
          </>
        );

      case 'ADMIN':
        return (
          <>
            <Link to="/admin" className="hover:text-amber-300 transition font-medium px-3 py-1 rounded">
              Admin Dashboard
            </Link>
            <Link to="/recruitment" className="hover:text-amber-300 transition font-medium px-3 py-1 rounded">
              Recruitment
            </Link>
            <Link to="/placements" className="hover:text-amber-300 transition font-medium px-3 py-1 rounded">
              Placements
            </Link>
            <button
              onClick={logout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded shadow transition"
            >
              Logout
            </button>
          </>
        );

      default:
        return (
          <button
            onClick={logout}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded shadow transition"
          >
            Logout
          </button>
        );
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-900 to-indigo-900 dark:from-gray-900 dark:to-gray-800 text-white px-8 py-5 flex justify-between items-center shadow-lg transition-colors duration-300">
      <Link to="/" className="text-2xl font-bold tracking-wide hover:text-blue-400 transition duration-200">
         Placement Portal
      </Link>
      <div className="flex gap-2 items-center">
        {renderLinks()}
        <button
          onClick={toggleDarkMode}
          className="ml-4 px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 transition"
        >
          {isDark ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>
    </nav>
  );
};

export default Header;