import React, { useState } from "react";
import AddTodo from "./AddToDo";
import ToDoList from "./ToDoList";
import "../styles/ToDo.css";

let nextId = 1;
const initialTodos = [{ id: 0, title: "ToDo Example", done: true }];

const ToDo = () => {
  const [todos, setTodos] = useState(initialTodos);

  function addToDo(title) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false,
      },
    ]);
  }

  function editToDo(nextTodo) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === nextTodo.id) {
          return nextTodo;
        } else {
          return todo;
        }
      })
    );
  }

  function deleteToDo(todoId) {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }

  return (
    <>
      <div className="todo-container">
        <AddTodo onAddToDo={addToDo} />
        <ToDoList
          todos={todos}
          onChangeToDo={editToDo}
          onDeleteToDo={deleteToDo}
        />
      </div>
    </>
  );
};

export default ToDo;
