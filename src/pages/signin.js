import React from "react";
import {useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import StyleIcon from '@mui/icons-material/Style';
import IconButton from '@mui/material/IconButton';
import {useState} from "react";
import "./pages.css";
import axios, { Axios } from "axios";

function Signin(){
    const navigate=useNavigate();
const [formData,setFormData]=useState({
    email:"",
    password:"",
});
const handlesubmit=async(e)=>{
    e.preventDefault();
    const responce= await axios.post("http://localhost:3001/register/signin",{...formData});
    console.log(responce);
    if(responce.data){
        localStorage.setItem("token",responce.data);
        navigate("/question");
    }
}


    return(
        <div className="signin">
       
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <StyleIcon />
          </IconButton><br/>
          <Button varient="OutLined">Login with Google</Button><br/>
          <Button>Login with GitHub</Button><br/>
          <Button>Login with Facebook</Button><br/>
          <form onSubmit={handlesubmit}>
            <div>
            <TextField id="standard-basic" 
         label="Email" variant="standard"
          type="email" 
          value={formData.email}
          onChange={(e)=>setFormData({...formData,email:e.target.value})} />
            </div>
         <br/>
         <div>
         <TextField id="standard-basic" label="Password" 
         variant="standard" type="password"  
         value={formData.password}
         onChange={(e)=>setFormData({...formData,password:e.target.value})} />
         </div>
         <br/><br/>
         <Button variant="contained" type="submit">Login</Button>
         </form>
         
         </div>
       
    )
}

export default Signin;