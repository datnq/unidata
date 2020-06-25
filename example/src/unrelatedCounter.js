import React, { useCallback, useEffect } from 'react'
import { subscribe } from '@datnq/unidata'
import { createLogger } from './logger'

export default subscribe({ counter: 0 })(({ data, dispatch }) => {
  const log = createLogger(dispatch)

  const increase = useCallback(() => {
    dispatch({
      type: 'put',
      payload: { name: 'counter', value: data.counter + 1 },
    })
  }, [data.counter, dispatch])

  useEffect(() => {
    log('Rendering Unrelated counter')
  })

  return (
    <p>
      <button type='button' onClick={increase}>
        + Increase
      </button>
      {' ' + data.counter}
    </p>
  )
})
