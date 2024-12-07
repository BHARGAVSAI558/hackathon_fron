import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { TextField, Button, Typography, Alert, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import axios from 'axios';
import './Register.css';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('buyer'); // Default role
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const validateForm = () => {
        if (!name || !email || !password || !confirmPassword) {
            setErrorMessage("All fields are required.");
            return false;
        }

        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match.");
            return false;
        }

        return true;
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', { name, email, password, role });
            setSuccessMessage('Registration successful! Redirecting to login...');
            setErrorMessage('');
            setName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setRole('buyer'); // Reset role to default

            setTimeout(() => {
                navigate('/login');
            }, 2000);
        } catch (error) {
            setErrorMessage(error.response?.data?.message || 'Registration failed. Please try again.');
            setSuccessMessage('');
        }
    };

    return (
        <div className="register-wrapper">
            <div className="register-container">
                <Typography variant="h5" className="register-title">
                    Register
                </Typography>
                <form onSubmit={handleRegister} className="register-form">
                    <TextField
                        placeholder="Enter your name"
                        fullWidth
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="register-input"
                    />
                    <TextField
                        placeholder="Enter your email address"
                        fullWidth
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="register-input"
                    />
                    <TextField
                        placeholder="Create a password"
                        fullWidth
                        variant="outlined"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="register-input"
                    />
                    <TextField
                        placeholder="Confirm your password"
                        fullWidth
                        variant="outlined"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="register-input"
                    />
                    <FormControl fullWidth variant="outlined" className="register-input">
                        <InputLabel>Role</InputLabel>
                        <Select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            label="Role"
                        >
                            <MenuItem value="buyer">Buyer</MenuItem>
                            <MenuItem value="seller">Seller</MenuItem>
                            <MenuItem value="admin">Admin</MenuItem>
                        </Select>
                    </FormControl>
                    {errorMessage && <Alert severity="error" className="message error">{errorMessage}</Alert>}
                    {successMessage && <Alert severity="success" className="message success">{successMessage}</Alert>}
                    <Button type="submit" variant="contained" color="primary" fullWidth className="register-button">
                        Register
                    </Button>
                </form>
                <Typography className="login-link">
                    Already have an account? <Link to="/login">Login</Link>
                </Typography>
            </div>
        </div>
    );
}

export default Register;