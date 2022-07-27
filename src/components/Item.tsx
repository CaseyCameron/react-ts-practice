import React from 'react'

const Item: React.FC<{ todo: string }> = ({ todo }) => {
  return (
    <li key={todo}>{todo}</li>
  )
}

export default Item