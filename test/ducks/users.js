const CREATE_USER = 'test/users/CREATE_USER';

exports.createUser = (user) => ({
  type: CREATE_USER,
  user,
});

exports.default = (state = {}, { type, user }) => {
  if (type === CREATE_USER) {
    return {
      ...state,
      [user.id]: user,
    };
  }

  return state;
};
