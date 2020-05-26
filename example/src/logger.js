import React from 'react'
import { subscribe } from '@datnq/unidata'
import shortid from 'shortid'

export const createLogger = (dispatcher) => (content) => {
  dispatcher.add('logs', { content, id: shortid.generate() })
}

export default subscribe({ logs: [] })(({ data }) => {
  const { logs } = data
  return (
    logs && (
      <ol>
        {logs.map((log) => (
          <li key={log.id}>{log.content}</li>
        ))}
      </ol>
    )
  )
})
