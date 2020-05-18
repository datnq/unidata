import React, { useEffect } from 'react'
import { subscribe } from '@datnq/unidata'
import { createLogger } from './logger'

const TodoList = ({ data, dispatcher }) => {
  const { todos } = data

  const log = createLogger(dispatcher)

  const change = (e) => {
    const {
      target: { checked, value },
    } = e
    const newTodos = [...todos]
    const index = parseInt(value, 10)
    const updated = todos[index]
    newTodos[index] = { ...updated, completed: checked }
    dispatcher.put('todos', newTodos)
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
