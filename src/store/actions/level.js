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
    if(localStorage.user != undefined) { //when I click LOGOUT I leave the level informations
        return {
            level:level,
            type:actions.GET_LEVEL
        }  
    }else{
        return {
            level:"",
            type:actions.GET_LEVEL
        } 
    }
}

export const passwordCorrect = (levelNumber) => {
    console.log("go to the next level");



    fire.database().ref('user/').once('value')
        .then(function(result){ //load all the users
            var obj = result.val();
            Object.keys(obj).forEach((key)=> { //cycling all the users




                if (obj[key].id == localStorage.getItem('user')){ //I take the user I'm logged
                    console.log("trovato");
                    var updates = {};
                    updates['/user/' + key + '/' +  'currentLevel'] = levelNumber+1;
                    fire.database().ref().update(updates)


        
                }




            });
        });

    return {
        level:undefined,
        type:actions.TRUE_PASSWORD_LEVEL
    }
}

export const passwordWrong = () => {
    console.log("stay here!!");
    return {
        level:undefined,
        type:actions.FALSE_PASSWORD_LEVEL
    }
}


export const submitPassword = (passwordInput,levelNumber) => {
    return dispatch => {
        fire.database().ref('enigmi/').once('value')
            .then(function(result){
                if(result.val()[levelNumber].password == passwordInput){
                    dispatch(passwordCorrect(levelNumber));
                }else{
                    dispatch(passwordWrong());
                }
            });

    }
}

export const loadLevel = (identificativo = null) => {
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
    }
}
