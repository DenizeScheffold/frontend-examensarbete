//TODO sätt över all kod som handlar om att ta emot svar från radio btns. 
/*import * as React from "react";
import axios from "./api/ApiClient";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';

function SendDay({setDayInfo}) {
  const [values, setValues] = React.useState({
    possible: ""
  });
  const [dayInfo, setDayInfo] = React.useState([]
    );



  const handleChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value });
    console.log(values.data);
    localStorage.setItem("possible", values.data)
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.patch(`http://localhost:8080/api/editDay/3561`,
      //${values.dayId}`, 
      {
        possible: values.possible
      }, {})
    console.log(values.data);

  };

  return (
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
              <TableCell align="right"> Kan
              </TableCell>
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
                    defaultValue="true"
                    name="radio-buttons-group"
                    value={values.possible}
                    onChange={handleChange("possible")}
                  >

                    <FormControlLabel value="true" control={<Radio />} label="KAN" />
                    <FormControlLabel value="false" control={<Radio />} label="KAN INTE" />
                  </RadioGroup>

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
  )
}

export default SendDay;*/