import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/actions';
import './Counter.css';

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <center>
        <div className='count'>
            <h2>Count: {count}</h2>
            <br></br>
            <button className='button' onClick={() => dispatch(increment())}>Increment</button> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            <button className='button' onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    </center>
    
  );
};

export default Counter;
