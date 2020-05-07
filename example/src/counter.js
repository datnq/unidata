import React from 'react'
import { subscribe } from '@datnq/unidata'

class Counter extends React.Component {
  render() {
    const { data } = this.props
    return (
      <span>
        Completed: {data.todos.filter((t) => t.completed).length}/
        {data.todos.length}
      </span>
    )
  }
}

export default subscribe({
  todos: [],
})(Counter)
