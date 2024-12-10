import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const InputWithEvents = () => {
  const [inputValue, setInputValue] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
    setStatusMessage('Input value is changing');
  };

  const handleFocus = () => {
    setStatusMessage('Input is focused');
  };

  const handleBlur = () => {
    setStatusMessage('Input has lost focus');
  };

  const handleClick = () => {
    alert(`Current input value: ${inputValue}`);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: 300,
        margin: '0 auto',
        mt: 5,
      }}
    >
      <TextField
        label="Type something..."
        value={inputValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleClick}>
        Show Input Value
      </Button>
      {statusMessage && (
        <Typography color="textSecondary" variant="body2">
          {statusMessage}
        </Typography>
      )}
      <Typography variant="body1">Current Input Value: {inputValue}</Typography>
    </Box>
  );
};

export default InputWithEvents;
