//TODO: add button to make changes. button should go to editday/dayId(/userid) controller...


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
import EditDayComponent from "./EditDayComponent"

function SetDay() {
  const [dayInfo, setDayInfo] = React.useState([]
  );

  const [values, setValues] = React.useState({
    weekNumber: ""
  });


  const handleChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value });
    console.log(values.data);
  };

  React.useEffect(() => {
    loadSetDay();
  });

  const loadSetDay = async () => {
    await axios.get(
      `http://localhost:8080/api/getDaysNotSet/${values.weekNumber}`,
      {},
      {}
    ).then(response => {
      if (response.status === 200) {
        setDayInfo(response.data); 
      } else if (response.status === 204) {
        console.log("ingen content, hanterades inom loadSetDay..")
      } else{
        console.log("något som inte funkade....")
      }
    })

  };


  return (
    <div className="Day">
      <form onSubmit={handleChange}>
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
            <Typography variant="h3">Choose week</Typography>
          </Grid>

          <Grid item sx={{ width: 0.5 }}>
            <FormControl fullWidth>
              <InputLabel >
                Week Number
              </InputLabel>
              <OutlinedInput
                label="weekNumber"
                value={values.weekNumber}
                onChange={handleChange("weekNumber")}
                sx={{ borderRadius: "29px" }}
              />
            </FormControl>
          </Grid>
        </Grid>
      </form>


      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Ditt Id</TableCell>
              <TableCell align="right">Day Id</TableCell>
              <TableCell align="right">Vecka</TableCell>
              <TableCell align="right">Datum</TableCell>
              <TableCell align="right">Aktivitet</TableCell>
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
                <TableCell align="right">{day.activity === 1 ? <p>Lämna</p> : <p>Hämta</p>}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <EditDayComponent />
    </div>
  );
}

export default SetDay;
