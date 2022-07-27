import React from 'react'
import Todo from '../models/todo'
import Item from './Item';

const Todos: React.FC<{ items: Todo[] }> = ({ items }) => {
  return (
    <ul>
      {items.map(({ text }) => <Item todo={text}/>)}
    </ul>
  )
}

export default Todos