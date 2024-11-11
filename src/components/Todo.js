import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ task, togglecomplete, deleteTodo, editTodo }) => {
  return (
    <div className="Todo">
      <p onClick={() => togglecomplete(task.id)} className={`${task.completed ? "completed" : ""}`}>{task.task}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} className="icon edit-icon" onClick={()=> editTodo(task.id)}/>
        <FontAwesomeIcon icon={faTrash} className="icon delete-icon" onClick={() => deleteTodo(task.id)}/>
      </div>
    </div>
  );
};

export default Todo;
