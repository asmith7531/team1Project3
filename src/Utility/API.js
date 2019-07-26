import axios from 'axios';


export default {
    newUser: function (userData) {
        console.log("message", userData);
        axios.post('/create/user', userData)
        .then(function(response) {
            alert(`Hello ${response.data.username}. Click Login`);
            console.log(response);

        });
    },
    login: function (userData, setLoggedIn, setName, push) {
        console.log("message", userData);
        axios.post('/api/login', userData)
            .then(function (response) {
                console.log(response);
                alert(`logged in as ${response.data.username}`);
                setLoggedIn(true);
                setName(response.data.username);
                setUserSince(response.data.createdAt);
                push("/profile");
            })
            .catch(function (error) {
                alert("incorrect username or password");
                console.log("ERROR", error);
            });
    },

    logout: function (setLoggedIn) {
        axios.get("/logout")
        .then(function(response) {
            setLoggedIn(false);
            console.log("setLoggedIn to FALSE", response);
        })
    }
};