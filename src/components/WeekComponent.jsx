import * as React from "react";
import axios from "../api/ApiClient";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import {Button } from "@mui/material";



function Week() {

  const [values, setValues] = React.useState({
    dayId: "",
    possible: "",
  });

  const handleChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value });
    console.log(values.data);
  };

  const handleSubmit = (dayId) => {
      axios.patch(`http://localhost:8080/api/editDay/${dayId}`, 
      { dayId: values.dayId, possible: values.possible
    },{})
    console.log(values.data);
  };

    return (

      <div className="App">

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
      <Grid item>
        <Typography variant="h2">Set Plan</Typography>
      </Grid>

      <Grid item sx={{ width: 0.5 }}>
        <FormControl fullWidth>
          <InputLabel >
            DayId
          </InputLabel>
          <OutlinedInput
            label="dayId"
            
           onChange={handleChange("dayId")}
            sx={{ borderRadius: "29px" }}
          />
        </FormControl>
        </Grid>

      <Grid item sx={{ width: 0.5 }}>
        <FormControl fullWidth>
          <InputLabel>
            possible
          </InputLabel>
          <OutlinedInput
            label="possible"
            value={values.possible}
           onChange={handleChange("possible")}
            sx={{ borderRadius: "29px" }}
          />
        </FormControl>
      </Grid>
      </Grid>
      
      <Button
            fullWidth
            variant="contained"
            type="submit"
            >
            Klar
            </Button>
    </form>


</div>
    );

    
  
    }
  export default Week;
  