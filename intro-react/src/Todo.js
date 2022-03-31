import React from "react";

export default function Todo({ todo, toggleTodo }) {
  //récupère l'id et l'envoie dans le paramètre de la fonction toggleTodo()
  function handleTodoClick() {
    toggleTodo(todo.id);
  }
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleTodoClick}
        />
        {todo.name}
      </label>
    </div>
  );
}
