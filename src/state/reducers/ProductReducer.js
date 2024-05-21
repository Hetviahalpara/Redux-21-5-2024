// const product_reducer=(state={},action)=>{
//     if(action.type){
//         return state
//     }
//     else if(action.type){
//         return state
//     }
//     else if(action.type){
//         return state
//     }
//     else if(action.type){
//         return state
//     }
//     else{
//         //
//         return state
//     }
// }
// export default product_reducer

// 20-5-24 start

const product_reducer = (
  state = { product_name: "laptop", product_price: 100 },
  action
) => {
  if (action.type == "ADD") {
    return { ...state, product_price: state.product_price + action.payload };
  } else if (action.type == "MINUS") {
   return { ...state, product_price: state.product_price - action.payload };
  } else {
    return state;
  }
};

export default product_reducer;
// 20-5-24 end
