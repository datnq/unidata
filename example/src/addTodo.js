/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react'
import { useModel } from '@datnq/usemodel'
import { subscribe } from '@datnq/unidata'
import todoModel from './model/todos'
import { createLogger } from './logger'

const AddTodo = ({ dispatch }) => {
  const log = createLogger(dispatch)

  const todo = useModel(todoModel)
  const { content, completed } = todo

  const change = (e) => {
    todo.extractFromEvent(e)
  }

  const addtodo = (e) => {
    e.preventDefault()
    if (!todo.isValid) return

    const todoData = todo.data
    dispatch(({ todos }) => {
      return {
        todos: [...todos, todoData],
      }
    })
    todo.clearData()
  }

  useEffect(() => {
    log('Rendering Add Todo')
  })

  return (
    <div>
      <input
        type='text'
        onChange={change}
        name={content.name}
        value={content.value}
      />
      <label>
        <input
          type='checkbox'
          name={completed.name}
          checked={completed.value === 'completed'}
          value='completed'
          onChange={change}
        />{' '}
        Completed
      </label>
      <button type='button' onClick={addtodo}>
        Add todo
      </button>
      <br />
      {content.isValid ? null : <p>{content.error.message}</p>}
    </div>
  )
}
export default subscribe()(AddTodo)
