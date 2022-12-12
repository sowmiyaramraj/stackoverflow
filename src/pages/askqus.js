import React,{useState,useEffect} from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

function Askqus(){
    return(
        <div>
            <h2>Ask a public question</h2>
            <hr/>
            <div>            
            <Card sx={{ background:"rgb(195, 218, 238)" }}>
      <CardContent>
      <Typography variant="h5" component="div">
      Writing a good question
        </Typography>
        
        <Typography variant="body2">
        You’re ready to ask a programming-related question and this form will help guide you through the process.
      </Typography>
      </CardContent>
      
    </Card>
    </div>
    <hr/>
    <div>            
            <Card sx={{ }}>
      <CardContent>
      <Typography variant="h5" component="div">
      Title
        </Typography>
        
        <Typography variant="body2">
        Be specific and imagine you’re asking a question to another person.
         </Typography>
         <TextField
         style={{width:"300px",height:"10px"}} 
         lable="e.g. react function to split window"/>
        &nbsp;
         <Button variant="contained" lable="Next">Next</Button>
      </CardContent>
      
    </Card>
    </div>

        </div>
    );
}

export default Askqus;