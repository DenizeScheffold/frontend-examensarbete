import React from "react";
import { useParams } from 'react-router-dom'
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function WelcomeComponent() {

    const { username } = useParams()

    return (

        <div className="WelcomeComponent">
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
                    <Typography variant="h4">Välkommen {username}</Typography>
                </Grid>
            </Grid>
        </div>
    )

}

export default WelcomeComponent
