import * as actionTypes from './actionType';
import Axios            from 'axios';
import * as actions     from './index';

export const auth = (email, password, isSignUp) => {
    return dispatch => {

        console.log("hereee into store/action/auth.js");

        const url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyANX4cFnzJ4rfmt--XZrSiTLXkhck43y98';
        const data = {
          email: email,
          password: password,
          returnSecureToken: true
        }

        console.log(data);

        Axios.post(url, data)
         .then(response => {
              console.log(response);
          })
          .catch(err => {
              console.log(err)
          })

    }
}