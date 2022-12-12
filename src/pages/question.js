import React from "react";
import "./pages.css";
import Button from '@mui/material/Button';

function Question()
{
  return(
    <div>
      <h1>All Question</h1>
      <Button variant="contained">Ask question</Button>
      <br/>
      <span>11 questions</span>
      <hr/>

    </div>

  );
}

export default Question;