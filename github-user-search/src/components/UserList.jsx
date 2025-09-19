import React from 'react';
import UserCard from './UserCard';

export default function UserList({ users }) {
  if (!users) return null;
  if (users.length === 0) return <p>No users found.</p>;
  return (
    <div style={{ display: 'grid', gap: 12 }}>
      {users.map(u => (
        <UserCard key={u.id} user={u} />
      ))}
    </div>
  );
}
