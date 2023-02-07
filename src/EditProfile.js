import * as React from "react";
import axios from "./api/ApiClient";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";


function EditProfile() {
  const [profileInfo, setProfileInfo] = React.useState({
    firstName: "",
    lastName: "",
   
  });

  const handleChange = (prop) => (e) => {
    setProfileInfo({ ...profileInfo, [prop]: e.target.value });
  }; //TODO: THEN GO TO PROFILE. NOW USER GETS LOGGED OUT AFTER EDIT

let {username} = useParams();
console.log(username);

  const handleSubmit = () => {
   
  axios.patch(
      `http://localhost:8080/user/edituser/${username}`,
      {
        firstName: profileInfo.firstName,
        lastName: profileInfo.lastName,
      },{}
    );
  
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
              <InputLabel>Förnamn</InputLabel>
              <OutlinedInput
                label="Förnamn"
                value={profileInfo.firstName}
                onChange={handleChange("firstName")}
                sx={{ borderRadius: "29px" }}
              />
            </FormControl>
          </Grid>
          <Grid item sx={{ width: 0.5 }}>
            <FormControl fullWidth>
              <InputLabel>Efternamn</InputLabel>
              <OutlinedInput
                label="Efternamn"
                value={profileInfo.lastName}
                onChange={handleChange("lastName")}
                sx={{ borderRadius: "29px" }}
              />
            </FormControl>
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
