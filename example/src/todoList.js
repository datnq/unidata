import React from 'react'
import { subscribe } from '@datnq/unidata'

const TodoList = ({ data, dataSetter }) => {
  const { todos } = data

  const change = (e) => {
    const {
      target: { checked, value },
    } = e
    const index = parseInt(value, 10)
    const updated = todos[index]
    todos[index] = { ...updated, completed: checked }
    dataSetter.put(todos)
  }

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
