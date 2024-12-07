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
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
function App() {
  return (
    <div>
      {/* Navbar remains constant */}
      <Navbar />

      {/* Main Content */}
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/villa" element={<Villa />} />
          <Route path="/flat" element={<Flat />} />
          <Route path="/land" element={<Land />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/profile" element={<Profile />} />
          
          <Route path="/account" element={<Account />} />
          <Route path="/documentmanagement" element={<DocumentManagement />} />
          <Route path="/propertyupload" element={<PropertyUpload />} />
          <Route path="/tenantownermanagement" element={<TenantOwnerManagement />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termsofservice" element={<TermsOfService />} />
        </Routes>
      </div>

      {/* Footer remains constant */}
      <Footer />
    </div>
  );
}

export default App;