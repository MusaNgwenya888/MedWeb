import Button from '@mui/material/Button';

const QueryUser = () => {
  const containerStyle = {
    backgroundColor: 'purple',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };    

  const handleSaveClick = () => {
    window.location.href = '/Regular';
  };

  const handleFirstClick = () => {
    window.location.href = '/FirstTime';
  }

  const buttonStyle = {
    backgroundColor: 'purple', // Set the button's background color to match the container
    color: 'black', // Set the button's text color to match the container
    marginTop: '16px', // Adjust the margin as needed
  };

  return (
    <div style={containerStyle}>
      <div>
        <Button variant="contained" color="primary" onClick={handleFirstClick} style={buttonStyle} >
          Is it your first time?
        </Button>
      </div>
      <br />
      <h1>Or</h1>
        <Button variant="contained" color="primary" onClick={handleSaveClick} style={buttonStyle}>
          Are you a regular visitor?
        </Button>
    </div>
  );
};

export default QueryUser;
