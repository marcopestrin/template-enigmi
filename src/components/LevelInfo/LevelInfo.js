import React, { Component }           from 'react';

class LevelInfo extends Component {

    constructor(props) {
        super(props);
        console.log("props dell'enigma",props)
    }

    render() {
        return(<h1>tutto le informazioni del livello</h1>)
    }
}
export default LevelInfo;
