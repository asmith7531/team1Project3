import React, { useEffect, useState } from "react";
import API from '../../Utility/API';
import { Link } from "react-router-dom";
import M from "materialize-css";
import views from './views.jpg';
import Form from "../../components/Form";
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
                setComponent(<Form id={id} />)
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
                <li><button>My Colleges</button></li>
                <li><button>My Careers</button></li>
                <li><div className="divider"></div></li>
                <li><a className="subheader">Or..</a></li>
                <li><button
                    onClick={handleSwitch}
                    value="form"
                    className="waves-effect">Search
                    </button>
                </li>
                <li><button
                    onClick={handleLogout}>
                    Logout
                </button>
                </li>
            </ul>
            <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>

            <div class="row">
                <div class="col s9">
                    {
                        (displayForm) ? component : null
                    }
                </div>
                <div class="col s3">
                    <section class="flow-text center-align">
                        <h3>
                            <a onClick={handleArticles}>
                                Current Events
                            </a>
                        </h3>
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
                    </section>
                </div>
            </div>
        </>
    )
}


export default Profile;