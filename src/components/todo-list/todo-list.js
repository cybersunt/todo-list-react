import React from 'react';
import TodoListItem from "../todo-list-item/todo-list-item";

const TodoList = ({ todos }) => {

  const elements = todos.map((item) => {
    return (
      <TodoListItem
        label={item.label}
        important={item.important}/>
    )
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  )
};

export default TodoList;
