import React from "react";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";

function LoginComponent() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const navigate = useNavigate()
    const authContext = useAuth()

    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    async function handleSubmit() {
        if (await authContext.login(username, password)) {
            navigate(`/welcome/${username}`)
        } else {
            setShowErrorMessage(true)
        }
    }

    return (
        <div className="LoginComponent">
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
                    <Typography variant="h3">Välkommen till Kindi</Typography>
                </Grid>

                {showErrorMessage && <div className="errorMessage">Authentication Failed.
                    Please check your credentials.</div>}
                <div className="LoginForm">
                    <div>
                        <InputLabel >
                            Användarnamn
                        </InputLabel>
                        <input type="text" name="username" value={username} onChange={handleUsernameChange} />
                    </div>
                    <div>
                        <InputLabel >
                            Lösenord
                        </InputLabel>
                        <input type="password" name="password" value={password} onChange={handlePasswordChange} />
                    </div>
                    <Button
                        fullWidth
                        variant="contained"
                        onClick={handleSubmit}
                        sx={{ mt: 1 }}
                    >
                        <Typography >LOGGA IN</Typography>
                    </Button>
                </div>
            </Grid>
        </div>
    )
}

export default LoginComponent