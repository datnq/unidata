import React from 'react'
import { subscribe } from '@datnq/unidata'
import { createLogger } from './logger'

class Counter extends React.PureComponent {
  componentDidUpdate() {
    this.log = createLogger(this.props.dispatcher)
  }
  render() {
    this.log && this.log('Rendering Todo Counter')
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
