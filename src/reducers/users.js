import data from '../API/api.json'
import {ADD_USER} from '../actions/actions'



const users = (state = data, action) =>{
    switch(action.type){
        case ADD_USER:
            const availableUsers = removeUserFromState(state, action.id);
            return availableUsers;
        default:
            return state;
    }
}
const removeUserFromState = (state, id) => state.filter(user => user.id !== id)


export default users;