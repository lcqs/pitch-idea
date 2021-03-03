export const ADD_USER = "ADD_USER";

export const addUserByID = (id) =>{
    const action = {
        type: ADD_USER,
        id 
    }
    return action;
}