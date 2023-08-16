import React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Home = () => {
  const pageContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', // Center content vertically
    height: '100vh',
  };

  const funFontStyle = {
    fontFamily: 'Pacifico, cursive',
    fontSize: '3rem',
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    padding: '1rem',
    backgroundColor: '#f5f5f5',
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav style={navStyle}>
        <Link to="/account" style={{ fontSize: '1.5rem', textDecoration: 'none' }}>
          Account
        </Link>
      </nav>
      {/* Welcome Text */}
      <div style={pageContainerStyle}>
        <Typography variant="h1" align="center" style={funFontStyle}>
          Welcome!
        </Typography>
      </div>
    </div>
  );
};

export default Home;



