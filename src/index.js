import actions, { bindActionCreators } from 'redux-binder';

export default actions;

export const bathroom = (ducks, createStore, preloadedState, enhancer) => {
  const store = createStore(ducks.default, preloadedState, enhancer);

  const actions = bindActionCreators(ducks, store.dispatch);

  return {
    store,
    actions,
  };
};
