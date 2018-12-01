import React, {Component}             from 'react';
import {Route,Switch,withRouter,Redirect}      from 'react-router-dom';
import {connect}                      from 'react-redux';
import fire                           from './config/Fire';
import Layout                         from './hoc/Layout';
import Aux                            from './hoc/Aux';
import history                        from './hoc/History';
import Logout                         from './components/Auth/Logout';
import Login                          from './components/Auth/Login'
import * as actions                   from './store/actions/index' ;


class App extends Component {

    constructor() {
        super();
        this.state = ({
          user: null,
        });
        this.authListener = this.authListener.bind(this);
    }

    componentDidMount() {
        this.authListener();
    }

    authListener() {
        fire.auth().onAuthStateChanged((user) => {
          if (user) {
            this.setState({ user });
            localStorage.setItem('user', user.uid);
          } else {
            this.setState({ user: null });
            localStorage.removeItem('user');
          }
        });
      }

    render() {
        var routes = (
            <Switch>
                <Route history = {history} path='/logout' component={Logout}  />
                <Route history = {history} path='/auth' component={Login} />
                <Route history = {history} path='/' exact component={Layout}  />
                <Redirect to="/" />
            </Switch>
        );
        return(
            <div>
                <Aux>
                    {routes}
                </Aux>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        authCheckState: () => dispatch(actions.authCheckState())
    };
}
const mapStateToProps = state => {
    return {

    }
}

  export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
