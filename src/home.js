import React from "react";
import question from "./component/question.js";
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


const qus=question();
function Homepage()
{

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));


    return(
        <div>
            <div>
                <Button variant="text" >Stack overflow clone</Button>&nbsp;
                <Button variant="text">About</Button>&nbsp;
                <Button variant="text">Product</Button>&nbsp;
                <Button variant="text">For Teams</Button>&nbsp;
                    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
       
        <Grid item xs={2}>
          <Item>
          <Paper sx={{ width: 320 }}>
      <MenuList dense>
        <MenuItem>
          <ListItemText inset><Button onClick={()=>login}>Home</Button></ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>Public</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset><Button>Question</Button></ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset><Button>Tags</Button></ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset><Button>User</Button></ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset><Button>Companies</Button></ListItemText>
        </MenuItem>
       
        <Divider />
        <MenuItem>
          <ListItemText>Collectives</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Explorer Collectives</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>Stack Overflow for<br/> Teams – 
            Start collaborating <br/>and sharing organizational<br/> knowledge.
            <br/>
           
            </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText><Button variant="contained" color="success">Create a free teams</Button></ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText><Button>Why Teams?</Button></ListItemText>
        </MenuItem>
        
              </MenuList>
    </Paper>
          </Item>
        </Grid>
        <Grid item xs={10}>
          <Item><div>{question}</div></Item>
        </Grid>
      </Grid>
    </Box>

             </div>

        </div>
      
    
    );

}

export default Homepage;