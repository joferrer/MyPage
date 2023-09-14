import { createTheme } from "@mui/material";


export const themeOptions = {
    palette: {
    
      primary: {
        main: '#0b80bf',
      },
      secondary: {
        main: '#f50057',
      },
      background: {
        paper: '#032233',
        default: '#010409',
      },
      text: {
        primary: '#ffffff',
      },
    },
    typography: {
    fontFamily: [
            'Inter',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
      body1: {
        fontWeight: 300,
      },
      h5:{
        fontWeight: 300,
      }
    },
    components: {
        MuiCard: {
          styleOverrides: {
            root: {
              padding: 16, 
            },
          },
        },
      },
  };

  export const theme = createTheme(themeOptions);