import React, { useState, useRef } from "react";
import Header from "./Header";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);
  //const qui permet de chercher la valeur(ref) de l'input
  const todoNameRef = useRef();

  //function qui ajoute un todo à la liste
  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((previousTodos) => {
      return [
        ...previousTodos,
        {
          id: uuidv4(),
          name: name,
          complete: false,
        },
      ];
    });
    todoNameRef.current.value = null;
  }
  return (
    <>
      <Header />
      <TodoList todos={todos} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Completed</button>
    </>
  );
}

export default App;
