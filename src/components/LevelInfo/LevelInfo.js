import React, { Component }           from 'react';
import {connect}                      from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';


class LevelInfo extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <span className={this.props.classes}>
                    Difficulty: <strong>{this.props.difficulty}</strong>
                </span>
                <span className={this.props.classes}>
                    Level: <strong>{this.props.levelNumber}</strong>
                </span>
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
