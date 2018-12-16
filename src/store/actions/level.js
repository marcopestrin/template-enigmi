import * as actions             from './actionType';
import fire                     from '../../config/Fire';

export const levelSuccess = () => {
    return {
        type:actions.LEVEL_SUCCESS
    }
}

export const levelFail = (error) => {
    return {
        type:actions.LEVEL_FAIL,
        info:error
    }
}

export const getLevel = (level) => {
    return {
        level:level,
        type:actions.GET_LEVEL
    }  
}

export const loadLevel = (identificativo) => {
    return dispatch => {
        fire.database().ref('user/').once('value')
            .then(function(result){ //load all the users
                var obj = result.val();
                Object.keys(obj).forEach((key)=> { //cycling all the users
                    if (obj[key].id == identificativo){ //I take the user I'm logged
                        var currentLevel = obj[key].currentLevel //extract the level

                        //all the levels must be in orderd into database!
                        fire.database().ref('enigmi/').once('value')
                            .then(function(result){
                                var level = result.val()[currentLevel];
                                dispatch(getLevel(level));
                            });
                    }
                });
            });
        return {
            type:actions.LOAD_LEVEL
        }  
    }
}
