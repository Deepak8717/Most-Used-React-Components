import PropTypes from "prop-types";
import Todo from "./Todo";

import React from "react";

export const TodoList = ({ todos, toggleTodo }) => {
  <ul>
    {todos.map((todo) => (
      <Todo key={todo.id} {...todo} onclick={() => toggleTodo(todo.id)} />
    ))}
  </ul>;
};

TodoList.prototypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default TodoList;
