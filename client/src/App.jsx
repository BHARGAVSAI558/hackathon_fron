import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Correct imports
import Home from './components/Home';
import Chatbot from './components/Chatbot';
import Profile from './components/Profile';
import Login from './components/Login';
import Account from './components/Account';
import Register from './components/Register';
import Villa from './components/Villa';
import Flat from './components/Flat';
import Rent from './components/Rent';
import Land from './components/Land';
import DocumentManagement from './components/DocumentManagement';
import TenantOwnerManagement from './components/TenantOwnerManagement';
import PropertyUpload from './components/PropertyUpload';
import Forgot from './components/Forgot';
import About from './components/About';
import Footer from './components/Footer';  
import Navbar from './components/Navbar';
import Hero from './components/Hero';  
import OTP from "./components/OTP"; // Import your OTP component

// PrivateRoute Component for role-based access
const PrivateRoute = ({ children, allowedRoles }) => {
  const userRole = localStorage.getItem('role'); // Get role from localStorage

  if (!userRole || !allowedRoles.includes(userRole)) {
    // If no role or role is not allowed, redirect to login
    return <Login />;
  }

  return children; // Render the allowed route
};

function App() {
  return (
    <div>
      {/* Navbar remains constant */}
      <Navbar />

      {/* Main Content */}
      <div className="content-wrapper">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Hero />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/about" element={<About />} />
          <Route path="/otp" element={<OTP />} />
        
          {/* Role-Based Private Routes */}
          <Route
            path="/documentmanagement"
            element={
              <PrivateRoute allowedRoles={['Admin', 'Buyer', 'Seller']}>
                <DocumentManagement />
              </PrivateRoute>
            }
          />
          <Route
            path="/propertyupload"
            element={
              <PrivateRoute allowedRoles={['Admin', 'Seller']}>
                <PropertyUpload />
              </PrivateRoute>
            }
          />
          <Route
            path="/tenantownermanagement"
            element={
              <PrivateRoute allowedRoles={['Admin']}>
                <TenantOwnerManagement />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute allowedRoles={['Admin', 'Buyer', 'Seller']}>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/account"
            element={
              <PrivateRoute allowedRoles={['Admin']}>
                <Account />
              </PrivateRoute>
            }
          />
          <Route
            path="/villa"
            element={
              <PrivateRoute allowedRoles={['Admin', 'Seller']}>
                <Villa />
              </PrivateRoute>
            }
          />
          <Route
            path="/flat"
            element={
              <PrivateRoute allowedRoles={['Admin', 'Seller']}>
                <Flat />
              </PrivateRoute>
            }
          />
          <Route
            path="/land"
            element={
              <PrivateRoute allowedRoles={['Admin', 'Seller']}>
                <Land />
              </PrivateRoute>
            }
          />
          <Route
            path="/rent"
            element={
              <PrivateRoute allowedRoles={['Admin', 'Buyer', 'Seller']}>
                <Rent />
              </PrivateRoute>
            }
          />
          <Route
            path="/chatbot"
            element={
              <PrivateRoute allowedRoles={['Admin', 'Buyer', 'Seller']}>
                <Chatbot />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>

      {/* Footer remains constant */}
      <Footer />
    </div>
  );
}

export default App;