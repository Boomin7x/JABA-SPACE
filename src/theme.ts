import { createTheme } from '@mui/material/styles';

const theme = createTheme({
   palette: {
      primary: {
         main: '#ffd100',
      },
      secondary: {
         main: '#000814',
      },
   },
   typography: {
      fontFamily: 'Outfit, sans-serif',
      h1: {
         fontSize: '4rem',
         fontWeight: 700,
      },
      h2: {
         fontSize: '2.5rem',
         fontWeight: 700,
      },
      h3: {
         fontSize: '2rem',
         fontWeight: 600,
      },
      body1: {
         fontSize: '1rem',
         lineHeight: 1.5,
      },
      button: {
         textTransform: 'none',
      },
   },
});

export default theme;
