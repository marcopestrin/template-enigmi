import React, {Component}            from 'react';
import {connect}                     from 'react-redux';
import {withRouter}                  from 'react-router-dom';
import classes                       from './EnigmaPage.css';
import LevelInfo                     from '../../components/LevelInfo/LevelInfo';
import Password                      from '../../components/Password/Password';
import Enigma                        from '../../components/Enigma/Enigma';
import fire                          from '../../config/Fire';
import * as actions                  from '../../store/actions/index' ;

class EnigmaPage extends Component {
      
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.authCheckState();
    }

    readUserData() {
        fire.database().ref('enigmi/').once('value')
            .then(function(result){
                //console.log("content of enigma",result.val());
                return result.val()
            });
    }

    render(){
        return (
            <div className={classes.EnigmaPage}>
                start
                <div className={classes.Header}>
                    <div><LevelInfo readUserData={this.readUserData()}/></div>
                    <div><Password /></div>
                </div>
                <Enigma />
                finish
            </div>
        )
    }
    
}

const mapDispatchToProps = dispatch => {
    return {
        authCheckState: () => dispatch(actions.authCheckState())
    };
}
const mapStateToProps = state => {
    return {

    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(EnigmaPage));
