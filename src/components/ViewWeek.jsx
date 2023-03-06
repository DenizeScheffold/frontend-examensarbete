//Ask user to select a week. 
//Make call to database with userid + week + hsa value in possible


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
import CalculatePlans from "./CalculatePlans";

function ViewWeek() {
  const [dayInfo, setDayInfo] = React.useState([]
  );
  const [values, setValues] = React.useState({
    weekNumber: ""
  });

  //TODO: use names instead of id
  const [coParentName, setCoParentName] = React.useState("")

  const handleChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value });
    console.log(values.data);
  };

  React.useEffect(() => {
    loadProcessedDays();
  });


  const loadProcessedDays = async () => {
    await axios.get(
      `http://localhost:8080/api/getCompletePlanOnlyTrueBothParents/${values.weekNumber}`,
      {},
      {}
    ).then(response => {
      if (response.status === 200) {
        setDayInfo(response.data);
      } else if (response.status === 204) {
        console.log("ingen content, hanterades inom loadProcessedDays..")
      }
    })
  };


  const loadCoParentName = async () => {
    await axios.get(
      `http://localhost:8080/localhost:8080/api/getCoParentName`,
      {},
      {}
    ).then(response => {
      if (response.status === 200) {
        setCoParentName(response.data);
      } else if (response.status === 204) {
        console.log("ingen content, hanterades inom loadProcessedDays..")
      }
    })
  };

  return (
    <div className="Day">
      
      <CalculatePlans />
      
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
            <Typography variant="h3">Välj vecka</Typography>
          </Grid>

          <Grid item sx={{ width: 0.5 }}>
            <FormControl fullWidth>
              <InputLabel >
                Veckonummer
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

              <TableCell align="right">Datum</TableCell>
              <TableCell align="right">Lämna</TableCell>
              <TableCell align="right">Hämta</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {dayInfo.map((day) => (
              <TableRow>

                <TableCell align="right">{day.dayDate}</TableCell>

                <TableCell align="right">{day.activity === 1 && <p>{day.userId}</p>} </TableCell>

                <TableCell align="right">{day.activity === 2 && <p> {day.userId} </p>}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ViewWeek;
