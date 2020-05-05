import React from 'react'
import { subscribe } from '@datnq/unidata'

const Counter = ({ data }) => {
  console.log('Rendered Counter')
  return (
    <span>
      Completed: {data.todos.filter((t) => t.completed).length}/
      {data.todos.length}
    </span>
  )
}

export default subscribe({
  todos: [],
})(Counter)
