import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

// dummy reducer (replace when needed)
export default combineReducers({
    posts: postsReducer,
    users: usersReducer
});