const { combineReducers } = require('redux');

/*
 * bindActionCreators for ducks.
 */
const bindActionCreators = (actionCreators, dispatch) => {
  const actions = {};

  Object.keys(actionCreators).forEach(key => {
    /*
     * Skip a reducer.
     */
    if (key === 'default') {
      return;
    }

    /*
     * Bind an action creator to the dispatch.
     */
    const actionCreator = actionCreators[key];

    if (typeof(actionCreator) === 'function') {
      actions[key] = (...args) => dispatch(actionCreator(...args));
    }
  });

  return actions;
};

/*
 * Create a store and bound action creators.
 */
const bathroom = (ducks, createStore, preloadedState, enhancer) => {
  /*
   * Collect reducers from ducks.
   */
  const reducers = {};

  Object.keys(ducks).forEach(name => {
    reducers[name] = ducks[name].default;
  });

  /*
   * Combine reducers, and create a store.
   */
  const store = createStore(combineReducers(reducers), preloadedState, enhancer);

  /*
   * Create bound action creators.
   */
  const { dispatch } = store;
  const result = { store };

  Object.keys(ducks).forEach(name => {
    result[name] = bindActionCreators(ducks[name], dispatch);
  });

  return result;
};

/*
 * Exports.
 */
exports.bathroom = bathroom;
