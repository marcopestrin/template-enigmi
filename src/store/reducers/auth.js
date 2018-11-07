import * as actions from '../actions/actionType.js';
import {updateObject}       from '../utility';


const initialState  = {}

const reducer = (state = initialState,action) => {
    switch(action.type){

        case actions.AUTH_START:
            return updateObject(state, {error:null, loading:true});

        default:
            return state;
    }
}

export default reducer