import React, { Component }           from 'react';
import {connect}                      from 'react-redux';
import * as actions                   from '../../store/actions';

class Logout extends Component {
    componentDidMount(props){
        this.props.logout();
    }

    render() {
        return(<h1>Logout</h1>)
    }
}

const mapStateToProps = state => {
    return {

    };
}
const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
