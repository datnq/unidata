# Unidata

Simplify usage of managing datasource

[![NPM](https://img.shields.io/npm/v/@datnq/unidata.svg)](https://www.npmjs.com/package/@datnq/unidata)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/f61e27c0392b4b84830794d1701ddb74)](https://www.codacy.com/manual/datnq/unidata?utm_source=github.com&utm_medium=referral&utm_content=datnq/unidata&utm_campaign=Badge_Grade)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
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

ReactDOM.render(
  <UnidataProvider>
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
  todos: []
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
const TodoList = ({ data, dataSetter }) => {
  const { todos } = data
  // ...
}

export default subscribe({
  todos: []
})(TodoList)
```

## Clone from source

```bash
git clone https://github.com/datnq/unidata
```

## License

MIT © 2019 by [Joey Nguyen](https://github.com/datnq)
