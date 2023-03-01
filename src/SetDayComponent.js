//TODO: add button to make changes. button should go to editday/dayId(/userid) controller...


import * as React from "react";
import axios from "./api/ApiClient";
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
import { FormControlLabel, Radio, RadioGroup, Button, FormControl } from '@mui/material';

function SetDay() {
  const [message, setMessage] = React.useState("");
  const [dayInfo, setDayInfo] = React.useState([]);
  const[currentDayId, setCurrentDayId] = React.useState(0);
  const [editDay, setEditDay] = React.useState({possible: true, dayId: 0})
  const [messageColor, setMessageColor] = React.useState("");

  const [values, setValues] = React.useState({
    weekNumber: ""
  });

  const [possibleValue, setPossible] = React.useState(true);

  React.useEffect(() => {
    loadSetDay();
  });
  

  const loadSetDay = async () => {
    const result = await axios.get(
      `http://localhost:8080/api/getDaysNotSet/2`,
      //${values.weekNumber}`,
      {},
      {}
    );
    console.log(result);
    console.log(result.data[0].userId);
    setDayInfo(result.data);
  };

  const handleChange = (prop) => (e) => {
    const { name, value } = e.target;
    setEditDay((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
   // setValues({ ...values, [prop]: e.target.value });
   // setPossible({ ...possibleValue, [prop]: e.target.value});
    //console.log(possibleValue.possible);
    localStorage.setItem("possible", editDay.possible)
    localStorage.setItem("currentDayId", editDay.dayId)
 
  };

  const handleSubmit = async(e) => { 
    e.preventDefault();
    localStorage.setItem("dayId", editDay.dayId)
    try{
    axios.patch(`http://localhost:8080/api/editDay/${editDay.dayId}`, 
    { possible: editDay.possible
  },{})

  console.log(possibleValue.possible);
  setMessage("Day updated ", possibleValue.possible);
  setMessageColor("green");

} catch(e){
  console.log(e, ".....not working....")
  setMessage(e, "....not working....")
}


  };



  return (
    <div>
    <div className="Day">
    {/*   <FormControl onSubmit={handleChange}>
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          maxWidth="90%"
          marginTop="auto"
          marginLeft="4%"
          spacing={2}
        >
          <Grid item>
            <Typography variant="h2">Choose week</Typography>
          </Grid>

          <Grid item sx={{ width: 0.5 }}>
              <InputLabel >
                Week Number
              </InputLabel>
              <OutlinedInput
                label="weekNumber"
                value={values.weekNumber}
                onChange={handleChange("weekNumber")}
                sx={{ borderRadius: "29px" }}
              />
          </Grid>
        </Grid>

</FormControl> */}
<FormControl onSubmit={handleSubmit}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Your Profile</TableCell>
              <TableCell align="right">day id</TableCell>
              <TableCell align="right">week number</TableCell>
              <TableCell align="right">date</TableCell>
              <TableCell align="right">activity 1=Lämna, 2=Hämta</TableCell>
              <TableCell align="right"> Kan </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {dayInfo.map((day) => (
              <TableRow>
                <TableCell component="th" scope="row">
                  {day.userId}
                </TableCell>
                <TableCell align="right">{day.dayId}</TableCell>
                <TableCell align="right">{day.weekNumber}</TableCell>
                <TableCell align="right">{day.dayDate}</TableCell>
                <TableCell align="right">{day.activity}</TableCell>
                <TableCell align="right">  
              
                 <RadioGroup
                  row
                  label="possible"
                  name="radio-buttons-group"
                  value={possibleValue.possible}
                  onChange={handleChange [("possible"), (day.dayId)]}
                >
                  
                  <FormControlLabel value="true" control={<Radio />} label="KAN" />
                  <FormControlLabel value="false" control={<Radio />} label="KAN INTE" />
                 
                </RadioGroup>
                <p className={`${messageColor} text-center`}>{message}</p>

                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>      
      
      <Button
            fullWidth
            variant="contained"
            type="submit"

            >
            Klar
            </Button>
        </FormControl>
   
    </div>
  </div>
  );  
  
}

export default SetDay;
