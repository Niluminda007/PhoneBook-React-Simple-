import {configureStore} from "@reduxjs/toolkit";
import userDataReducer from "./userData";
const store = configureStore({
    reducer:{
        userData:userDataReducer
    }
},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;