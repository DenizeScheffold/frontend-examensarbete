import * as React from "react";
import axios from "../api/ApiClient";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import EditDayComponent from "./EditDayComponent"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from 'react-router-dom'
import { Button } from "@mui/material";



function RadioBtn() {

const [possibleValue, setPossible] = React.useState(true);

const [dayIdValue, setDayIdValue] = React.useState("");

const [checked, setChecked] = React.useState(true);



const handleCheckNo = (dayId) => {
  

    setDayIdValue(dayId);
    setChecked(checked);
    setPossible(!checked);
}
const handleCheck = (dayId) => {
  

  setDayIdValue(dayId);
  setChecked(!checked);
  setPossible(checked);
  
  /*
  if(checked===true){
  setPossible(true);
  } if (checked===false){
    setPossible(false);
  }
  */

  // setDayIdValue(...day, [prop]: e.target.value )

  console.log("the result: ", possibleValue, dayIdValue)
};



const handleSubmit = (e) => {
    e.preventDefault();
    console.log("the result in submit: ", possibleValue, dayIdValue)
    axios.patch(`http://localhost:8080/api/editDay/${dayIdValue}`,
      {
        dayId: dayIdValue, possible: possibleValue
      }, {})
   // navigate(`/setdays`)
  };


return(
<form onSubmit={handleSubmit}>
<TableContainer component={Paper}>
  <Table sx={{ minWidth: 650 }} aria-label="a dense table">
    <TableHead>
      <TableRow>
        <TableCell>Ditt Id</TableCell>
        <TableCell align="right">Day Id</TableCell>
        <TableCell align="right">Vecka</TableCell>
        <TableCell align="right">Datum</TableCell>
        <TableCell align="right">Kryssa i om du kan</TableCell>
        <TableCell align="right">Klicka när du är klar</TableCell>
      </TableRow>
    </TableHead>

    <TableBody>
    
        <TableRow>
          <TableCell component="th" scope="row">
       Ja
       
               <Checkbox
          //    key={day.dayId}
              onChange={() => handleChange("4011")}
              inputProps={{ 'aria-label': 'controlled' }} label="possible"
            /> 
            Nej
            <Checkbox
             // key={day.dayId}
              onChange={() => handleChangeNo("4011")}
              inputProps={{ 'aria-label': 'controlled' }} label="notPossible"
            /> 
     
          </TableCell>
          <TableCell align="right">
            <Button
              size="small"
              variant="contained"
              type="submit"
            >
              Klar
            </Button>

          </TableCell>
        </TableRow>
    
    </TableBody>
  </Table>
</TableContainer>

</form>

);
}

export default RadioBtn;