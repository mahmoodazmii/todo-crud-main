import React, { useState } from "react";
import "../styles/ToDoItem.css";

const ToDoItem = ({ todo, onChange, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (e) => {
    onChange({
      ...todo,
      title: e.target.value,
    });
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(todo.id);
  };

  const handleToggleDone = (e) => {
    onChange({
      ...todo,
      done: e.target.checked,
    });
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const todoContent = isEditing ? (
    <>
      <input value={todo.title} onChange={handleEdit} />
      <button onClick={handleSave} disabled={todo.title.length === 0}>
        Save
      </button>
    </>
  ) : (
    <>
      <span className={todo.done ? "done" : ""}>{todo.title}</span>
      <button onClick={handleEditToggle}>Edit</button>
    </>
  );

  return (
    <div className="todo-item">
      <label>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={handleToggleDone}
        />
        {todoContent}
        <button onClick={handleDelete}>Delete</button>
        {todo.title.length === 0 && (
          <p className="error">Task can't be empty.</p>
        )}
      </label>
    </div>
  );
};

export default ToDoItem;
