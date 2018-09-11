import React, {Component}            from 'react';
import classes                       from './EnigmaPage.css';
import LevelInfo                     from '../../components/LevelInfo/LevelInfo';
import Password                      from '../../components/Password/Password';
import Enigma                        from '../../components/Enigma/Enigma';
class EnigmaPage extends Component {
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