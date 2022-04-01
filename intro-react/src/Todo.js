import React, { useState } from "react";

export default function Todo({ todo, toggleTodo }) {
  const [style, setStyle] = useState("todo");

  //récupère l'id et l'envoie dans le paramètre de la fonction toggleTodo()
  function handleTodoClick() {
    toggleTodo(todo.id);
  }

  //change la couleur du backgroud d'un todo s'il est coché
  function handleChangeStyle() {
    if (todo.complete === false) {
      setStyle("newStyle");
    } else {
      setStyle("todo");
    }
  }
  return (
    <div className={style}>
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleTodoClick}
          onClick={handleChangeStyle}
        />
        {todo.name}
      </label>
    </div>
  );
}
