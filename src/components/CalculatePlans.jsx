import * as React from "react";
import axios from "../api/ApiClient"
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";


function CalculatePlans() {

  const startCalc = async (e) => {
    console.log("try to process days...")
    const result = await axios.get(
      `http://localhost:8080/api/getPlanForProcessUser`,
      {},
      {}
    )
      .catch((err) => console.log(err));
    console.log(result);

  };

  return (

    <div className="App">
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
      <Button
        fullWidth
        variant="contained"
        onClick=
        {startCalc}
      >
        Räkna ut schemat
      </Button>

      </Grid>
    </div>
  );



}
export default CalculatePlans;
