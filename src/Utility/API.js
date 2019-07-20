import axios from 'axios';

export default {
    newUser: function(userData) {
        console.log("message", userData);
        axios.post('/create/user', userData)
    },
}