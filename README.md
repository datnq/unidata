# Unidata

Simplify usage of managing datasource

[![NPM](https://img.shields.io/npm/v/@datnq/unidata.svg)](https://www.npmjs.com/package/@datnq/unidata)
[![npm](https://img.shields.io/npm/dw/@datnq/unidata)](https://www.npmjs.com/package/@datnq/unidata)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@datnq/unidata)

## Install

### Dependencies

Engine

```json
{
  "node": ">=8",
  "npm": ">=5"
},
```

Package

- Lodash
- React
- ReactDOM

### Demo

[http://datnq.github.io/unidata]

### Run install

```bash
# NPM
npm install --save @datnq/unidata

#Yarn
yarn add @datnq/unidata
```

## Single datasource

### App wrapper

```jsx
// app.js or index.js
import { UnidataProvider } from '@datnq/unidata'
import App from './App'

const initialData = {}

ReactDOM.render(
  <UnidataProvider initialData={initialData}>
    <App />
  </UnidataProvider>,
  document.getElementById('root')
)
```

With initial data

```jsx
// app.js or index.js
import { UnidataProvider } from '@datnq/unidata'
import App from './App'

const data = {
  todos: [],
}

ReactDOM.render(
  <UnidataProvider initialData={data}>
    <App />
  </UnidataProvider>,
  document.getElementById('root')
)
```

### In component

```jsx
// todoList.js
const TodoList = ({ data, dispatch }) => {
  const { todos } = data
  // ...

  // call a updating dispatch
  dispatch((prevData) => {
    return {
      // only return data which has changes
      todos: [...prevData.todos, newTodoItem],
    }
  })
}

export default subscribe({
  todos: [],
})(TodoList)
```

## Clone from source

```bash
git clone https://github.com/datnq/unidata
```

## License

MIT © 2019 by [Joey Nguyen](https://github.com/datnq)
