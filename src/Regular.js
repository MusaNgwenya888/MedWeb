import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Regular = () => {
    const [name, setName] = useState(''); 
    const [iDNumber, setIdNumber] = useState(''); 
    const [address, setAddress] = useState('');


    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleIdNumberChange = (event) => {
        setIdNumber(event.target.value);
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };


    const getData = async (url) => {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (!response.ok) {
            throw new Error('Data not found');
        }

        return response.json();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const jsonData = {
            name: name,
            idNumber: iDNumber,
            address: address,
        };
    
        const url = 'http://localhost:4001/getuser?';
        const jsonDataStr = JSON.stringify(jsonData);
        const endpoint = url + "data=" + encodeURIComponent(jsonDataStr);
    
        try {
            const response = await getData(endpoint);
            console.log("response : ", response); // log the response from the server
            const jsonString = JSON.stringify(response);
            window.location.href = '/home?data=' + encodeURIComponent(jsonString);
        } catch (error) {
            console.error('Error:', error.message);
            alert('User Does Not Exist. Please try signing up.');
            return;
        }
    
        // logging the details
        console.log({
            name: name,
            idNumber: iDNumber,
            address: address,
        });
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
            <h1>Enter Your Name</h1>
            <TextField
                label="Enter Your Name"
                value={name}
                onChange={handleNameChange}
                variant="outlined"
                color="primary"
                style={{ width: '50%' }}
            />
            <h1>Enter Your ID Number</h1>
            <TextField
                label="Enter Your ID Number"
                value={iDNumber}
                onChange={handleIdNumberChange}
                variant="outlined"
                color="primary"
                style={{ width: '50%' }}
            />
            <h1>Enter Your Address</h1>
            <TextField
                label="Enter Your Address"
                value={address}
                onChange={handleAddressChange}
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

export default Regular;
