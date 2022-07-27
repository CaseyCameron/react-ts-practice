import React from 'react'
import Item from './NewTodo';
import Todo from '../models/todo'

const Todos: React.FC<{ items: Todo[] }> = ({ items }) => {
  return (
    <ul>
      {items.map(({ id, text }) => (
        <Item text={text} id={id}/>
      ))}
    </ul>
  )
}

export default Todos