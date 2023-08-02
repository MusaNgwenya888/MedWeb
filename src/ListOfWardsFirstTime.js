import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Button from '@mui/material/Button';

const ListOfWardsFirstTime = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [otherInput, setOtherInput] = useState('');
    const [data, setData] = useState(null)

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


    const containerStyle = {
        backgroundColor: 'purple',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const wardsGridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridGap: '10px',
        margin: '20px 0',
    };

    const wardOptions = [
        'General Ward',
        'Intensive Care',
        'Burns Ward',
        'Maternity',
        'Medical Surgery',
        'ICU',
        'Emergency Ward',
        'Nursery',
        'Postnatal Ward',
        'Coronary Care Unit',
        'Admission Ward',
        'Other',
    ];

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleOtherInputChange = (event) => {
        setOtherInput(event.target.value);
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

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (selectedOption === 'Other') {
            // Handle the submitted "Other" value here, e.g., send to server or use it in the app
            console.log('User selected "Other" with value:', otherInput);
            const jsonData = {
                name: data.name,
                idNumber: data.idNumber,
                working: data.working,
                NextOfKinName: data.nextOfKin.name,
                NextOfKinNumber: data.nextOfKin.phoneNumber,
                ward: otherInput, // Assuming that the custom ward value should be sent to the server
            };
            const url = 'http://localhost:4001/saveuser'; // Update the URL with your server endpoint
            const response = await postData(url, jsonData);
            console.log("response: ", response); // log the response from the server
            // Convert the jsonData to a string and encode it for URL
            const dataParam = encodeURIComponent(JSON.stringify(jsonData));
            // Navigate to the ListOfWards page with the form data as URL parameters
            window.location.href = `/RecieptFirstTime?data=${dataParam}`;
        } else {
            // Handle the selected ward here, e.g., send to server or use it in the app
            console.log('User selected:', selectedOption);
            const jsonData = {
                name: data.name,
                idNumber: data.idNumber,
                working: data.working,
                NextOfKinName: data.nextOfKinName,
                NextOfKinNumber: data.nextOfKinPhoneNumber,
                ward: selectedOption, // Assuming that the custom ward value should be sent to the server
            };
            const url = 'http://localhost:4001/saveuser'; // Update the URL with your server endpoint
            const response = await postData(url, jsonData);
            console.log("response: ", response); // log the response from the server
            // Convert the jsonData to a string and encode it for URL
            const dataParam = encodeURIComponent(JSON.stringify(jsonData));
            // Navigate to the ListOfWards page with the form data as URL parameters
            window.location.href = `/RecieptFirstTime?data=${dataParam}`;
        }
    };

    const buttonStyle = {
        backgroundColor: 'purple', // Set the button's background color to match the container
        color: 'black', // Set the button's text color to match the container
        marginTop: '16px', // Adjust the margin as needed
    };

    return (
        <div style={containerStyle}>
            <h1>Here Are A List Of Wards</h1>
            <h2>Select the One You Will Attend To:</h2>
            <br />
            <form>
                <div style={wardsGridStyle}>
                    {wardOptions.map((option) => (
                        <label key={option}>
                            <input
                                type="radio"
                                name="wardOption"
                                value={option}
                                checked={selectedOption === option}
                                onChange={handleOptionChange}
                            />
                            {option}
                        </label>
                    ))}
                </div>
                {selectedOption === 'Other' && (
                    <div>
                        <h3>Enter Details On The Space Provided :</h3>
                        <input
                            type="text"
                            value={otherInput}
                            onChange={handleOtherInputChange}
                            placeholder="Enter other ward"
                        />

                    </div>
                )}
                <br />
                <Button variant="contained" color="primary" onClick={handleSubmit} style={buttonStyle}>
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default ListOfWardsFirstTime;
