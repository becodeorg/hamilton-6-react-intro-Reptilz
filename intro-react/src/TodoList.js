import React from 'react'
import Todo from './Todo'

export default function TodoList() {
  return (
    <div className="todos">
      <h2>TodoList</h2>
      <input type="text" />
      <button>Add Todo</button>
      <button>Completed</button>
      <div>0 left todo</div>
      <Todo />
    </div>
  )
}
