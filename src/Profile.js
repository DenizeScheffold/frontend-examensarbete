import * as React from "react";
import axios from "./api/ApiClient";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


function Profile() {
  const navigate = useNavigate();
  const [profileInfo, setProfileInfo] = React.useState({
    username: "",
    userId: "",
    otherParentId: "",
    email: "",
    role: "",
  });

  React.useEffect(() => {
    loadProfile();
  });

  const loadProfile = async () => {
    const result = await axios.get(
      `http://localhost:8080/api/getUser`,
      {},
      {}
    );
    setProfileInfo(result.data);
  };

  const deleteUser = async () => {
    await axios.delete(
      `http://localhost:8080/api/deleteUserById`,
      {},
      {}
    );
    loadProfile();
  };

  return (
    <div className="App">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Your Profile</TableCell>
              <TableCell align="right">Id</TableCell>
              <TableCell align="right">Your co-parent´s Id</TableCell>
              <TableCell align="right">E-mail</TableCell>
              <TableCell align="right">Role</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {profileInfo.username}
              </TableCell>
              <TableCell align="right">{profileInfo.userId}</TableCell>
              <TableCell align="right">{profileInfo.otherParentId}</TableCell>
              <TableCell align="right">{profileInfo.email}</TableCell>
              <TableCell align="right">{profileInfo.role}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <button
        className="btn btn-danger mx-2"
        onClick={() => deleteUser(profileInfo.userId)}
      >
        Radera profil
      </button>
      <button
        className="btn btn-success mx-2"
        onClick={() => navigate("/editprofile")} 
      >
        Redigera profil
      </button>
    </div>
  );
}

export default Profile;
