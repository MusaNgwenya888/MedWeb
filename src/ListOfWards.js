import React, { useState } from 'react';
import Button from '@mui/material/Button';

const ListOfWards = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [otherInput, setOtherInput] = useState('');

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

    const handleSubmit = (event) => {
        event.preventDefault();
        if (selectedOption === 'Other') {
            // Handle the submitted "Other" value here, e.g., send to server or use it in the app
            console.log('User selected "Other" with value:', otherInput);
        } else {
            // Handle the selected ward here, e.g., send to server or use it in the app
            console.log('User selected:', selectedOption);
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

export default ListOfWards;
