import React from 'react'
import ReactDOM from 'react-dom'
import { UnidataProvider } from '@datnq/unidata'

import App from './App'
import './index.css'

ReactDOM.render(
  <UnidataProvider initialData={{}}>
    <App />
  </UnidataProvider>,
  document.getElementById('root')
)
