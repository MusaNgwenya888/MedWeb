import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const FirstTime = () => {
  const [name, setName] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [working, setWorking] = useState('');
  const [nextOfKinName, setNextOfKinName] = useState('');
  const [nextOfKinPhoneNumber, setNextOfKinPhoneNumber] = useState('');

  const postData = async (url, data) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response.json();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const jsonData = {
      name,
      idNumber,
      working,
      nextOfKin: {
        name: nextOfKinName,
        phoneNumber: nextOfKinPhoneNumber,
      },
    };
  
    const url = 'http://localhost:4001/saveuser';
    const response = await postData(url, jsonData);
    console.log("response: ", response); // log the response from the server
    window.location.href = '/ListOfWards';
  };

  // Handlers for individual input fields
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleIdNumberChange = (event) => {
    setIdNumber(event.target.value);
  };

  const handleWorkingChange = (event) => {
    setWorking(event.target.value);
  };

  const handleNextOfKinNameChange = (event) => {
    setNextOfKinName(event.target.value);
  };

  const handleNextOfKinPhoneNumberChange = (event) => {
    setNextOfKinPhoneNumber(event.target.value);
  };


  const containerStyle = {
    backgroundColor: 'purple',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const buttonStyle = {
    backgroundColor: 'purple', // Set the button's background color to match the container
    color: 'black', // Set the button's text color to match the container
    marginTop: '16px', // Adjust the margin as needed
  };

  return (
    <div style={containerStyle}>
      <h1>For First Visit Enter Following Details :</h1>
      <br />
      <TextField
        label="Enter Your Name"
        onChange={handleNameChange}
        value={name}
        variant="outlined"
        color="primary"
        style={{ width: '50%' }}
      />
      <h2>Enter ID Number</h2>
      <TextField
        label="ID Number"
        onChange={handleIdNumberChange}
        value={idNumber}
        variant="outlined"
        color="primary"
        style={{ width: '50%' }}
      />
      <br />
      <br />
      <h2>Are You Working?</h2>
      <TextField
        label="Yes or No"
        onChange={handleWorkingChange}
        value={working}
        variant="outlined"
        color="primary"
        style={{ width: '50%' }}
      />
      <h2>Next of kin</h2>
      <h3>Name</h3>
      <TextField
        label="Next of Kin Name"
        onChange={handleNextOfKinNameChange}
        variant="outlined"
        color="primary"
        style={{ width: '50%' }}
      />
      <h3>Phone Number</h3>
      <TextField
        label="Next of Kin Phone Number"
        onChange={handleNextOfKinPhoneNumberChange}
        variant="outlined"
        color="primary"
        style={{ width: '50%' }}
      />
      <br />
      <Button variant="contained" color="primary" onClick={handleSubmit} style={buttonStyle}>
        Submit
      </Button>
    </div>
  );
};

export default FirstTime;
