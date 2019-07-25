import axios from 'axios';
import React from 'react';
import {
    Route,
    Redirect
} from "react-router-dom";

export default {
    newUser: function (userData, setIsCreated) {
        console.log("message", userData);
        axios.post('/create/user', userData)
        .then(function(response) {
            <Redirect to="/login" />
        })
        // .then(function(response) {
        //     setIsCreated(true);
        // });
    },
    login: function (userData, setLoggedIn, setName, push) {
        console.log("message", userData);
        axios.post('/api/login', userData)
            .then(function (response) {
                console.log(response);
                alert(`logged in as ${response.data.username}`);
                setLoggedIn(true);
                setName(response.data.username);
                push("/profile");
            })
            .catch(function (error) {
                alert("incorrect username or password");
                console.log("ERROR", error);
            });
    }
};