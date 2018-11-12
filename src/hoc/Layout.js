import React, { Component }           from 'react';
import {connect}                      from 'react-redux';
import EnigmaPage                     from '../containers/EnigmaPage/EnigmaPage';
import SideDrawer                     from '../components/UI/SideDrawer/SideDrawer';
import Aux                            from './Aux';
import fire                           from '../config/Fire.js';

class Layout extends Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);  
        console.log("constructor - layout.js ",this);
     }

    componentDidMount(){
        console.log("componentDidMount - layout.js - login: ",this.props.location.state );
    }

    logout() {
        this.props.history.push("/logout")
    }

    render() {
        return(
            <Aux>
                <button onClick={this.logout}>Logout</button>
                <SideDrawer />
                <h2>layout</h2>
                <EnigmaPage />
                <h2>layout</h2>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated:state.auth != null
    }
}

export default connect(mapStateToProps)(Layout);