import React, { Component }           from 'react';
import NavigationItem                 from './NavigationItem/NavigationItem';
import Aux                            from '../../../hoc/Aux'
 
class NavigationItems extends Component {

    render() {
        const empty = "";
        const email = "you are logged as "+this.props.email;
        return(
            <Aux>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">
                                    {this.props.isAuthenticated ? <NavigationItem link="/logout">Logout</NavigationItem> : <NavigationItem link="/auth">Authenticate</NavigationItem> }
                                </a>
                            </li>
                        </ul>
                        <span class="navbar-text">
                            {this.props.email ? email : empty }   
                        </span>
                    </div>
                </nav>
            </Aux>
        )
    };
}


export default NavigationItems