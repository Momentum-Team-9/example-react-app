import React from 'react'
import { sortBy } from 'lodash'

export const Developer = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Andrea'),
    React.createElement('h2', {}, 'Front-end Developer')
  ])
}
sortBy()

export const App = () => {
  return <Developer />
}
