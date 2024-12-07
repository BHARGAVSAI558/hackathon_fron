import React, { useState, useRef, useEffect } from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I assist you today?' },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const responses = {
    property: 'You can manage your properties in the Property Management section.',
    document: 'Upload and manage your documents in the Document Management section.',
    tenant: 'For tenant-related queries, check the Tenant Management section.',
    default: "I'm sorry, I don't quite understand. Please rephrase or contact support.",
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);

    const response = Object.keys(responses).find((key) => input.toLowerCase().includes(key));
    const botResponse = response ? responses[response] : responses.default;

    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: botResponse }]);
    }, 500);

    setInput('');
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="70vh">
      <Paper
        elevation={4}
        sx={{
          padding: 3,
          backgroundColor: '#f9f9f9',
          borderRadius: 2,
          width: '350px',
        }}
      >
        <Typography variant="h6" fontWeight="bold" align="center" gutterBottom>
          ChatBot
        </Typography>
        <Box
          sx={{
            height: 300,
            overflowY: 'auto',
            border: '1px solid #ddd',
            padding: 2,
            borderRadius: 2,
            backgroundColor: '#fff',
            mb: 2,
          }}
        >
          {messages.map((message, index) => (
            <Box key={index} textAlign={message.sender === 'user' ? 'right' : 'left'} mb={1}>
              <Typography
                variant="body2"
                sx={{
                  display: 'inline-block',
                  padding: '6px 12px',
                  borderRadius: 2,
                  backgroundColor: message.sender === 'user' ? '#3f51b5' : '#e0e0e0',
                  color: message.sender === 'user' ? '#fff' : '#000',
                }}
              >
                {message.text}
              </Typography>
            </Box>
          ))}
          <div ref={messagesEndRef} />
        </Box>
        <TextField
          value={input}
          onChange={(e) => setInput(e.target.value)}
          variant="outlined"
          placeholder="Type your message..."
          fullWidth
          aria-label="Type a message to chatbot"
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          sx={{ mb: 1 }}
        />
        <Button onClick={handleSend} variant="contained" color="primary" fullWidth aria-label="Send message">
          Send
        </Button>
      </Paper>
    </Box>
  );
};

export default ChatBot;
