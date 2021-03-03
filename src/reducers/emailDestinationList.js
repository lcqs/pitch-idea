import data from '../API/api.json'
import {ADD_USER} from '../actions/actions'

const emailDestinationList = (state=[], action) =>{
    switch(action.type){
        case ADD_USER:
            const emailList =[...state, addUserToEmailList(action.id)];
            return emailList;
        default:
            return state;
    }
}

const addUserToEmailList = id => data.find(user => user.id = id)

export default emailDestinationList;