import React,{useEffect,useState} from "react";
import axios from "axios";
import jwt from "jsonwebtoken";
import "./pages.css";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";

function Question()
{
  const navigate=useNavigate();
  const [question,setQuestion]=useState([]);
  useEffect(()=>{
    async function getquestion(){  
      const decodedtoken=jwt.decode(localStorage.getItem("token"));
      if(decodedtoken.exp * 1000<Date.now()){
        navigate("/");
      }   else{
       const responce= await axios.get("http://localhost:3001/question/get",{
        headers:{
          // "user-agent": "not axios", 
          accesstoken:localStorage.getItem("token"),
        },
      });
      
    }
    getquestion();

      }
      
  },[]);
  return(
    // <div className="content">
    //   {question.map((row)=>{
    //    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
    //   <ListItem alignItems="flex-start">
        
    //     <ListItemText
    //       primary={row.name}
    //       secondary={
    //         <React.Fragment>
    //           <Typography
    //             sx={{ display: 'inline' }}
    //             component="span"
    //             variant="body2"
    //             color="text.primary"
    //           >
    //            {question.email}
    //           </Typography>
    //           {" — I'll be in your neighborhood doing errands this…"}
    //         </React.Fragment>
    //       }
    //     />
    //   </ListItem>
    //   <Divider variant="inset" component="li" />
     
    // </List>
    // })}
      
    // </div>
    <>
    <h1>qus</h1></>

  );
}

export default Question;