import React from 'react'
import Parents from './Parents'
import { useDispatch, useSelector } from 'react-redux'
import { Product_actions } from './state/actions/IndexAction'

function App() {
  const product_state=useSelector(state=>state.product)
  const dispatch=useDispatch()
  return (
    <>
      <div className='text-center'>
      <h2>App</h2>
      <h2>{product_state.product_price}</h2>
      <button className='btn btn-info me-4' onClick={()=>{dispatch(Product_actions.product_price_add(1))}}>INCREASE +</button>
      <button className='btn btn-danger' onClick={()=>{dispatch(Product_actions.product_price_minus(1))}}>deces -</button>
      <Parents />
      </div>
    </>
  )
}

export default App
