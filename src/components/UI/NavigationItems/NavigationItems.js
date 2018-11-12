import React            from 'react';
import NavigationItem   from './NavigationItem/NavigationItem';
 
const NavigationItems = (props) => (
    <ul>
        {props.isAuthenticated ? <NavigationItem link="/logout">Logout</NavigationItem> : <NavigationItem link="/auth">Authenticate</NavigationItem> }
    </ul>
);

export default NavigationItems;