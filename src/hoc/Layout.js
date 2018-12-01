import React, { Component }           from 'react';
import {connect}                      from 'react-redux';
import EnigmaPage                     from '../containers/EnigmaPage/EnigmaPage';
import Aux                            from './Aux';
import NavigationItems                from '../components/UI/NavigationItems/NavigationItems';
import * as actions                   from '../store/actions';


class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {}
        this.logout = this.logout.bind(this);
        this.props.authCheckState();
        this.isAuthenticated();
        //this.isAuthenticated = this.isAuthenticated.bind(this);
        /*
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
        */
    }

    componentDidMount() {
        console.log("pes: ",this.props.isAuthenticated);
    }

    logout() {
        this.props.history.push("/logout")
        //DEVO RIMUOVERE IL FLAG NELLO STATO IN LOGOUT!!!
    }

    getCookieValue = (a) => {
        var b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
        return b ? b.pop() : '';
    }

    isAuthenticated(){
        if(this.getCookieValue("authEnigmi")) {
            return true
        }
        return this.props.isAuthenticated
    }

    render() {
        var auth;
        auth = <NavigationItems isAuthenticated={this.isAuthenticated()} />;
        return(
            <Aux>
                {auth}
                <h2>layout</h2>
                <EnigmaPage user={this.state.uid}/>
                <h2>layout</h2>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated:state.isAuthenticated
    };
}
const mapDispatchToProps = dispatch => {
    return {
        authCheckState: () => dispatch(actions.authCheckState()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
