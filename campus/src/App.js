import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Home from './pages/Home';
import PlacementSection from './pages/PlacementSection';
import AdminDashboard from './pages/AdminDashboard';
import Signup from './auth/Signup';
import Login from './auth/Login';
import ProtectedRoute from './ProtectedRoute';
import AdminRoute from './AdminRoute';
import Recruitment from './pages/Recruitmentcomapny';
function App() {
  return (
    <Router>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }/>
          <Route path="/placements" element={
            <ProtectedRoute>
              <PlacementSection />
            </ProtectedRoute>
          }/>
          <Route path="/recruitment" element={
            <ProtectedRoute>
              <Recruitment />
            </ProtectedRoute>
          }/>
          <Route path="/admin" element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }/>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
