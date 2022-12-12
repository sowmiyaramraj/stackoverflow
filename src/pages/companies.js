import React,{useState,useEffect} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
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



function Companies()
{
  const [companydata,setCompanydata]= useState([
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
//        const response= await axios.get("http://localhost:3001/company/get",{
//          headers:{
//            accesstoken : localStorage.getItem("token"),
//          },
//        });
//        setCompanydata(response.data);    
//    }
//  }
//    getData();
// },[]);
  
  return(
    <div >
      <div>
        <h1>Companies</h1>
        <p>Learn about what it's like to work at companies</p>
      </div>
      <div>
        <TextField style={{width:"200px", height:"10px"}} id="filled-basic" label="Search all companies" variant="filled" /> &nbsp;     
        <TextField style={{width:"200px", height:"10px"}} id="filled-basic" label="Search companies by location" variant="filled" />  &nbsp;  
        <Button style={{width:"150px", height:"50px"}} variant="contained">search</Button>&nbsp;
      </div>
      <br/>
      <hr/>
      <div>
      {companydata.map((row)=>( 
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
      

    </div>

  );
}

export default Companies;