import React from "react";
import TodoItem from "./TodoItem";

const TodoBoard = ({ todoList }) => {
  return (
    <div>
      <h2>Todo List</h2>
      {todoList.length > 0 ? (
        todoList.map((item) => <TodoItem item={item} />)
      ) : (
        <h2>there is no item to show</h2>
      )}
    </div>
  );
};

export default TodoBoard;
