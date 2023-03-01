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
//import { useParams } from "react-router-dom";

function ViewWeek() {
  const [dayInfo, setDayInfo] = React.useState([]
    /*{
    userId: "",
    dayId: "",
    weekNumber: "",
    dayDate: "",
    activity: "",
    possible: "",
  }*/
  );


  // let {userId} = useParams();

  React.useEffect(() => {
    loadSetDay();
  });

  const loadSetDay = async () => {
    const result = await axios.get(
      `http://localhost:8080/api/getPlanForProcessUser`,
      //${userId}`,
      {},
      {}
    );
    console.log(result);
    setDayInfo(result.data);
  };

  return (
    <div className="Day">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Your Profile</TableCell>
              <TableCell align="right">day id</TableCell>
              <TableCell align="right">week number</TableCell>
              <TableCell align="right">date</TableCell>
              <TableCell align="right">activity</TableCell>
              <TableCell align="right">possible
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>

            <TableRow>
              <TableCell component="th" scope="row">
                {dayInfo.userId}
              </TableCell>
              <TableCell align="right">{dayInfo.dayId}</TableCell>
              <TableCell align="right">{dayInfo.weekNumber}</TableCell>
              <TableCell align="right">{dayInfo.dayDate}</TableCell>
              <TableCell align="right">{dayInfo.activity}</TableCell>
              <TableCell align="right">{dayInfo.possible}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ViewWeek;
