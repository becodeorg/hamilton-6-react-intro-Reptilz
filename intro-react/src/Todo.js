import React, {useState} from 'react'
import TodoList from './TodoList'

export default function Todo({todo}) {
    const [todos, setTodos] = useState(['Todo 1', 'Todo 2'])
  return (
    <div className="Todolist">
    {todos.map(todo => {
      return <p>{todo}</p>
    })}
  </div>
  )
}
