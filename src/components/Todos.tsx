import React from 'react'
import TodoItem from './TodoItem';
import Todo from '../models/todo'
import classes from './Todos.module.css'

const Todos: React.FC<{ items: Todo[], removeTodo: (id: string) => void }> = ({ items, removeTodo }) => {
  return (
    <ul className={classes.todos}>
      {items.map(({ id, text }) => (
        <TodoItem 
          key={id}
          text={text}
          removeTodo={removeTodo.bind(null, id)}
        />
      ))}
    </ul> 
  )
}

export default Todos