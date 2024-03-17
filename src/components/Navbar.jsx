import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import  '../css/Navbar.css';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    ochre: {
      main: '#ffc400',
      light: '#ffcf33',
      dark: '#b28900',
      contrastText: '#242105',
    },
  },
});






function Navbar() {

  const [navData, setnavData] = useState({
    name:"Rohit Ranjan"
  });
    
  
  return (
        <ThemeProvider theme={theme}>
        <div className='navbar' >
            <Stack direction='row' alignItems='center' justifyContent='space-around' spacing={22} sx={{ width: '100%' }}>
            <div>
                {/* {Name} */}
                <h2>{navData.name}</h2>
            </div>
            <div>
                {/* {Menu} */}
                <Stack direction='row' alignItems='center' justifyContent='space-around' spacing={2}>
                <h5>Home</h5>
                <h5>About</h5>
                <h5>Portfolio</h5>
                <h5>Contacts</h5>
                </Stack>
            </div>
            
            <div>
                {/* {Button} */}
                <Button variant='contained' size='medium' color='ochre'>Hire Me</Button>
            </div>
           
            </Stack>
        </div>
        </ThemeProvider>
    );
}

export default Navbar;