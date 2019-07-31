import React, { useEffect, useState } from "react";
import API from '../../Utility/API';
import { Link } from "react-router-dom";
import M from "materialize-css";
import views from './views.jpg';
import SchoolSearch from "../SchoolSearch";
import './styles.css';


const Profile = ({ name, userSince, setLoggedIn, setArticles, articles, id }) => {
    const [displayForm, setDisplayForm] = useState(false);
    const [component, setComponent] = useState(null);


    const handleLogout = (e) => {
        e.preventDefault();
        API.logout(setLoggedIn)
    };

    const handleArticles = (e) => {
        API.getArticles(setArticles);
    };

    const handleSwitch = (e) => {
        switch (e.target.value) {
            case "form":
                setComponent(<SchoolSearch id={id} />)
                break;
            case "colleges":
                setComponent(<Form />)
                break;
            default:
                paymentForm = null;
        }
        setDisplayForm(true);
    }

    useEffect(() => {
        M.AutoInit();
    });

    let latestArticles = articles.slice(-7);

    return (
        <>
            <ul id="slide-out" className="sidenav">
                <li><div className="user-view">
                    <div className="background">
                        <img className="wave" src={views} />
                    </div>
                    <h3>Welcome,</h3>
                    <h5>{name}</h5>
                    <p>Member since: {userSince}</p>
                </div></li>
                <li><a className="subheader">View..</a></li>
                <li><a href="#!">My Colleges</a></li>
                <li><a href="#!">My Careers</a></li>
                <li><div className="divider"></div></li>
                <li><a className="subheader">Or..</a></li>
                <li><button
                onClick={handleSwitch}
                value="form"
                className="waves-effect">Search</button></li>
                {/* <Link to="/schoolsearch">Search</Link> */}
                <li onClick={handleLogout}><a>Logout</a></li>
            </ul>
            <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <div>
                {
                    (displayForm) ? component : null
                }
            </div>

            <div class="row">
                <div class="col s4 offset-s8">
                    <span class="flow-text center-align">
                        <h3>
                            <a onClick={handleArticles}>
                                Current Events
                            </a>
                        </h3>
                    </span>
                </div>
                <div class="col s4 offset-s8">
                    <span class="flow-text">
                        <ul>
                            {latestArticles.map((article) =>
                                (
                                    <li>
                                        <div class="card">
                                            <div class="card-image">
                                                <img src={article.image} />
                                            </div>
                                            <div class="card-content">
                                                <h4>
                                                    {article.header}
                                                </h4>
                                            </div>
                                            <div class="card-action">
                                                <a href={article.url}>{article.author}</a>
                                            </div>
                                        </div>
                                        {/* <h6><a href={article.url}>{article.header}</a></h6>
                                        <img className="wave" src={article.image} />
                                        <h4>{article.author}</h4> */}
                                        <div className="divider"></div>
                                    </li>
                                )
                            )}
                        </ul>
                    </span>
                </div>
            </div>
        </>
    )
}


export default Profile;