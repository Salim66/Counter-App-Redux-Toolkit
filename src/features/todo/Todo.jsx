import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo } from './todoSlice';

const Todo = () => {
    const [food, setFood] = useState("");
    const { todos } = useSelector(state => state);
    const dispatch = useDispatch();
    console.log(todos);
  return (
      <div className="container">
          <div className="row my-5 justify-content-center">
              <div className="col-md-5">
                  <div className="card">
                      <div className="card-body">
                          <div className="input-group">
                              <input type="text" onChange={(e) => setFood(e.target.value)} />
                              <button className='btn btn-primary btn-sm' onClick={() => dispatch(addTodo(food))}>Add</button>
                          </div>
                          <hr />
                          <ul>
                              {todos.map((item, index) => {
                                  return <li key={index}>{item} <button onClick={() => dispatch(removeTodo(item))}>del</button></li>
                                
                            })}
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Todo