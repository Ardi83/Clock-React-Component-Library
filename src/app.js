import React from 'react'
import ReactDOM from 'react-dom'

import Clock from './components/Clock'

const element = <Clock color="yellow" />
ReactDOM.render(
  element,
  document.getElementById('root')
);