import React, { useState } from 'react';
import { Box, Typography, Button, TextField, Paper } from '@mui/material';
import './TenantOwnerManagement.css';

const TenantOwnerManagement = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [contract, setContract] = useState('');

  const handleSendMessage = () => {
    if (!message.trim()) return;

    setMessages([...messages, { sender: 'user', text: message }]);
    setMessage('');
    
    // Simulate a bot response (replace with actual logic)
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'owner', text: 'Message received: ' + message },
      ]);
    }, 500);
  };

  const handleUploadContract = (e) => {
    const file = e.target.files[0];
    if (file) {
      setContract(file.name);
      // Here you can handle file upload logic
    }
  };

  return (
    <Box sx={{ padding: 3, backgroundColor: '#f0f4f8', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom>
        Tenant/Owner Management
      </Typography>
      <Typography variant="h6" gutterBottom>
        Streamlined Communication and Contract Handling
      </Typography>
      <Typography variant="body1" paragraph>
        Our platform facilitates effective communication between tenants and property owners. 
        Manage contracts effortlessly and ensure a positive rental experience.
      </Typography>

      <Paper sx={{ padding: 2, marginBottom: 3 }}>
        <Typography variant="h6" gutterBottom>
          Send a Message
        </Typography>
        <TextField
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          variant="outlined"
          placeholder="Type your message..."
          fullWidth
          sx={{ marginBottom: 2 }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSendMessage();
          }}
        />
        <Button onClick={handleSendMessage} variant="contained" color="primary">
          Send
        </Button>
      </Paper>

      <Paper sx={{ padding: 2 }}>
        <Typography variant="h6" gutterBottom>
          Message History
        </Typography>
        <Box sx={{ maxHeight: 300, overflowY: 'auto', border: '1px solid #ddd', padding: 2 }}>
          {messages.map((msg, index) => (
            <Typography
              key={index}
              sx={{
                textAlign: msg.sender === 'user' ? 'right' : 'left',
                marginBottom: 1,
                color: msg.sender === 'user' ? '#3f51b5' : '#000',
              }}
            >
              {msg.sender}: {msg.text}
            </Typography>
          ))}
        </Box>
      </Paper>

      <Paper sx={{ padding: 2, marginTop: 3 }}>
        <Typography variant="h6" gutterBottom>
          Upload Contract
        </Typography>
        <input type="file" accept=".pdf,.doc,.docx" onChange={handleUploadContract} />
        {contract && <Typography variant="body1" sx={{ marginTop: 2 }}>Uploaded Contract: {contract}</Typography>}
      </Paper>
    </Box>
  );
};

export default TenantOwnerManagement;
