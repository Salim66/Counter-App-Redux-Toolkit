import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { decrement, increment, randNumber, reset } from './counterSlice';

const Counter = () => {
    const { count } = useSelector(state => state.counter);
    const dispatch = useDispatch();
    return (
        <div className="container">
            <div className="row my-5 justify-content-center">
                <div className="col-md-5">
                    <div className="card">
                        <h1 className='text-center'>{count }</h1>
                        <hr />
                        <div className='d-flex gap-3 justify-content-center'>
                            <button className='btn btn-sm btn-danger' onClick={() => dispatch(decrement())}>--</button>
                            <button className='btn btn-sm btn-success' onClick={() => dispatch(increment())}>++</button>
                            <button className='btn btn-sm btn-secondary' onClick={() => dispatch(reset())}>Reset</button>
                            <button className='btn btn-sm btn-secondary' onClick={() => dispatch(randNumber(Math.floor(Math.random() * 100000)))}>RandNumber</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Counter;