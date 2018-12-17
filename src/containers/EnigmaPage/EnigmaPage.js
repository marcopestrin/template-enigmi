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
        this.props.loadLevel(this.props.userId);
    }

    render(){
        return (
            <div className={classes.EnigmaPage}>
                <img src={this.props.level.img} />
                {this.props.level.description}
                <br />
                {this.props.level.name}
                <div className={classes.Header}>
                    <div>
                        <LevelInfo 
                            difficulty={this.props.level.difficulty}
                            level={this.props.level.level}
                            readUserData={this.readUserData()}
                        />
                    </div>
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
        level:state.level.level
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(EnigmaPage));
