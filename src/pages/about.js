import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function about(){
    return(
        <div>
            <div>
             <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Stackoverflow
          </Typography>
          
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
        </div>
        <div>
           <h3>Who we are</h3> 
           <Typography>
Empowering the world to develop technology through collective knowledge.
Our public platform serves 100 million people every month, making it one of the most popular websites in the world.
</Typography>
<h4>
Our asynchronous knowledge management and collaboration offering, Stack Overflow for Teams, is transforming how people work.
</h4> </div>
</div>
    )
}