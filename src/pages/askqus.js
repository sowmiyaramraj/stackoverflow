import React,{useState,useEffect} from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import axios from "axios";
import { Formik} from "formik";
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
    const [userqusData,setUserqusData]=useState([]);

    
    // signup axios call
    const handleSubmit=async(formdata, { resetForm })=>{
    const response= await axios.post("http://localhost:3001/question/create",
       
        {
             qus:formdata.qus,
        });
        setUserqusData([...userqusData,response.data]);
        resetForm();
    };

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
         <Formik
       initialValues={{
          qus:"",
       }}
      
       onSubmit={handleSubmit}
     >
         {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         handleReset,
         isSubmitting,
       }) =>(
       
       <Box
       component="form"
       sx={{
         '& > :not(style)': { m: 1, width: '25ch' },
       }}
       noValidate
       autoComplete="off"
       onSubmit={handleSubmit}
       >
         {/* question */}
       <TextField style={{width:"500px",height:"150px"}}
       id="qus" 
       lable="e.g. react function to split window"
        name="qus"
        type="text"  
       value={values.qus}
       variant="filled"             
       onChange={handleChange}
       onBlur={handleBlur}/><br/>
        {/* <span style={{color:"green"}}>{touched.qus && errors.qus}</span><br/> */}    
     <Button variant="contained" type="submit" disabled={isSubmitting} >Next</Button>
       </Box>
       )}
       </Formik>
      </CardContent>      
    </Card>
    </div>

        </div>
    );
}

export default Askqus;