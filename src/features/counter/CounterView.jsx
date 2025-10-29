import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import{decrement, increaseByAmount, increment, reset} from "../counter/counterSlice"

const CounterView = () => {

  const count = useSelector (state => state.counter.count)
  const dispatch = useDispatch()
  return (
    <div className='text-center mt-10 '>
      <h1>CounterView</h1>
      <span>{count}</span>
      <div className='mt-3'>
      <button className='bg-red-900 py-2 px-5 mx-4 text-white font-bold' onClick={() => dispatch(increment())}>increment</button>
      <button className='bg-red-900 py-2 px-5 mx-4 text-white font-bold' onClick={() => dispatch(increaseByAmount(10))}>increment by 10</button>  
      <button className='bg-red-900 py-2 px-5 mx-4 text-white font-bold' onClick={() => dispatch(decrement())}>decrement</button>
      </div>
      <div>
        <button className='bg-amber-400 font-extrabold border-2 border-black text-white py-2 px-2 mt-3 rounded-2xl' onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  )
}

export default CounterView
