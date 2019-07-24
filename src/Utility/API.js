import axios from 'axios';

export default {
    newUser: function (userData) {
        console.log("message", userData);
        axios.post('/create/user', userData);
    },
    login: function (userData, setLoggedIn, push) {
        console.log("message", userData);
        axios.post('/api/login', userData)
            .then(function (response) {


                alert(`logged in as ${response.data.username}`)
                console.log(response);
                setLoggedIn(true);
                push("/profile")

            })
            .catch(function (error) {
                alert("incorrect username or password");
                console.log("ERROR", error);
            });
    }
};