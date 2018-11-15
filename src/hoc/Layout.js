import React, { Component }           from 'react';
import {connect}                      from 'react-redux';
import EnigmaPage                     from '../containers/EnigmaPage/EnigmaPage';
import Aux                            from './Aux';
import NavigationItems                from '../components/UI/NavigationItems/NavigationItems';
import fire                           from '../config/Fire';

class Layout extends Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this); 

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
    }

    render() {
        var auth;
        var isAuthenticated;
        
        if(this.props.location.state.login) {
            //sono loggato
            isAuthenticated = true;
        }else{
            //non sono loggato
            isAuthenticated = false;
        }
        
        
        auth = <NavigationItems isAuthenticated={this.state.isAuthenticated} />;

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