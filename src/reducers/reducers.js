import { combineReducers } from 'redux';
import users from './users'
import emailDestinationList from './emailDestinationList';


const rootReducer = combineReducers({
    users,
    emailDestinationList
})

export default rootReducer;