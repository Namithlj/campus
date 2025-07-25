// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Home from './pages/Home';
import PlacementSection from './pages/PlacementSection';
import AdminDashboard from './pages/AdminDashboard';
import Signup from './auth/Signup';
import Login from './auth/Login';
import Recruitment from './pages/Recruitmentcomapny';
import ProtectedRoute from './auth/ProtectedRoute';
import './index.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="min-h-screen pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/placements"
            element={
              <ProtectedRoute allowedRoles={['USER', 'ADMIN']}>
                <PlacementSection />
              </ProtectedRoute>
            }
          />
          <Route
            path="/recruitment"
            element={
              <ProtectedRoute allowedRoles={['USER', 'ADMIN']}>
                <Recruitment />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={['ADMIN']}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
