//Ask user to select a week. 
//Make call to database with userid + week + hsa value in possible


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
import FormControl from "@mui/material/FormControl";

function ViewWeek() {
  const [dayInfo, setDayInfo] = React.useState([]
  );
  const [values, setValues] = React.useState({
    weekNumber: ""
  });

  const IsActivity1 = (props) => {
    let {activity} = props;

    if(activity === 1){
      return( true)
    } else {
      return (false)
    }
  }


  const handleChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value });
    console.log(values.data);
  };

  
  React.useEffect(() => {
    //   calculateDays();
    loadProcessedDays();
  });
  /* 
    const calculateDays = async () => {
      const result = await axios.get(
        `http://localhost:8080/api/getPlanForProcessUser`,
        {},
        {}
      );
      console.log(result);
      setDayInfo(result.data);
    };
   */
  const loadProcessedDays = async () => {
    const result = await axios.get(
      `http://localhost:8080/api/getCompletePlanOnlyTrueBothParents/${values.weekNumber}`,
      // `http://localhost:8080/api/getCompletePlan`,
      {},
      {}
    );
    console.log(result);
    setDayInfo(result.data);
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
                            <TableCell align="right">day id</TableCell>
              <TableCell align="right">Datum</TableCell>
              <TableCell align="right">Lämna</TableCell>
              <TableCell align="right">Hämta</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {dayInfo.map((day) => (
              <TableRow>
                     <TableCell align="right">{day.dayId}</TableCell>
                <TableCell align="right">{day.dayDate}</TableCell>

 
                <TableCell align="right"> {IsActivity1} {day.activity===true} {day.userId}</TableCell>
         
                <TableCell align="right">{IsActivity1} {day.activity===true} {day.userId}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ViewWeek;
