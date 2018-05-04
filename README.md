# bathroom

Utility for Redux apps using [Ducks](https://github.com/erikras/ducks-modular-redux).

## Installation

```
npm i bathroom -S
```

## Usage

### `ducks/index.js` with bathroom

``` javascript
import { bathroom } from 'bathroom';
import { createStore } from 'redux';
import * as usersDuck from './users';
import * as projectsDuck from './projects';

const {
  store,
  users,
  projects,
} = bathroom({
  users: usersDuck,
  projects: projectsDuck,
}, createStore, {});

export {
  store,
  users,
  projects,
};
```

### Application entry point

``` javascript
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './ducks';

render(
  <Provider store={store}>
    // ...
  </Provider>
);
```

### Component

``` javascript
import React from 'react';
import { users } from '../ducks';

export default function userForm(props) {
  return <form>
    // ...
    <button onClick={ e => users.updateUser() }>Click</button>
  </form>;
}
```

## API

### bathroom(ducks, createStore, preloadedState, enhancer)

Create a store and bound action creators.

This function runs following steps:

1. Create a root reducer from reducers of ducks with [combineReducers](https://redux.js.org/api-reference/combinereducers).
2. Create a store from the root reducer.
3. Create bound action creators for each duck.

#### Arguments

- `ducks`
    - An object that has duck modules.
    - The key is a name to identify a duck module, and the value is the duck module.
- `createStore`
    - A function to create a store.
- `preloadedState`
    - An initial state that is passed to the createStore.
- `enhancer`
    - An enhancer that is passed to the createStore.

#### Returning Value

The returning value is an object that has following properties:

- `store`
    - A store of Redux.
- `[DUCK_NAME]`
    - An object of bound action creators corresponding to each duck module.
    - `DUCK_NAME` is corresponding to the key of the object that is specified by the argument `ducks`.

## License

MIT
