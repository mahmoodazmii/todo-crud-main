import { useState } from "react";
import "../styles/AddToDo.css";

const AddToDo = ({ onAddToDo }) => {
  const [title, setTitle] = useState("");

  return (
    <div className="add-todo-container">
      <input
        className="todo-input"
        placeholder="Add a new task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {title.length === 0 && <small className="hint">Type a task to add</small>}
      <button
        className="add-button"
        onClick={() => {
          setTitle("");
          onAddToDo(title);
        }}
        disabled={title.length === 0}
      >
        Add Task
      </button>
    </div>
  );
};

export default AddToDo;
