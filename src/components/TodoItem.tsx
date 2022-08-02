import React from 'react'

const TodoItem: React.FC<{ text: string; id: string }> = ({ text, id }) => {
  return (
    <li key={id}>{text}</li>
  )
}

export default TodoItem