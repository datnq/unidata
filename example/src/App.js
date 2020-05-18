import React from 'react'
import Counter from './counter'
import AddTodo from './addTodo'
import TodoList from './todoList'
import UnrelatedCounter from './unrelatedCounter'
import Logger from './logger'

export default function App() {
  return (
    <>
      <div style={{ display: 'flex', height: '100vh', alignItems: 'stretch' }}>
        <div style={{ padding: '10px', flexGrow: 1 }}>
          <AddTodo />
          <hr />
          <Counter />
          <UnrelatedCounter />
          <TodoList />
        </div>
        <div
          style={{
            padding: '10px',
            flexGrow: 1,
            backgroundColor: '#f3f3f3',
            overflowY: 'scroll',
          }}
        >
          <Logger />
        </div>
      </div>
    </>
  )
}
