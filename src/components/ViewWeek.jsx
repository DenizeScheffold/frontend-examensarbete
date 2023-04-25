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
import UserName from "./UsernameComponent";


function ViewWeek() {
  const [dayInfo, setDayInfo] = React.useState([]
  );

  const [values, setValues] = React.useState({
    weekNumber: ""
  });

  const [showErrorMessage, setShowErrorMessage] = React.useState(false)


  const handleChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value });
  };

  React.useEffect(() => {
    loadProcessedDays();
  },[values]
  );


  const loadProcessedDays = async () => {
    await axios.get(
    //get-request fetch only days that are set and only the activities (hämta/lämna) that have parents assigned to them. 
      `http://localhost:8080/api/getCompletePlanOnlyTrueBothParents/${values.weekNumber}`,
      {},
      {}
    ).then(response => {
      if (response.status === 200) {
        setDayInfo(response.data);
        setShowErrorMessage(false)
      } else if (response.status === 204) {
        setShowErrorMessage(true)
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
          marginBottom="5%"
          spacing={2}
        >
          <Grid item>
            <Typography variant="h5">Välj vecka för er gemensamma planering</Typography>
          </Grid>
          {showErrorMessage && <div className="errorMessage">Inga dagar kan visas för veckan.
            Klicka på <b>Räkna ut schemat</b> och testa igen.
            <br />
            Veckor som finns i demo 2-8.
          </div>}
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
      

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>

              <TableCell align="center"><b>Datum</b></TableCell>
              <TableCell align="center"><b>Lämna</b></TableCell>
              <TableCell align="center"><b>Hämta</b></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {dayInfo.map((day) => 
                 
              <TableRow>
           
                <TableCell align="center" key={day.dayDate}> {day.dayDate}</TableCell>
     
                <TableCell align="center" key={day.activity}> 
                {day.activity === 1 && <UserName userId={day.userId}/>} 
                </TableCell>
               
                <TableCell align="center"key={day.userId}>
                  {day.activity === 2 && <UserName userId={day.userId}/> }
                  </TableCell>

              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      </form>
    </div>
  );
}

export default ViewWeek;
