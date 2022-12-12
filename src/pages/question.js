import React,{useState,useEffect} from "react";
import "./pages.css";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Question()
{
  const navigate=useNavigate();

  const [qusdata,setQusdata]= useState([
    {
      name:"a",
      languageknown:"c,c++,java"
    },
    {
      name:"a",
      languageknown:"c,c++,java"
    },
    {
      name:"a",
      languageknown:"c,c++,java"
    },
  ]);

    
//   useEffect(()=>{
//    async function getData()
//    {
//     const decodedtoken=jwt.decode(localStorage.getItem("token"));
//     if(decodedtoken.exp * 1000 < Date.now())
//     {
//       navigate("/signin");

//     }
// else{
//        const response= await axios.get("http://localhost:3001/question/get",{
//          headers:{
//            accesstoken : localStorage.getItem("token"),
//          },
//        });
//        setUserdata(response.data);    
//    }
//  }
//    getData();
// },[]);
  


  const askqus=()=>{
    navigate("/askqus");
  }
  return(
    <div>
      <h1>All Question</h1>
      <Button variant="contained" onClick={askqus}>Ask question</Button>
      <br/>
      <span>11 questions</span>
      <hr/>
      {qusdata.map((row)=>( 
       <Box sx={{ flexGrow: 1 }} key={row.id}>
       <Grid container spacing={2}>
         <Grid item xs={8}>
           <Item>            
           <Card sx={{ width:"500px",height:"100px" }}>
           <CardContent> 
                    
           <Typography  component="div">
           <img style={{width: 50,height: 50, alignContent:"center"}} src={row.image}/>
 
           {row.name}
           </Typography>
           <Typography  color="text.secondary">
           {row.languageknown}
           </Typography>
           </CardContent>
           </Card>
           </Item>
         </Grid>
       </Grid><hr/>
     </Box>
        

      ))}

    </div>

  );
}

export default Question;