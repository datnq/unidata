import React from 'react'
import ReactDOM from 'react-dom'
import { withUnidata } from '@datnq/unidata'

import App from './App'
import './index.css'

const data = {}
const AppContainer = withUnidata(data)(App)

ReactDOM.render(<AppContainer />, document.getElementById('root'))
