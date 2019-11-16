import * as actionTypes from '../actions/actionTypes';

const initialState = {state: 'empty'};

const getSchedule = (state, action) => {
    //Take the content of the file and return back an array for availabilities
    
    console.log('hi');
    return state;
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_SCHEDULE:
            return getSchedule(state, action);
        default:
            return state;    
    }
}

export default reducer;