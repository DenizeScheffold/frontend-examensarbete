import React from "react";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {Button } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

function LoginComponent() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const navigate = useNavigate()
    const authContext = useAuth()
    const[showPassword, setShowPassword] = useState(false);
   

    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }


    
    async function handleSubmit() {
        console.log("testar att logga in...")
        if (await authContext.login(username, password)) {
            console.log("borde kunna logga in...", username,password)
            navigate(`/welcome/${username}`)
        } else {
            console.log("gick inte att logga in...")
            setShowErrorMessage(true)
        }
    }

    return (
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
          <Typography variant="h2">Välkommen till Kindi</Typography>
   
        <FormControl fullWidth>
            <InputLabel >
            Användarnamn
            </InputLabel>
            <OutlinedInput
              label="username"
              value={username}
              onChange={handleUsernameChange}
              sx={{ borderRadius: "29px" }}
            />
          </FormControl>
          </Grid>
          <Grid item sx={{ width: 0.5 }}>
          <FormControl fullWidth>
            <InputLabel >
            Lösenord*
            </InputLabel>
            <OutlinedInput
              label="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              sx={{ borderRadius: "29px" }}
            />
            {showErrorMessage && <div className="errorMessage">Authentication Failed.
                Please check your credentials.</div>}
         
          </FormControl>
          <Button
            fullWidth
            variant="contained"
            type="submit"
            sx={{ mt: 1 }}
          >
            <Typography >Logga in</Typography>
          </Button>
        </Grid>
        </Grid>
        </form>
        
     
           
   
    )
}

export default LoginComponent