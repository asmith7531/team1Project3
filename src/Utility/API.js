import axios from 'axios';




export default {
    newUser: function (userData) {
        console.log("message", userData);
        axios.post('/create/user', userData)
            .then(function (response) {
                alert(`Hello ${response.data.username}. Click Login`);
                console.log(response);

            });
    },
    login: function (userData, setLoggedIn, setUserSince, setName, push) {
        console.log("message", userData);
        axios.post('/api/login', userData)
            .then(function (response) {
                console.log(response);
                alert(`logged in as ${response.data.username}`);
                setLoggedIn(true);
                let date = response.data.createdAt;
                let formattedDate = date.slice(0, 10);
                setUserSince(formattedDate);
                setName(response.data.username);
                push("/profile");
            })
            .catch(function (error) {
                alert("incorrect username or password");
                console.log("ERROR", error);
            });
    },

    logout: function (setLoggedIn) {
        axios.get("/logout")
            .then(function (response) {
                setLoggedIn(false);
                console.log("setLoggedIn to FALSE", response);
            })
    },

    getArticles: function() {
        axios.get("/api/articles")
            .then(function(feedback) {
                console.log("hopefully every article", feedback);
            })
    }
};