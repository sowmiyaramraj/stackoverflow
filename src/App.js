import React from "react";
import Home from "./pages/home";
import Companies from "./pages/companies";
import Question from "./pages/question";
import Tags from "./pages/tags";
import Users from "./pages/users";
import Signin from "./pages/signin";
import Sidenavmenubar from "./components/sidenavmenubar";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import StyleIcon from '@mui/icons-material/Style';
import TextField from '@mui/material/TextField';

function App()
{
    return(
        <div>
            <div className="top"></div>
            <div className="header">
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
            <StyleIcon />
          </IconButton>
          
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           StackOverFlow Clone
          </Typography>
          <Button color="inherit">About</Button>&nbsp;
          <Button color="inherit">Product</Button>&nbsp;
          <Button color="inherit">For Teams</Button>&nbsp;
          <TextField id="outlined-basic" label="Search" variant="outlined" />
          <Button color="inherit" >Signin</Button>&nbsp;
          <Button color="inherit" >Signout</Button>
        </Toolbar>
      </AppBar>
    </Box>
        </div>
        <div className="body">
        <Router>
            <Sidenavmenubar/>
            <Routes>
            <Route path="/"  element={<Home/>}/>
                <Route path="/companies" element={<Companies/>}/>
                <Route path="/question" element={<Question/>}/>
                <Route path="/tags" element={<Tags/>}/>
                <Route path="/users" element={<Users/>}/>
                <Route path="/signin" element={<Signin/>}/>
            </Routes>
           </Router>
        </div>
        {/* <div className="Footer">
         
        </div> */}
           
        </div>
    );
}

export default App