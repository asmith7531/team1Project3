import React, { Component } from 'react';

import axios from 'axios';


class Test extends Component {

    componentDidMount() {
        console.log("hiii")
        axios.get('/api/cards')
        .then( (response) => {
            console.log(response.data);
        })
    }

    render() {
        return <h1>test</h1>
    }
};

export default Test
