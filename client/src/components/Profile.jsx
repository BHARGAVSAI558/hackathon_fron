import React from 'react';
import { Container, Typography, Button } from '@mui/material';

function Profile() {
  // Mock user data
  const user = {
    name: 'BHARGAV SHEKAR AKASH',
    email: 'psrm@gmail.com'
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Profile
      </Typography>
      <Typography variant="h6">Name: {user.name}</Typography>
      <Typography variant="h6">Email: {user.email}</Typography>
      <Button variant="contained" color="primary" fullWidth style={{ marginTop: '2rem' }}>
        Logout
      </Button>
    </Container>
  );
}

export default Profile;
