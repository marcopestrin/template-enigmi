import React, {Component}            from 'react';
import classes                       from './EnigmaPage.css';
import LevelInfo                     from '../../components/LevelInfo/LevelInfo';
import Password                      from '../../components/Password/Password';
import Enigma                        from '../../components/Enigma/Enigma';
import fire                          from '../../config/Fire';
class EnigmaPage extends Component {

    constructor(props){
        super(props);
        this.readUserData();

        console.log("props enigmapage",props);
    }

    readUserData() {
        fire.database().ref('enigmi/').once('value')
            .then(function(result){
                console.log("--->>>>",result.val());
                return result.val()
            });
    }

    render(){
        return (
            <div className={classes.EnigmaPage}>aaa
                <div className={classes.Header}>
                    <div><LevelInfo readUserData={this.readUserData()}/></div>
                    <div><Password /></div>
                </div>
                <Enigma /> aaa
            </div>
        )
    }
    
}

export default EnigmaPage;