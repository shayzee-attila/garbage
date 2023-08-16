import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    // Validation
    if (email === 'darryn@randrtechsa.com' && password === 'P@55w0rd@1') {
      
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // User data to Redux store
      dispatch({ type: 'LOGIN', payload: { email, password } });

      // Navigate to Home page
      navigate('/home');
    } else {
      setError('Invalid email or password');
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Display "Login:" */}
      <Typography variant="h4" align="center" gutterBottom>
        Login:
      </Typography>
      {/* Email input */}
      <TextField
        label="Email"
        value={email}
        onChange={handleEmailChange}
        fullWidth
        required
        type="email"
      />
      {/* Password input */}
      <TextField
        label="Password"
        value={password}
        onChange={handlePasswordChange}
        fullWidth
        required
        type="password"
      />
      {/* Display error message */}
      {error && <Typography color="error">{error}</Typography>}
      {/* Submit button */}
      <Button type="submit" variant="contained" color="primary">
        Login
      </Button>
      {/* Display loading spinner */}
      {loading && <CircularProgress />}
    </form>
  );
};

export default Login;
