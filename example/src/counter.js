import React from 'react'
import { subscribe } from '@datnq/unidata'
import { createLogger } from './logger'

class Counter extends React.PureComponent {
  constructor(props) {
    super(props)
    this.log = createLogger(this.props.dispatch)
  }
  componentDidMount() {
    this.log && this.log('Rendering Todo Counter')
  }
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
