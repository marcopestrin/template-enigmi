import React            from 'react';
import NavigationItems  from '../NavigationItems/NavigationItems';

const SideDrawer = (props) => {
    return (
        <nav>
            <NavigationItems isAuthenticated={props.isAuth}/>
        </nav>
    );
};

export default SideDrawer;