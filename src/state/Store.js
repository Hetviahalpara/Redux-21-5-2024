// import { applyMiddleware, createStore } from "redux";
// import { thunk } from "redux-thunk";
// import reducers from "./reducers/Index";

import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers/Index";

// const Store=createStore(reducers,{},applyMiddleware(thunk))

// 20-5-24 start

const Store=configureStore({
    reducer:reducers
})
export default Store;
// 20-5-24 end 

// export default Store;