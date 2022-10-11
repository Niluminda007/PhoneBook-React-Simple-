const items = {
    users:[],
    user_index:0
}

const change_user = (type,state)=>{
    switch(type){
        case "NEXT_USER":
            if(state.user_index >= state.users.length -1)return 0
        return state.user_index + 1

        case "PREVIOS_USER":
            if(state.user_index < 1) return state.users.length -1
            return state.user_index -1
        default:
            return
    }

}



const userDataReducer = (state=items, action)=>{
    switch(action.type){
        case "STORE_USERS":
            return {
                ...state,
                users:[...action.payload ]
            }
        case "CHANGE_USER":
            return{
                ...state,
                user_index:change_user(action.payload,state)
            }

        default:
            return state
    }
}

export default userDataReducer;