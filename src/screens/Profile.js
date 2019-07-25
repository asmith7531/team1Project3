import React from "react";
import API from '../Utility/API';

const Profile = ({ name, setLoggedIn }) => {


    const handleLogout = (e) => {
        e.preventDefault();
        API.logout(setLoggedIn)
    };


    return (
        <>
            <h1>Welcome {name}</h1>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}


export default Profile;