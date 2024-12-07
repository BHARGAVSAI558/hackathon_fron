import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Alert } from '@mui/material';

function Forgot() {
  const [contact, setContact] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOTP = () => {
    if (contact === '') {
      setErrorMessage('Please enter your email or contact number');
    } else {
      setErrorMessage('');
      setOtpSent(true);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f7f8fa', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container
        maxWidth="xs"
        sx={{
          padding: '2rem',
          backgroundColor: '#ffffff',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
          borderRadius: '12px',
        }}
      >
        <Typography
          variant="h5"
          align="center"
          sx={{ fontWeight: 'bold', mb: 2, color: '#333' }}
        >
          Forgot Password
        </Typography>
        <Typography align="center" sx={{ color: '#777', mb: 3 }}>
          Enter your email or contact number to receive an OTP
        </Typography>

        <form>
          <TextField
            label="Email or Contact"
            fullWidth
            margin="normal"
            variant="outlined"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            sx={{
              backgroundColor: '#f9f9f9',
              borderRadius: '5px',
            }}
          />
          {errorMessage && (
            <Alert severity="error" sx={{ mt: 1, mb: 2 }}>
              {errorMessage}
            </Alert>
          )}
          {otpSent && (
            <Alert severity="success" sx={{ mt: 1, mb: 2 }}>
              OTP sent successfully! Check your email or messages.
            </Alert>
          )}

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSendOTP}
            sx={{
              mt: 2,
              padding: '0.75rem',
              fontSize: '0.9rem',
              backgroundColor: '#1976d2',
              '&:hover': { backgroundColor: '#004ba0' },
            }}
          >
            Send OTP
          </Button>

          <Typography align="center" sx={{ mt: 2, fontSize: '0.8rem', color: '#555' }}>
            Remembered your password?{' '}
            <Button
              component="a"
              href="/login"
              sx={{
                textDecoration: 'none',
                color: '#1976d2',
                fontWeight: 'bold',
                fontSize: '0.8rem',
              }}
            >
              Log In
            </Button>
          </Typography>
        </form>
      </Container>
    </Box>
  );
}

export default Forgot;
