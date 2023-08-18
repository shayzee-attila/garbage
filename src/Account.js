import React from 'react';
import Typography from '@mui/material/Typography';
import { Navigate } from 'react-router-dom';
import { useUser } from './UserContext';

const Account = () => {
  const { userDetails, isLoggedIn } = useUser();

  const accountContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  if (!isLoggedIn) {
    return <Navigate to="/unauthorized" />;
  }

  return (
    <div style={accountContainerStyle}>
      <Typography variant="h4" align="center">
        Account Information
      </Typography>
      {userDetails && (
        <div>
          <Typography variant="body1" align="center">
            Email: {userDetails.email}
          </Typography>
          <Typography variant="body1" align="center">
            Password: {userDetails.password}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default Account;
