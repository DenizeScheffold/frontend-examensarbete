import * as React from "react";
import axios from "../api/ApiClient"
import { Button } from "@mui/material";



function CalculatePlans() {

  const startCalc = async (e) => {
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

      <Button
        fullWidth
        variant="contained"
        onClick=
        {startCalc}
      >
        Räkna ut schemat
      </Button>


    </div>
  );



}
export default CalculatePlans;
