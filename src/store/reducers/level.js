import * as actionTypes from '../actions/actionType';

const initialState = {
    level:''
}

const reducer = (state = initialState,action) => {
    switch(action.type){

        case actionTypes.LEVEL_FAIL:
            return {...state};

        case actionTypes.LEVEL_SUCCESS:
            return {...state};

        case actionTypes.GET_LEVEL:
            return {...state, level:action.level};

        case actionTypes.LOAD_LEVEL:
            return {...state};

        default:
            return state;
    }
}

export default reducer;