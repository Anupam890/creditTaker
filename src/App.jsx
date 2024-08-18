import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Home from './layouts/Home';
import Footer from './layouts/Footer';
import BasketCredit from './layouts/CredDash/BasketCredit';
import AdminComp from './layouts/admin/AdminComp';
import { AuthProvider } from './context/AuthProvider';
import ProtectedRoute from './context/ProtectedRoute';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="basketcredits" element={<BasketCredit />} />
          <Route element={<ProtectedRoute />}>
            <Route path="admin-panel" element={<AdminComp />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;
