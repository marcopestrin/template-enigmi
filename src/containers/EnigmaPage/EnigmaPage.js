import React, {Component}            from 'react';
import classes                       from './EnigmaPage.css';
import LevelInfo                     from '../../components/LevelInfo/LevelInfo';
import Password                      from '../../components/Password/Password';
import Enigma                        from '../../components/Enigma/Enigma';
import Axios                         from '../../hoc/Axios';
class EnigmaPage extends Component {

    componentDidMount(){
        Axios.get("/enigmi.json")
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err)
            })
    }

    render(){
        return (
            <div className={classes.EnigmaPage}>
                <div className={classes.Header}>
                    <div><LevelInfo /></div>
                    <div><Password /></div>
                </div>
                <Enigma />
            </div>
        )
    }
    
}

export default EnigmaPage;