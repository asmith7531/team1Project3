import React from "react";

const Profile = ({props, name}) => {
    console.log(props);
    return (
        <>
            <h1>Welcome {name}</h1>
        </>
    )
}


export default Profile;