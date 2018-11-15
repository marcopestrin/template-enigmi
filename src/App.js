import React, {Component}             from 'react';
import {Route,Switch,withRouter,Redirect}      from 'react-router-dom';
import fire                           from './config/Fire';
import Layout                         from './hoc/Layout';
import Aux                            from './hoc/Aux';
import Logout                         from './components/Auth/Logout';
import Register                       from './components/Auth/Register';
import Login                          from './components/Auth/Login';

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
                <Route path='/logout' component={Logout}  />
                <Route path='/register' component={Register} />
                <Route path='/auth' component={Login} />
                <Route path='/' exact component={Layout}  />
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

export default withRouter(App);
