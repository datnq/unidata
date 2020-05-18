import React from 'react'
import { subscribe } from '@datnq/unidata'
import shortid from 'shortid'

export const createLogger = (dispatcher) => (content) => {
  dispatcher.add('logs', { content, id: shortid.generate() })
}

export default subscribe({ logs: [] })(({ data }) => {
  const { logs } = data
  return (
    logs &&
    logs.map((log, i) => (
      <p key={log.id}>
        {i + 1}. {log.content}
      </p>
    ))
  )
})
