import React, { useCallback, useEffect } from 'react'
import { subscribe } from '@datnq/unidata'
import { createLogger } from './logger'

export default subscribe({ counter: 0 })(({ data, dispatcher }) => {
  const log = createLogger(dispatcher)

  const increase = useCallback(() => {
    dispatcher.put('counter', data.counter + 1)
  }, [data.counter, dispatcher])

  useEffect(() => {
    log('Rendering Unrelated counter')
  })

  return (
    <p>
      {data.counter}{' '}
      <button type='button' onClick={increase}>
        + Increase
      </button>
    </p>
  )
})
