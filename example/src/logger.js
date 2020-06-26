import React from 'react'
import { subscribe } from '@datnq/unidata'
import shortid from 'shortid'

export const createLogger = (dispatch) => (content) =>
  dispatch(({ logs = [] }) => {
    return {
      logs: [...logs, { content, id: shortid.generate(), time: new Date() }],
    }
  })

export default subscribe({ logs: [] })(({ data }) => {
  const { logs = [] } = data

  const writtenLogs = []
  let lastContent

  logs.forEach((l, i) => {
    if (i === 0) {
      writtenLogs.push({ ...l, count: 1 })
      lastContent = l.content
      return
    }
    const currentContent = l.content
    if (lastContent && currentContent === lastContent) {
      writtenLogs[writtenLogs.length - 1].count += 1
      writtenLogs[writtenLogs.length - 1].time = new Date()
    } else {
      writtenLogs.push({ ...l, count: 1 })
      lastContent = currentContent
    }
  })

  return (
    writtenLogs && (
      <div>
        {writtenLogs.map((log) => (
          <p key={log.id}>
            <code>{log.time.toLocaleTimeString()}</code> &ndash; {log.content}
            {log.count > 1 ? ` (${log.count})` : ''}
          </p>
        ))}
      </div>
    )
  )
})
