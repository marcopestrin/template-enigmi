import React, { Component }           from 'react';
import EnigmaPage                     from '../containers/EnigmaPage/EnigmaPage';
import Aux                            from './Aux';

class Layout extends Component {
    render() {
        return(
            <Aux>
                <h2>layout</h2>
                <EnigmaPage />
                <h2>layout</h2>
            </Aux>
        )
    }
}
export default Layout;
