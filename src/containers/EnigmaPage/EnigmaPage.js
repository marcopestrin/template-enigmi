import React, {Component}            from 'react';
import {connect}                     from 'react-redux';
import {withRouter}                  from 'react-router-dom';
import classes                       from './EnigmaPage.css';
import LevelInfo                     from '../../components/LevelInfo/LevelInfo';
import Password                      from '../../components/Password/Password';
import Enigma                        from '../../components/Enigma/Enigma';
import LoadingComponentSpinner       from '../../components/UI/Spinner/Spinner';
import * as actions                  from '../../store/actions/index' ;

class EnigmaPage extends Component {
      
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.authCheckState();
        this.props.loadLevel(this.props.userId);
    }

    isDataReady() {
        if(this.props.level)
            return true;
        return false;
    }

    getCookieValue = (a) => {
        var b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
        return b ? b.pop() : '';
    }

    render(){
        if(!this.getCookieValue("authEnigmi")) {
            //here there are a vulnerability !!!! the users can change the cookie value!
            return(
                <p>To play you must log in</p>
            ) 
        }
        const { level } = this.props;

        if (!level) { 
            return <LoadingComponentSpinner />; 
        }
        
        return (
            <div className={classes.EnigmaPage}>
                <Enigma 
                    nameEnigma = {this.props.level.name}
                    imgEnigma = {this.props.level.img}
                    contentEnigma={this.props.level.description}
                    />
                <Password
                    levelNumber={this.props.level.levelNumber}
                />
                <LevelInfo 
                    classes='badge badge-primary'
                    difficulty={this.props.level.difficulty}
                    levelNumber={this.props.level.levelNumber}
                />
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
