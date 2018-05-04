const test = require('tape');
const { store, users } = require('./ducks');

test('test', t => {
  t.plan(5);

  t.equal(typeof store, 'object');
  t.equal(typeof users, 'object');
  t.equal(typeof users.createUser, 'function');

  t.deepEqual(store.getState(), {
    users: {},
  });

  users.createUser({ id: 'user1', name: 'test user' });

  t.deepEqual(store.getState(), {
    users: {
      user1: {
        id: 'user1',
        name: 'test user',
      },
    },
  });
});
