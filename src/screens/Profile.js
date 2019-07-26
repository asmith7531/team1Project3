import React, { useEffect } from "react";
import API from '../Utility/API';
import { Link } from "react-router-dom";
import M from "materialize-css";

const Profile = ({ name, setLoggedIn }) => {

    const handleLogout = (e) => {
        e.preventDefault();
        API.logout(setLoggedIn)
    };

    useEffect(() => {
        M.AutoInit();
    })


    return (
        <>
            <nav>
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo"><Link to="/profile">Welcome {name}</Link></a>
                    <ul id="dropdown1" class="dropdown-content">
                        <li><a href="#">My Colleges</a></li>
                        <li><a href="#">My Careers</a></li>
                        <li><a onClick={handleLogout}>Logout</a></li>
                    </ul>
                    <nav>
                        <div class="nav-wrapper">
                            <ul class="right hide-on-med-and-down">
                                <li><a class="dropdown-trigger" href="#!" data-target="dropdown1"><i class="material-icons right">arrow_drop_down</i></a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </nav>
        </>
    )
}


export default Profile;