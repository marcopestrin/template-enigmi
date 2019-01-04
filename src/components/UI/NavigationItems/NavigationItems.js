import React, { Component }           from 'react';
import NavigationItem                 from './NavigationItem/NavigationItem';
import Aux                            from '../../../hoc/Aux'
 
class NavigationItems extends Component {

    render() {
        const empty = "";
        const email = "you are logged as "+this.props.email;
        return(
            <Aux>
                <p>
                    {this.props.email ? email : empty }            
                </p>
                <ul>
                    {this.props.isAuthenticated ? <NavigationItem link="/logout">Logout</NavigationItem> : <NavigationItem link="/auth">Authenticate</NavigationItem> }
                </ul>
            </Aux>
        )
    };
}


export default NavigationItems