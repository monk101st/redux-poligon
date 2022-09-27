import "./styles.css";

import TodoList from "./containers/TodoList";
import AddTodo from "./containers/AddTodo";

export default function App() {
  return (
    <div className="App">
      <h1>REDUX POLIGON</h1>
      <h2>Nauka Reduxa - udemy</h2>
      <AddTodo />
      <TodoList />
    </div>
  );
}
