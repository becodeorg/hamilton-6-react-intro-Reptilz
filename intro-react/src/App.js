import React, { useState, useRef, useEffect } from "react";
import Header from "./Header";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
import "./App.scss";

//const pour le storage de la liste des todos
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

  //fonction qui permet de changer l'état (checkbox) d'un todo
  function toggleTodo(id) {
    const newTodos = [...todos]; //copie la liste des todos dans un tableau
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos); //set du nouveau state...
  }

  //function qui ajoute un todo à la liste
  function handleAddTodo(e) {
    if (e.key === "Enter") {
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
  }

  //function qui clear la liste des todos quand l'état de la checkbox === true (!todo.complete)
  function handleClearTodos() {
    const newTodos = todos.filter((todo) => !todo.complete); //chercher les todos avec une checkbox !todo.complete
    setTodos(newTodos); //set du nouveau state...
  }
  return (
    <>
      <Header />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <div className="options">
        <div>{todos.filter((todo) => !todo.complete).length} items left</div>
        <input ref={todoNameRef} type="text" onKeyPress={handleAddTodo} />
        <button onClick={handleClearTodos}>Completed</button>
      </div>
    </>
  );
}

export default App;
