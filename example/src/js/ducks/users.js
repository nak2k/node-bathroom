import createReducer from 'redux-createreducer';

/*
 * Action Types.
 */
const CREATE = 'app/users/CREATE';

/*
 * Action Creators.
 */
export const createUser = user => ({
  type: CREATE,
  user,
});

/*
 * Reducers.
 */
export default createReducer({
  lastId: 0,
  users: {},
}, {
  [CREATE]: (state, action) => {
    const id = state.lastId + 1;

    return {
      lastId: id,
      users: {
        ...state.users,
        [id]: {
          ...action.user,
          id,
        },
      },
    };
  },
});
