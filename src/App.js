import React from 'react';
import Button from '@mui/material/Button';

const App = () => {

  const handleGetStarted = () => {
    window.location.href = '/QueryUser';
  }

  const containerStyle = {
    backgroundColor: 'purple',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const h1Style = {
    color: 'Black',
  };

  const buttonStyle = {
    backgroundColor: 'purple', // Set the button's background color to match the container
    color: 'black', // Set the button's text color to match the container
    marginTop: '16px', // Adjust the margin as needed
  };

  return (
    <div style={containerStyle}>
      <h1 style={h1Style}>WELCOME TO SEDDIES MEDDIES NEW AND IMPROVED FILING SYSTEM</h1>
      <Button variant="contained" style={buttonStyle} onClick={handleGetStarted}>
        Get Started!
      </Button>
    </div>
  );
};

export default App;
