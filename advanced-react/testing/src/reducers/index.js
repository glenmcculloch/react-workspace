import { combineReducers } from 'redux';

const commentsReducer = (state = [], action) => {
    if (action.type === 'SAVE_COMMENT') {
        return [...state, action.payload];
    }

    return state;
};

export default combineReducers({
    comments: commentsReducer
});