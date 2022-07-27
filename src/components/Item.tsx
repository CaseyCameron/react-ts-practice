import React from 'react'

const Item: React.FC<{ text: string; id: string }> = ({ text, id }) => {
  return (
    <li key={id}>{text}</li>
  )
}

export default Item