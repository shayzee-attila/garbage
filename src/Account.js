import React from 'react';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';

const Account = () => {
  // Get user data from Redux store
  const { email, password } = useSelector((state) => state.user);

  const accountContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  return (
    <div style={accountContainerStyle}>
      <Typography variant="h4" align="center">
        Account Information
      </Typography>
      <Typography variant="body1" align="center">
        Email: {email || 'darryn@randrtechsa.com'} 
      </Typography>
      <Typography variant="body1" align="center">
        Password: {password || 'P@55w0rd@1'} 
      </Typography>
    </div>
  );
};

export default Account;

