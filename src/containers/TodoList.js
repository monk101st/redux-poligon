import React from "react";
import { connect } from "react-redux";

const TodoList = ({ todos }) => {
  return (
    <div>
      <h1>Lista</h1>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </div>
  );
};
const mapStateToProps = (state) => ({
  todos: state.todos
});

export default connect(mapStateToProps)(TodoList);
