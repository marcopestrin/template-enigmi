import React, { Component }           from 'react';
import {connect}                      from 'react-redux';
import EnigmaPage                     from '../containers/EnigmaPage/EnigmaPage';
import Aux                            from './Aux';
import NavigationItems                from '../components/UI/NavigationItems/NavigationItems';
import fire                           from '../config/Fire';

class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {}
        this.logout = this.logout.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);

        if(!this.props.isAuthenticated) {
            this.setState({authenticated: false });
        }

        fire.auth().onAuthStateChanged((user) => {
            if (user) {
              this.setState({ id: user.uid, authenticated: true });
            } else {
              this.setState({authenticated: false });
            }
        });
    }

    logout() {
        this.props.history.push("/logout")
        //DEVO RIMUOVERE IL FLAG NELLO STATO IN LOGOUT!!!
    }

    isAuthenticated(){
        return this.state.authenticated;
    }

    render() {
        var auth;
        
        auth = <NavigationItems isAuthenticated={this.isAuthenticated()} />;

        return(
            <Aux>
                {auth}
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