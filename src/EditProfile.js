import * as React from "react";
import { useState } from "react";
import axios from "./api/ApiClient";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { Button } from "@mui/material";

function EditProfile() {
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");
  const [profileInfo, setProfileInfo] = React.useState({
    email: "",
    otherParentId: "",
  });

  const handleChange = (prop) => (e) => {
    setProfileInfo({ ...profileInfo, [prop]: e.target.value });
  }; //TODO: THEN GO TO PROFILE. NOW USER GETS LOGGED OUT AFTER EDIT

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios.patch(
      `http://localhost:8080/api/editUser`,
      {
        email: profileInfo.email,
        otherParentId: profileInfo.otherParentId,
      }, {}
    );
    setMessage("User updated");
    setMessageColor("text-green-500");
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
            <Typography variant="h2">Edit Profile</Typography>
          </Grid>

          <Grid item sx={{ width: 0.5 }}>
            <FormControl fullWidth>
              <InputLabel>Email</InputLabel>
              <OutlinedInput
                label="email"
                value={profileInfo.firstName}
                onChange={handleChange("email")}
                sx={{ borderRadius: "29px" }}
              />
            </FormControl>
          </Grid>
          <Grid item sx={{ width: 0.5 }}>
            <FormControl fullWidth>
              <InputLabel>Other parent´s id</InputLabel>
              <OutlinedInput
                label="otherParentId"
                value={profileInfo.otherParentId}
                onChange={handleChange("otherParentId")}
                sx={{ borderRadius: "29px" }}
              />
            </FormControl>
            <p className={`${messageColor} text-center`}>{message}</p>
          </Grid>

        </Grid>

        <Button fullWidth variant="contained" type="submit">
          Klar
        </Button>
      </form>
    </div>
  );
}

export default EditProfile;
