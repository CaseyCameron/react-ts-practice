import { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() { 
  // set this state to manage an array of Todos
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText)

    setTodos(prevState => [...prevState, newTodo])
    // setTodos(prevTodos => {
    //   return prevTodos.concat(newTodo)
    // })
  }

  const removeTodoHandler = (id: string) => {
    setTodos(prevState => prevState.filter(todo => todo.id !== id))
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos} removeTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
