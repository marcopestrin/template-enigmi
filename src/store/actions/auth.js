import * as actions             from './actionType';
import fire                     from '../../config/Fire';
import history                  from '../../hoc/History';


export const registrationSuccess = () => {
    return {
        type:actions.REGISTRATION_SUCCESS
    }
}

export const registrationFail = (error) => {
    return {
        type:actions.REGISTRATION_FAIL,
        info:error
    }
}

export const loginSuccess = () => {
    return {
        type:actions.AUTH_SUCCESS
    }  
}

export const loginFail = (error) => {
    return {
        type:actions.AUTH_FAIL,
        info:error
    }
}

export const logoutSuccess = () => {
    return {
        type:actions.LOGOUT
    }
}

export const createNewProfile = (email,password) => {
    return dispatch => {
        fire.auth().createUserWithEmailAndPassword(email,password)
            .then((result)=>{
                console.log("User created in database",result)            
                var timestamp = new Date().getTime();
                var currentLevel = 1; //initialLevel
                var id = result.user.uid
                var email = result.user.email
                fire.database().ref("user/").push({id,email,timestamp,currentLevel})
                    .then((data)=>{
                        console.log("userSetted",data);

                        //Redirect
                        history.push({
                            pathname: '/',
                        });
                        history.go(-1);
                        history.goBack()
                        
                        dispatch(registrationSuccess());
                    })
                    .catch((error)=>{
                        console.log("userWrongSet",error);
                        dispatch(registrationFail(error));
                    })        
            })
            .catch((error) => {
                console.log("User NOT created in database",error)
                dispatch(registrationFail(error));        
            })
    }
}

export const authentication = (email,password) =>{
    return dispatch => {
        console.log("login");
        fire.auth().signInWithEmailAndPassword(email,password)
            .then((result)=>{
                console.log("Login done", result);

                //redirect
                history.push({
                    pathname: '/',
                });
                history.go(-1);
                history.goBack();

                //set cookie
                var d = new Date();
                var exdays = 5; //number of days
                d.setTime(d.getTime() + (exdays*24*60*60*1000));
                var expires = "expires="+ d.toUTCString();
                document.cookie ="authEnigmi=" + true + ";" + expires + ";path=/";

                dispatch(loginSuccess());
            })
            .catch((error) => {
                console.log("Login wrong", error);
                dispatch(loginFail(error));
            });
    }
}

export const logout = () =>{
    return dispatch => {
        fire.auth().signOut();

        //redirect
        history.push({
            pathname: '/',
        });
        history.go(-1);
        history.goBack()

        //remove cookie
        document.cookie = 'authEnigmi=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';

        dispatch(logoutSuccess());
    }
}

export const authCheckState = (isAuthenticated) => {
    return {
        isAuthenticated,
        type:actions.AUTH_CHECK
    }
}
