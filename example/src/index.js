import React from 'react'
import ReactDOM from 'react-dom'
import { UnidataProvider } from '@datnq/unidata'

import App from './App'
import './index.css'

const data = {}

ReactDOM.render(
  <UnidataProvider initialData={data}>
    <App />
  </UnidataProvider>,
  document.getElementById('root')
)
