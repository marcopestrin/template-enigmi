import React, { Component }           from 'react';
import fire                           from '../../config/Fire';

class Logout extends Component {
    componentDidMount(){
        fire.auth().signOut();
        console.log("auth in logou.js:",fire.auth());
        this.props.history.push({
            pathname:"/", 
            state: {
                login: false
            }
        });
    }
    render() {
        return(<h1>Logout</h1>)
    }
}
export default Logout;
