import React, { createContext, useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[]
  addTodo: (text: string) => void
  removeTodo: (id: string) => void
}

interface ContextProps {
  children?: React.ReactNode
}

export const TodosContext = createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {}
})

const TodosContextProvider = ({ children }: ContextProps) => {
   const [todos, setTodos] = useState<Todo[]>([])

   const addTodoHandler = (todoText: string) => {
     const newTodo = new Todo(todoText)
 
     setTodos(prevState => [...prevState, newTodo])
   }
 
   const removeTodoHandler = (id: string) => {
     setTodos(prevState => prevState.filter(todo => todo.id !== id))
   }

   const contextValue: TodosContextObj = {
      items: todos,
      addTodo: addTodoHandler,
      removeTodo: removeTodoHandler
   }
  return <TodosContext.Provider value={contextValue}>
    {children}
  </TodosContext.Provider>
}

export default TodosContextProvider