import React, {Component}             from 'react';
import {Route,Switch,withRouter,Redirect}      from 'react-router-dom';
import Layout                         from './hoc/Layout';
import Aux                            from './hoc/Aux';
import EnigmaPage                     from './containers/EnigmaPage/EnigmaPage'
import Logout                         from './components/Auth/Logout';
import Login                          from './components/Auth/Login';
import Register                       from './components/Auth/Register';

class App extends Component {
    componentDidMount() {

    }
    render() {
        var routes = (
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/logout' component={Logout}  />
                <Route path='/register' component={Register} />
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
