import React from 'react'
import Counter from './counter'
import AddTodo from './addTodo'
import TodoList from './todoList'

export default function App() {
  return (
    <>
      <AddTodo />
      <hr />
      <Counter />
      <TodoList />
    </>
  )
}
