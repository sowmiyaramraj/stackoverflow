import React from "react";
import "./pages.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import stacklogo from "../images/stacklogo.png";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Signin from "../register/signin";
import Signup from "../register/signup";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function Home()
{
 const navigate=useNavigate();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout=()=>{
    navigate("/");
  }

  const signup=()=>{
    navigate("/signup");
  }

  const signin=()=>{
    navigate("/signin");
  }

  return(
    <div>
    <div>
    <Box sx={{ flexGrow: 1 }}>

<AppBar position="static" style={{background:"rgb(129, 43, 129)"}}>
  <Toolbar>
  <img style={{width: 250,height: 50, alignContent:"center"}} src={stacklogo}/>

    <Typography variant="h6" component="div" sx={{   flexGrow: 1,width: 1000 }}>
      <Button>About</Button>&nbsp;
      <Button>Product</Button>&nbsp;
      
    </Typography>
    {auth && (
      <div>
        <Button onClick={signup}>signup</Button>
      <Button onClick={signin}>signin</Button>
       
      </div>
    )}
  </Toolbar>
</AppBar>
</Box>
      </div><br/>
      <div>
      <Card sx={{ minWidth: 275 }}>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>
            
          <Card sx={{ minWidth: 275 }}>
      <CardContent>
        
        <Typography variant="h5" component="div">
        Find the best answer to your technical question, help others answer theirs

        </Typography>
        </CardContent>
      <CardActions>
        <Button size="small">Join the community</Button>
      </CardActions>
    </Card>
          </Item>
        </Grid>
       
        <Grid item xs={6}>
          <Item>
          <Card sx={{ minWidth: 275 }}>
      <CardContent>
        
        <Typography variant="h5" component="div">
        Want a secure, private space for your technical knowledge?
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small">Discover Teams</Button>
      </CardActions>
    </Card>
          </Item>
        </Grid>
      </Grid>
    </Box>
    </Card>
   
    </div>
    </div>

  );
}

export default Home;