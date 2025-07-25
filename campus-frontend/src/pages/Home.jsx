import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to the Placement Portal</h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Empowering students, streamlining recruitment, and simplifying placement management.
        </p>
        <div className="flex justify-center gap-6">
          <Link to="/placements">
            <button className="bg-blue-900 text-white px-6 py-3 rounded-full shadow hover:bg-blue-800 transition">
              Explore Placements
            </button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
        <p className="text-gray-700 text-lg">
          Our Placement Portal is designed for final-year engineering students to track placement activities,
          apply to company drives, and manage interviews efficiently. Built with modern tech to support
          admin coordination and staff workflow in real-time.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-12 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">Key Features</h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">📋 Placement Tracker</h3>
            <p className="text-gray-600">Track company offers, packages, and eligibility in one place.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">🧑‍💻 Recruitment Management</h3>
            <p className="text-gray-600">Admins can add recruitment rounds, staff can update statuses.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">🔐 Role-Based Access</h3>
            <p className="text-gray-600">Secure login with JWT and access based on user roles.</p>
          </div>
        </div>
      </section>

      {/* Role Highlights */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Access for All Roles</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
          <div className="bg-blue-100 text-blue-800 p-6 rounded-xl w-full text-center shadow">
            <h3 className="text-xl font-bold mb-2">User</h3>
            <p>Apply to companies, track placements</p>
          </div>
          <div className="bg-red-100 text-red-800 p-6 rounded-xl w-full text-center shadow">
            <h3 className="text-xl font-bold mb-2">Admin</h3>
            <p>Add new companies, and update & view stats and charts.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
