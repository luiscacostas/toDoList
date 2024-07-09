import React, { useState } from "react";
import './TodoItem.css';

const TodoItem = ({
  dataItem: { title, desc, deadline, isDone },
  deleteCard,
  editCard
}) => {
  const [completed, setCompleted] = useState(isDone);

  const handleCheckboxChange = () => {
    setCompleted(!completed);
  };

  return (
    <article>
      <h3 className={completed ? 'done' : ''}>Titulo: {title}</h3>
      <p>Descripcion: {desc}</p>
      <p>Deadline: {deadline}</p>
      <input
        type="checkbox"
        checked={completed}
        onChange={handleCheckboxChange}
      />
      <button onClick={deleteCard}>Borrar</button>
      <button onClick={editCard}>Editar</button>
    </article>
  );
};

export default TodoItem;