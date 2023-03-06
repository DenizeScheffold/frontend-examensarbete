import React from "react";
import {useParams} from 'react-router-dom'

function WelcomeComponent() {

    const {username } = useParams()

    return (
        <div className="WelcomeComponent">
            <h1>Välkommen {username}</h1>
            </div>
    )
         
}

export default WelcomeComponent
