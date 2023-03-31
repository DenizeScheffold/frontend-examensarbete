import * as React from "react";
import axios from "../api/ApiClient";

function UserName ({ userId }) {

    const [parentName, setParentName] = React.useState("")

    React.useEffect(() => {
        loadParentName({ userId });
        console.log("inside usernamecomponent useeffect")
    },[userId]);
   
    const loadParentName = async ({ userId }) => {
       await axios.get(
            `http://localhost:8080/api/getUsernameFromId/${userId}`,
            {},
            {}
        ).then(response => {
            if (response.status === 200) {
                setParentName(response.data);
            } else if (response.status === 204) {
                console.log("ingen content, hanterades inom loadParentName..")
            }
        })
    };

    return (parentName);
}
export default UserName;