# bathroom

Redux app with Ducks.

## Installation

```
npm i bathroom -S
```

## Usage

In initialization:

``` javascript
import actions, { bathroom } from 'bathroom';
import * as ducks from './ducks';
import createStore from './store';

const { store } = bathroom(ducks, createStore);

actions.myAction();
```

In a component:

``` javascript
import React from 'react';
import actions from 'bathroom';

export default class MyComponent extends React.Component {
  render() {
    return (
      <button onClick={ actions.myAction }>Click</button>
    );
  }
}
```

## API

### default

Bound action creators that [redux-binder](https://github.com/nak2k/node-redux-binder) keeps.

### bathroom(ducks, createStore, preloadedState, enhancer)

This creates a store with a root reducer of the ducks, and
makes bound action creators with [redux-binder](https://github.com/nak2k/node-redux-binder).

## License

MIT
