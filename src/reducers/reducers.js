import { combineReducers } from 'redux';
import availableUsers from './availableUsers'
import emailDestinationList from './emailDestinationList';


const rootReducer = combineReducers({
    availableUsers,
    emailDestinationList
})

export default rootReducer;