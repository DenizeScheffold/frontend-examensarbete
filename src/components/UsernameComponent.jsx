import * as React from "react";
import axios from "../api/ApiClient";

function UserName({ userId }) {

    const [parentName, setParentName] = React.useState("")

    React.useEffect(() => {
        loadParentName({ userId });
    },[]);

    const loadParentName = ({ userId }) => {

        axios.get(
            `http://localhost:8080/api/getUsernameFromId/${userId}`,
            {},
            {}
        ).then(response => {
            if (response.status === 200) {
                setParentName(response.data);
                console.log(parentName)
            } else if (response.status === 204) {
                console.log("ingen content, hanterades inom loadParentName..")
            }
        })
    };

    return (parentName);
}
export default UserName;