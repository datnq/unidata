import React, { useEffect } from 'react'
import { subscribe } from '@datnq/unidata'
import { createLogger } from './logger'

const TodoList = ({ data, dispatch }) => {
  const { todos } = data

  const log = createLogger(dispatch)

  const change = (e) => {
    const {
      target: { checked, value },
    } = e

    dispatch({
      type: 'update',
      payload: {
        name: 'todos',
        value: { completed: checked },
        filter: (t, i) => i === parseInt(value, 10),
      },
    })
  }

  useEffect(() => {
    log('Rendering Todo list')
  })

  return (
    <ol>
      {todos.map((todo, id) => (
        <li key={todo.content}>
          <input
            type='checkbox'
            checked={todo.completed}
            value={id}
            onChange={change}
          />
          {todo.completed ? <s>{todo.content}</s> : todo.content}
        </li>
      ))}
    </ol>
  )
}
export default subscribe({
  todos: [],
})(TodoList)
