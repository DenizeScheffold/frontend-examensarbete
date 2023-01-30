import * as React from "react";
import axios from "./api/axios";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import {Button } from "@mui/material";


function Week() {

  const [values, setValues] = React.useState({
    weekNumber: "",
    userId: "",
    dayDate: "",
    activity:"",
    possible: "",
  });

  const handleChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value });
    console.log(values.data);
  };

  const handleSubmit = () => {
      axios.post("http://localhost:8080/api/setPlan", 
      {weekNumber: values.weekNumber, userId: values.userId, dayDate: values.dayDate, activity: values.activity, possible: values.possible
    },{auth: {
      username: "Kattis",
      password: "123456789"
    }})
    setValues(values.data);
    console.log(values.data);
  };
/*
  const handleChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value });
  };
  */
 /* const [weekInfo, setWeekInfo] = useState([]);


    useEffect(() => {
      loadWeek();
    });


    const loadWeek = async () => {

      /*  const result = await axios.post(`http://localhost:8080/.....`, {}, {auth: {
        username: "user",
        password: "fc5ad5bb-4447-4054-86d4-c1944366c0df"
      }});
      setWeekInfo(result.data);
    }
    
    const handleSetWeek = () => {
  */

     /* const d = new Date();
      Date.prototype.getWeek = function() {
        var onejan = new Date(this.getFullYear(), 0, 1);
        return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
    }
      let date = d.getDate();
      let week = d.getWeek();
      */
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
            WeekNumber
          </InputLabel>
          <OutlinedInput
            label="weekNumber"
            
           onChange={handleChange("weekNumber")}
            sx={{ borderRadius: "29px" }}
          />
        </FormControl>
        </Grid>
        <Grid item sx={{ width: 0.5 }}>
        <FormControl fullWidth>
          <InputLabel >
          userId
          </InputLabel>
          <OutlinedInput
            label="userId"
           value={values.userId}
            onChange={handleChange("userId")}
            sx={{ borderRadius: "29px" }}
          />
        </FormControl>
        </Grid>
        <Grid item sx={{ width: 0.5 }}>
        <FormControl fullWidth>
          <InputLabel>
            date
          </InputLabel>
          <OutlinedInput
            label="dayDate"
          //  value={values.dayDate}
            onChange={handleChange("dayDate")}
            sx={{ borderRadius: "29px" }}
          />
        </FormControl>
      </Grid>
      <Grid item sx={{ width: 0.5 }}>
        <FormControl fullWidth>
          <InputLabel>
            activity
          </InputLabel>
          <OutlinedInput
            label="acticity"
           // value={values.activity}
            onChange={handleChange("activity")}
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
         //   value={values.possible}
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
  