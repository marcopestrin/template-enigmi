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
        //console.log(props);
    }

    componentDidMount() {
        this.props.authCheckState();
    }

    readUserData() {
        /*
        fire.database().ref('enigmi/').once('value')
            .then(function(result){
                //console.log("content of enigma",result.val()[1].description);
                return result.val()
            });
            */
        this.props.loadLevel(this.props.userId);
        console.log(this.props.description);
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
        authCheckState: () => dispatch(actions.authCheckState()),
        getLevel: () => dispatch(actions.getLevel()),
        loadLevel:(id) => dispatch(actions.loadLevel(id))
    };
}
const mapStateToProps = state => {
    return {
        userId:state.auth.user,
        description:state.level.description
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(EnigmaPage));
