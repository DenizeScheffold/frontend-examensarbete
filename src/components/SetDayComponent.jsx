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
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from 'react-router-dom'
import { Button } from "@mui/material";

function SetDay() {

  const [dayInfo, setDayInfo] = React.useState([]
  );

  const [value, setValue] = React.useState({
    weekNumber: ""
  });

  const [checked, setChecked] = React.useState(false);

  const [possibleValue, setPossible] = React.useState(true);

  const [dayIdValue, setDayIdValue] = React.useState("");

  const [showErrorMessage, setShowErrorMessage] = React.useState(false)

  const [onSuccessMessage, setOnSucessMessage] = React.useState(false)


  const handleChange = (prop) => (e) => {
    setValue({ ...value, [prop]: e.target.value });
  };

  const handleCheckNo = (dayId) => {
    setDayIdValue(dayId);
    setChecked(checked);
    setPossible(!checked);
    console.log("the result: ", possibleValue, dayIdValue)
  }
  const handleCheck = (dayId) => {

    setDayIdValue(dayId);
    setChecked(!checked);
    setPossible(checked);
    console.log("the result: ", possibleValue, dayIdValue)
  };

  const navigate = useNavigate()

  React.useEffect(() => {
    loadSetDay();
  });

  const loadSetDay = async () => {
    await axios.get(
      `http://localhost:8080/api/getDaysNotSet/${value.weekNumber}`,
      {},
      {}
    ).then(response => {
      if (response.status === 200) {
        setDayInfo(response.data);
        setShowErrorMessage(false)
      } else if (response.status === 204) {
        setShowErrorMessage(true)
        console.log("ingen content, hanterades inom loadSetDay..")
      } else {
        console.log("något som inte funkade....")
      }
    })

  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("the result in submit: ", possibleValue, dayIdValue)
    if(axios.patch(`http://localhost:8080/api/editDay/${dayIdValue}`,
      {
        dayId: dayIdValue, possible: possibleValue
      }, {})){
        setOnSucessMessage(true);
      } else{
        setOnSucessMessage(false);
      }
      
    navigate(`/setdays`)
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
            <Typography variant="h4">Välj vecka</Typography>
          </Grid>
          {showErrorMessage && <div className="errorMessage">Inga dagar kan visas för veckan.
            Du har redan planerat dessa dagar, dessa kan du hitta på SE ER PLAN.
            <br /> Veckor som finns tillgängliga för dig är 2-4.
          </div>}
          <Grid item sx={{ width: 0.5 }}>
            <FormControl fullWidth>
              <InputLabel >
                Veckonummer
              </InputLabel>
              <OutlinedInput
                label="weekNumber"
                value={value.weekNumber}
                onChange={handleChange("weekNumber")}
                sx={{ borderRadius: "29px" }}
              />
            </FormControl>
          </Grid>
        </Grid>
      </form>

      
      <form onSubmit={handleSubmit}>
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
      {onSuccessMessage && <div className="successmessage" style={{color: 'green'}}>Aktivitet sparades!
          </div>}
          </Grid>
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
              {dayInfo.map((day) => (
                <TableRow>
                  <TableCell component="th" scope="row">
                    {day.userId}
                  </TableCell>
                  <TableCell align="right">{day.dayId}</TableCell>
                  <TableCell align="right">{day.weekNumber}</TableCell>
                  <TableCell align="right">{day.dayDate}</TableCell>
                  <TableCell align="right">{day.activity === 1 ? <p>Lämna</p> : <p>Hämta</p>}
                    <TableCell component="th" scope="row">
                      Ja
                      <Checkbox
                        key={"possible"}
                        onChange={() => handleCheck(day.dayId)}
                        inputProps={{ 'aria-label': 'controlled' }} label="possible"
                      />
                      Nej
                      <Checkbox
                        key={"notPossible"}
                        onChange={() => handleCheckNo(day.dayId)}
                        inputProps={{ 'aria-label': 'controlled' }} label="notPossible"
                      />

                    </TableCell>
                    {/*    <Checkbox
                      key={day.dayId}
                      onChange={() => handleCheck(day.dayId)}
                      inputProps={{ 'aria-label': 'controlled' }} label="possible"
                    /> */}
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
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    
      </form>
    
    </div>
  );
}

export default SetDay;