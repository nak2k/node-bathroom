import React from 'react';
import { withStateHandlers } from 'recompose';
import { users } from './ducks';

export const UserCreate = withStateHandlers(
  {
    name: '',
    email: '',
  },
  {
    handleChange: (state, props) => ({ target: { name, value } }) => ({ [name]: value }),
    submit: (state, props) => e => {
      users.createUser(state);
    },
  }
)(
  ({ name, email, handleChange, submit }) =>
    <section>
      <h2>Create User</h2>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={name} onChange={handleChange} />
      </div>
      <div>
        <label>EMail:</label>
        <input type="email" name="email" value={email} onChange={handleChange} />
      </div>
      <div>
        <button type="submit" onClick={submit}>Create</button>
      </div>
    </section>
);
