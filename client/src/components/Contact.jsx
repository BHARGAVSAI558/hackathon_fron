import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Contact Us</h1>
      <p>If you have any questions or concerns, please don't hesitate to contact us:</p>
      <ul>
        <li>Email: support@propertymanagement.com</li>
        <li>Phone: +91 123-456-7890</li>
        <li>Address: 123 Property Street, Vijayawada, Andhra Pradesh</li>
      </ul>
      <p>We are here to assist you 24/7.</p>
    </div>
  );
};

export default Contact;