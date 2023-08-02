import React from 'react';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";

const Receipt = () => {
    const [ data, setData ] = useState(null)
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const dataParam = searchParams.get('data');

    useEffect(() => {
        if (dataParam) {
            const jsonData = JSON.parse(decodeURIComponent(dataParam));
            // Use the jsonData here if needed
            setData(jsonData)
            console.log('Received Data:', jsonData);
        }
    }, [dataParam]);
  const handleGetStarted = () => {
    window.location.href = '/';
  };

  const containerStyle = {
    backgroundColor: 'purple',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const receiptContainerStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center',
    maxWidth: '400px',
  };

  const h1Style = {
    color: 'black',
  };

  const buttonStyle = {
    backgroundColor: 'purple',
    color: 'black',
    marginTop: '16px',
  };

  // Generate a random receipt number (e.g., a 6-digit number)
  const receiptNumber = Math.floor(100000 + Math.random() * 900000);

  return (
    <div style={containerStyle}>
        <h1 style={h1Style}>Here is Your Receipt :</h1>
      <div style={receiptContainerStyle}>
        <p>Receipt Number: {receiptNumber}</p>
        <p>Ward: {data && data.ward}</p> 
        <br />
        <p>Ward Updated Successfully!</p>
      </div>
      <br />
      <Button variant="contained" style={buttonStyle} onClick={handleGetStarted}>
        Done!
      </Button>
    </div>
  );
};

export default Receipt;
