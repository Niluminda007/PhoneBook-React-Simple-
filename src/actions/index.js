export const STORE_USERS = (users)=>{
    return{
        type:"STORE_USERS",
        payload:users
    }
}

export const CHANGE_USER = (action)=>{
    return{
        type:"CHANGE_USER",
        payload:action
    }
}