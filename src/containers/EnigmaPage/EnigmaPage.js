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


    render(){
        const { level } = this.props;
        if (!level) { return <LoadingComponentSpinner />; } // this will render only when level attr is not set, otherwise will render your `LevelInfo` component
        
        return (
            <div className={classes.EnigmaPage}>
                <img src={this.props.level.img} /><br />
                {this.props.level.description}<br />
                {this.props.level.difficulty}<br />
                {this.props.level.name}
                <div className={classes.Header}>
                    <div>                        
                        <LevelInfo 
                            difficulty={this.props.level.difficulty}
                            levelNumber={this.props.level.levelNumber}
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
