import React from 'react';
import { connect } from 'react-redux';

export const UserList = connect(
  state => ({
    users: state.users.users,
  })
)(({ users }) =>
  <section>
    <h2>Users</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>EMail</th>
        </tr>
      </thead>
      <tbody>
        {
          Object.values(users).map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </section>
);
