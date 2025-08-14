import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 dark:from-gray-900 dark:to-gray-800 text-white py-20 px-6 text-center rounded-b-3xl shadow-lg transition-colors duration-300">
        <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">Welcome to Your Campus Placement Portal</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Discover opportunities, connect with recruiters, and take the next step in your career journey. We’re here to make placements simple, transparent, and empowering for every student.
        </p>
        <div className="flex justify-center gap-6">
          <Link to="/placements">
            <button className="bg-blue-900 dark:bg-blue-950 text-white px-8 py-4 rounded-full shadow-lg hover:bg-blue-800 dark:hover:bg-blue-900 transition font-semibold text-lg">
              Explore Placements
            </button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-blue-700 dark:text-blue-300">Who We Are</h2>
        <p className="text-gray-800 dark:text-gray-200 text-lg">
          Our portal is built for final-year engineering students, helping you track placement drives, apply to top companies, and manage interviews with ease. We support admins and staff with real-time tools for smooth coordination and up-to-date stats.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-12 px-6 bg-white dark:bg-gray-900 bg-opacity-80 dark:bg-opacity-80 rounded-2xl shadow-lg max-w-6xl mx-auto transition-colors duration-300">
        <h2 className="text-3xl font-bold text-center mb-10 text-indigo-700 dark:text-indigo-300">What You Can Do Here</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <Link to="/placements" className="bg-blue-50 dark:bg-blue-950 p-8 rounded-xl shadow hover:shadow-xl transition block">
            <h3 className="text-xl font-semibold mb-3 text-blue-700 dark:text-blue-300">📋 Placement Tracker</h3>
            <p className="text-gray-700 dark:text-gray-200">See all company offers, packages, and eligibility in one place.</p>
          </Link>
          <Link to="/recruitment" className="bg-indigo-50 dark:bg-indigo-950 p-8 rounded-xl shadow hover:shadow-xl transition block">
            <h3 className="text-xl font-semibold mb-3 text-indigo-700 dark:text-indigo-300">🧑‍💻 Recruitment Management</h3>
            <p className="text-gray-700 dark:text-gray-200">Admins and staff can add rounds, update statuses, and keep everyone informed.</p>
          </Link>
          <Link to="/login" className="bg-pink-50 dark:bg-pink-950 p-8 rounded-xl shadow hover:shadow-xl transition block">
            <h3 className="text-xl font-semibold mb-3 text-pink-700 dark:text-pink-300">🔐 Secure Login</h3>
            <p className="text-gray-700 dark:text-gray-200">Sign in safely and get access based on your role—student, admin, or staff.</p>
          </Link>
        </div>
      </section>

      {/* Role Highlights */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-700 dark:text-blue-300">How You’ll Use the Portal</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
          <Link to="/placements" className="bg-blue-100 dark:bg-blue-950 text-blue-900 dark:text-blue-200 p-8 rounded-xl w-full text-center shadow hover:shadow-lg transition font-semibold">
            <h3 className="text-xl font-bold mb-2">Students</h3>
            <p>Apply to companies, track your placement status, and stay updated on new drives.</p>
          </Link>
          <Link to="/admin" className="bg-red-100 dark:bg-red-950 text-red-900 dark:text-red-200 p-8 rounded-xl w-full text-center shadow hover:shadow-lg transition font-semibold">
            <h3 className="text-xl font-bold mb-2">Admins</h3>
            <p>Add new companies, manage stats, and view placement charts for your campus.</p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;