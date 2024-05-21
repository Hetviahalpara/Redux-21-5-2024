// import { combineReducers } from "redux";
// import product_reducer from "./ProductReducer";
// import admin_reducer from "./AdminReducers";
// const reducers =combineReducers(
//     {
//         products:product_reducer,
//         admin:admin_reducer
//     }
// )
// export default reducers

// 20-5-24 start
import number_reducers from "./NumberReducer";
import product_reducer from "./ProductReducer";
import {  combineReducers } from 'redux'
const reducers = combineReducers({
    product:product_reducer,
    number:number_reducers
})

export default reducers

// 20-5-24 end