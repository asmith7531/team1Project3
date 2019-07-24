import axios from 'axios';

export default {
    newUser: function (userData) {
        console.log("message", userData);
        axios.post('/create/user', userData);
    },
    login: function (userData) {
        console.log("message", userData);
        axios.post('/api/login', userData)
            .then(function (response) {
                alert(`logged in as ${response.data.username}`)
                console.log(response);
            })
            .catch(function (error) {
                alert("incorrect username or password");
                console.log("ERROR", error);
            });
    }
};