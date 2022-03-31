import React, { useState, useRef, useEffect } from "react";
import Header from "./Header";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {
  const [todos, setTodos] = useState([]);
  //const qui permet de chercher la valeur(ref) de l'input
  const todoNameRef = useRef();

  //save de la liste des todos dans l'App (refresh page)
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (setTodos) setTodos(storedTodos);
  }, []);

  //save de la liste des todos en LOCAL
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  //function qui ajoute un todo à la liste
  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((previousTodos) => {
      return [
        ...previousTodos,
        {
          id: uuidv4(), //génère un id avec uuid
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
