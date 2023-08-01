import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Regular = () => {
    const [input1Value, setInput1Value] = useState('');
    const [input2Value, setInput2Value] = useState('');
    const [input3Value, setInput3Value] = useState('');

    const handleInput1Change = (event) => {
        setInput1Value(event.target.value);
    };

    const handleInput2Change = (event) => {
        setInput2Value(event.target.value);
    };

    const handleInput3Change = (event) => {
        setInput3Value(event.target.value);
    };

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

    const handleSubmit = (event) => {
        console.log('Name:', input1Value);
        console.log('ID Number:', input2Value);
        console.log('Address:', input3Value);


        event.preventDefault();
        const url = 'http://localhost:4001/saveuser?';
        const data = new FormData(event.currentTarget);
        const jsonData = Object.fromEntries(data.entries());
        var jsonDataStr = JSON.stringify(jsonData)
        var ENDPOINT = url + "data=" + jsonDataStr
        const response = postData(ENDPOINT, jsonData);
        console.log("response : ", response); // log the response from the server
        window.location.href = '/login';
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
                value={input1Value}
                onChange={handleInput1Change}
                variant="outlined"
                color="primary"
                style={{ width: '50%' }}
            />
            <h1>Enter Your ID Number</h1>
            <TextField
                label="Enter Your ID Number"
                value={input2Value}
                onChange={handleInput2Change}
                variant="outlined"
                color="primary"
                style={{ width: '50%' }}
            />
            <h1>Enter Your Address</h1>
            <TextField
                label="Enter Your Address"
                value={input3Value}
                onChange={handleInput3Change}
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
