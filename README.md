# Unidata

[![NPM](https://img.shields.io/npm/v/@datnq/unidata.svg)](https://www.npmjs.com/package/@datnq/unidata)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/e8cdc12c08644c36a8c672bdd45e049e)](https://www.codacy.com/manual/datnq/unidata?utm_source=github.com&utm_medium=referral&utm_content=datnq/unidata&utm_campaign=Badge_Grade)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![npm](https://img.shields.io/npm/dw/@datnq/unidata)](https://www.npmjs.com/package/@datnq/unidata)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@datnq/unidata)

Simplify usage of managing datasource

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

```json
{
  "lodash": "^4.17.15",
  "react": "^16.11.0",
  "react-dom": "^16.11.0"
}
```

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
import { withUnidata } from '@datnq/unidata'
import App from './App'

const AppContainer = withUnidata()(App)

ReactDOM.render(<AppContainer />, document.getElementById('root'))
```

With initial data

```js
const AppContainer = withUnidata({
  todos: [
    // initial data item
  ],
})(App)
```

### In component

```jsx
// todoList.js
const TodoList = ({ data, dataSetter }) => {
  const { todos } = data
  // ...
}

export default subscribe({
  todos: [],
})(TodoList)
```

## Clone from source

```
git clone https://github.com/datnq/unidata
```

## License

MIT © 2019 by [Joey Nguyen](https://github.com/datnq)
