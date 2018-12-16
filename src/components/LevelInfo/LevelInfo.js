import React, { Component }           from 'react';
import {connect}                      from 'react-redux';
import * as actions                   from '../../store/actions';


class LevelInfo extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(<h1>tutto le informazioni del livello</h1>)
    }
}
const mapStateToProps = state => {
    return {


    };
}
const mapDispatchToProps = dispatch => {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LevelInfo);
