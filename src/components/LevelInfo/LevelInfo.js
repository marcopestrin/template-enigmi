import React, { Component }           from 'react';
import {connect}                      from 'react-redux';
import * as actions                   from '../../store/actions';


class LevelInfo extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <p><strong>Difficulty</strong>: {this.props.difficulty}</p>
                <p><strong>Level</strong>: {this.props.levelNumber}</p>
            </div>
        )
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
