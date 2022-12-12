import React from "react";
import Button from "@mui/material/Button";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Signin from "../register/signin";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Signup from "../register/signup"
import {useNavigate} from "react-router-dom";
import Home from "./home";
import Question from "./question";
import  Tags from "./tags";
import Users from "./users";
import Companies from "./companies";
import stacklogo from "../images/stacklogo.png";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
    const profile=()=>{
        navigate("/profile")
      }
      const logout=()=>{
        navigate("/Signin")}
        const navigate=useNavigate();
  
        const [auth, setAuth] = React.useState(true);
        const [anchorEl, setAnchorEl] = React.useState(null);
      
        // const handleChange = (event) => {
        //   setAuth(event.target.checked);
        // };
      
        const handleMenu = (event) => {
          setAnchorEl(event.currentTarget);
        };
      
        const handleClose = () => {
          setAnchorEl(null);
        };
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
    <div className="header">
    <Box sx={{ flexGrow: 1 }}>

<AppBar position="static" style={{background:"orange"}}>
  <Toolbar>
  <img style={{width: 250,height: 50, alignContent:"center"}} src={stacklogo}/>
  <Button variant="text">About</Button>&nbsp;
  <Button variant="text">Product</Button>&nbsp;
 
  
    {auth && (
      <div>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={profile}>Profile</MenuItem>
          <MenuItem onClick={logout}>Logout</MenuItem>
        </Menu>
      </div>
    )}
  </Toolbar>
</AppBar>
</Box>
      </div>
      
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 700 }}
    >
     
      <Tabs
        orientation="vertical"
        textColor="orange"
        indicatorColor="secondary"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      > 
        <Tab label="companies" {...a11yProps(0)} />
        <Tab label="Question" {...a11yProps(1)} />
        <Tab label="Tags" {...a11yProps(2)} />
        <Tab label="Users" {...a11yProps(3)} />
       
        </Tabs>
     
      <TabPanel value={value} index={0}>
      <Companies/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Question/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Tags/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Users/>
      </TabPanel>
      
      </Box>
    </div>
  );
}