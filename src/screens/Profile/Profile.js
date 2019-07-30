import React, { useEffect } from "react";
import API from '../../Utility/API';
import { Link } from "react-router-dom";
import M from "materialize-css";
import views from './views.jpg';
import './styles.css';




const Profile = ({ name, userSince, setLoggedIn, setArticles, articleData }) => {

    const handleLogout = (e) => {
        e.preventDefault();
        API.logout(setLoggedIn)
    };

    const handleArticles = (e) => {
        API.getArticles(setArticles);
    }

    useEffect(() => {
        M.AutoInit();
    });


    return (
        <>
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo"><Link to="/profile">Welcome</Link></a>
                    <ul id="dropdown1" className="dropdown-content">
                        <li><a href="#">My Colleges</a></li>
                        <li><a href="#">My Careers</a></li>
                        <li><a href="#">Search</a></li>
                        <li onClick={handleLogout}><a>Logout</a></li>
                    </ul>
                    <nav>
                        <div className="nav-wrapper">
                            <ul className="right hide-on-med-and-down">
                                <li><a className="dropdown-trigger" href="#!" data-target="dropdown1"><i className="material-icons right">arrow_drop_down</i></a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </nav>

            <ul id="slide-out" className="sidenav">
                <li><div className="user-view">
                    <div className="background">
                        <img className="wave" src={views} />
                    </div>
                    <a href="#user"><img className="circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Toxq1hE3a7ePm_JbJGOyzSEjzUPlk_6gk9kuibe9HFgr7-s0xQ" /></a>
                    <h3>Hello,</h3>
                    <h5>{name}</h5>
                    <p>Member since: {userSince}</p>
                </div></li>
                <li><a className="subheader">View..</a></li>
                <li><a href="#!">My Colleges</a></li>
                <li><a href="#!">My Careers</a></li>
                <li><div className="divider"></div></li>
                <li><a className="subheader">Or..</a></li>
                <li><a className="waves-effect" href="#!">Search</a></li>
                <li onClick={handleLogout}><a>Logout</a></li>
            </ul>
            <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        </>
    )
}


export default Profile;