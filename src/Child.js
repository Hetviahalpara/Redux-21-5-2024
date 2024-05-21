import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Product_actions } from './state/actions/IndexAction'

const Child = () => {
    const Product_state=useSelector(state=>state.product)
    const number_state=useSelector(state=>state.number)
    const dispatch=useDispatch()

  return (
    <>
        <h2>Child</h2>
        <h2>{Product_state.product_name}</h2>
        <h2>{Product_state.product_price}</h2>
        <button className='btn btn-info me-4' onClick={()=>{dispatch(Product_actions.product_price_add(1))}}>INCREASE +</button>
        <button className='btn btn-danger' onClick={()=>{dispatch(Product_actions.product_price_minus(1))}}>decres -</button>
        <h2>{number_state.number_name}</h2>
    </>
  )
}

export default Child
