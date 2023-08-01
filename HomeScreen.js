import React from 'react';

const HomeScreen = () => {
  const containerStyle = {
    backgroundColor: 'purple',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={containerStyle}>
      <h1>Welcome to the Home Screen</h1>
      {/* Add any other content you want to display on the home screen */}
    </div>
  );
};

export default HomeScreen;
