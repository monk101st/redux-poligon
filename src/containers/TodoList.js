import React from "react";
import { connect } from "react-redux";
import Todo from "../components/Todo";
import { toggleTodo } from "../actions/todo.actions";

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <div>
      <h1>Lista</h1>
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} onClick={toggleTodo(todo.id)} />
        ))}
      </ul>
    </div>
  );
};
const mapStateToProps = (state) => ({
  todos: state.todos
});

const mapDispachToProps = {
  toggleTodo
};

export default connect(mapStateToProps, mapDispachToProps)(TodoList);
