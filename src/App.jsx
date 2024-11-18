import { useState } from 'react';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { text: "Use ChatGPT to do React", isCompleted: false },
    { text: "Meet a friend for lunch", isCompleted: false },
    { text: "Build a barely passable To Do app", isCompleted: false},
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, {text, isCompleted: false }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <h1 className="todo-list">My To Do List</h1>
      {todos.map((todo, index) => (
        <TodoItem 
          todo={todo} 
          key={index} 
          index={index} 
          completeTodo={completeTodo} 
          removeTodo={removeTodo}/>
      ))}
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;