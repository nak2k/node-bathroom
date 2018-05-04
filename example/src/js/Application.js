import React from 'react';
import { UserCreate } from './UserCreate';
import { UserList } from './UserList';

export const Application = () => {
  return <main>
    <h1>bathroom example</h1>
    <UserCreate />
    <UserList />
  </main>
}
