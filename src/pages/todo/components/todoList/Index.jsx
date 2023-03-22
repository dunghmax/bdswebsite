import React from "react";
import PropTypes from "prop-types";

TodoList.propTypes = {
  todoData: PropTypes.array,
};

TodoList.defaultProps = {
  todoData: [],
};

function TodoList({ todoData }) {
  return (
    <ol>
      {todoData.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ol>
  );
}

export default TodoList;
