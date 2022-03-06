import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setQuantity } from '../redux/actions/transaction'

export const QuantityButtons = ({max,min=1}) => {
  const transaction = useSelector(state => state.transaction)
  const dispatch = useDispatch()
  const incrementNumber = () => {
    if(transaction.quantity < max){
      dispatch(setQuantity(transaction.quantity+1))
    }
  }
  const decrementNumber = () => {
    if(transaction.quantity > min){
      dispatch(setQuantity(transaction.quantity-1))
    }
  }
  return (
    <div className="w-100">
      <div className="numberManipulation d-flex justify-content-between align-items-center">
        <div>
          <button className="decrement" onClick={decrementNumber}>-</button>
        </div>
        <div>{transaction.quantity}</div>
        <div>
          <button className="increment" onClick={incrementNumber}>+</button>
        </div>
      </div>
  </div>
  )
}

export default QuantityButtons