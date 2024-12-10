// src/CustomButton.js
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

// Step 1: Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Custom primary color
    },
    secondary: {
      main: '#ac2bac', // Custom secondary color
    },
  },
  typography: {
    button: {
      textTransform: 'none', // Disable uppercase transformation
    },
  },
});

// Step 2: Create the button component with event handler
const CustomButton = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Click Me
      </Button>
    </ThemeProvider>
  );
};

export default CustomButton;
