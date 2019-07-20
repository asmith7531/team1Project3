import axios from 'axios';

export default {
    newUser: function (userData) {
        console.log("message", userData);
        axios.post('/create/user', userData);
    },

    login: function (userData) {
        console.log("message", userData);
        axios.post('/api/login', userData);
    }
}