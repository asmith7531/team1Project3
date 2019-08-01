import React, { useEffect, useState } from "react";
import API from '../../Utility/API';
import M from "materialize-css";
import views from './views.jpg';
import roads from './road_to_success.jpg';
import Form from "../../components/Form";
import Clock from "../../components/Clock";
import { Link, Element } from 'react-scroll'
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
        console.log("HANDLING SWITCH OF COMPONENT");
        console.log(e.target.value);
        switch (e.target.value) {
            case "form":
                setComponent(<Form />)
                console.log(component);
                break;
            case "colleges":
                setComponent(<Form />)
                break;
        }
        setDisplayForm(true);
        console.log(displayForm);
        console.log(component);
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
                <li onClick={handleSwitch} value="form">
                    <Link
                        activeClass="active" className="test1" to="content" spy={true} smooth={true} duration={500}
                    // onClick={handleSwitch} value="form"
                    // activeClass="active" className="test1" to="content" spy={true} smooth={true} duration={500}
                    >
                        <button
                            onClick={handleSwitch}
                            value="form"
                        >
                            Search
                        </button>
                    </Link>
                </li>
                <li><button
                    onClick={handleLogout}>
                    Logout
                </button>
                </li>
                <li><div className="divider"></div></li>
                <li><a className="subheader">Extras</a></li>
                <li>
                    <Link
                        onClick={handleArticles}
                        activeClass="active" className="test1" to="content" spy={true} smooth={true} duration={500}>
                        Articles
                    </Link>
                </li>
            </ul>

            <div class="parallax-container">
                <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <div class="parallax">
                    <img src={roads} />
                </div>
                <Clock/>
            </div>

            <Element name="content" className="element">
                <div class="row">
                    <div class="col s9">
                        {(displayForm) ? component : null}
                    </div>
                    <div class="col s3">
                        <section class="flow-text center-align">
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
                                            <div className="divider"></div>
                                        </li>
                                    )
                                )}
                            </ul>
                        </section>
                    </div>
                </div>
            </Element>




        </>
    )
}


export default Profile;