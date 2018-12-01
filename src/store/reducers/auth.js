import * as actionTypes from '../actions/actionType';

const initialState = {
    isAuthenticated: false,
    level:1,
    fetched:false,
    fetching:false,
    error:null,
    registrationSuccess:null
}

const reducer = (state = initialState,action) => {
    switch(action.type){

        case actionTypes.AUTH_LOADING:
            return {...state, fetching:true};

        case actionTypes.AUTH_CHECK:
            return {...state};

        case actionTypes.AUTH_SUCCESS:
            return {...state, isAuthenticated:true, fetching:false, registrationSuccess:null, error:false};

        case actionTypes.AUTH_FAIL:
            return {...state, isAuthenticated:false, error:true, fetching:false,registrationSuccess:null};

        case actionTypes.REGISTRATION_LOADING:
            return {...state, fetching:true};

        case actionTypes.REGISTRATION_SUCCESS:
            return {...state, registrationSuccess:true, fetching:false, error:false};

        case actionTypes.REGISTRATION_FAIL:
            return {...state, registrationSuccess:false, error:true, fetching:false};

        case actionTypes.LOGOUT:
            return {...state, isAuthenticated:false, error:false};

        default:
            return state;
    }
}

export default reducer;