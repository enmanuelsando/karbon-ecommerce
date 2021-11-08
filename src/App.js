import './App.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton';
import FadeMenu from './components/menu'

function App() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="default">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
             <FadeMenu/>
           </IconButton>
            <Typography variant="h6"    component="div" sx={{ flexGrow: 1 }}>
             Karbon
          </Typography>
          <Button color="inherit" variant="outlined">Register</Button>
          <Button color="inherit" variant="outlined">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}

export default App;
