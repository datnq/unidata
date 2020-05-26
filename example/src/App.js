import React from 'react'
import Counter from './counter'
import AddTodo from './addTodo'
import TodoList from './todoList'
import UnrelatedCounter from './unrelatedCounter'
import Logger from './logger'

export default function App() {
  const colStyles = {
    padding: '20px',
    flexGrow: 1,
    width: '50%',
    position: 'relative',
  }
  return (
    <>
      <div style={{ display: 'flex', height: '100vh', alignItems: 'stretch' }}>
        <div style={colStyles}>
          <a
            href='https://github.com/datnq/unidata'
            style={{ position: 'absolute', right: 0, top: 0 }}
          >
            <img
              width='149'
              height='149'
              src='https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149'
              class='attachment-full size-full'
              alt='Fork me on GitHub'
              data-recalc-dims='1'
            />
          </a>
          <AddTodo />
          <hr />
          <Counter />
          <UnrelatedCounter />
          <TodoList />
        </div>
        <div
          style={{
            ...colStyles,
            color: '#fff',
            backgroundColor: '#333',
            overflowY: 'scroll',
            boxShadow: 'inset 0 0 20px rgba(0,0,0,.4)',
          }}
        >
          <h2>Rendering logger</h2>
          <Logger />
        </div>
      </div>
    </>
  )
}
