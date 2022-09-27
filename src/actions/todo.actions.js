let nextTodoId = 0;

export const addTodo = (text) => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  complete: false,
  text: text
});