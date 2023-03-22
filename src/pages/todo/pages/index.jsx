import React from "react";
import PropTypes from "prop-types";
import TodoList from "../components/todoList/Index";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const todoDataEx = [
    {
      id: 1,
      title: "Eat",
    },
    {
      id: 2,
      title: "Sleep",
    },
    {
      id: 3,
      title: "Code",
    },
  ];
  return (
    <div>
      <h2>1. Todo List</h2>
      <TodoList todoData={todoDataEx} />
    </div>
  );
}

export default TodoFeature;
