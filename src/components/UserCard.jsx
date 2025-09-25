import React from 'react';

export default function UserCard({ user }) {
  if (!user) return null;
  return (
    <div style={{
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      padding: 12,
      border: '1px solid #e0e0e0',
      borderRadius: 8,
      background: '#fff'
    }}>
      <img src={user.avatar_url} alt={user.login} width="64" height="64" style={{ borderRadius: 8 }} />
      <div>
        <a href={user.html_url} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 700, color: '#0366d6' }}>
          {user.login}
        </a>
        <div style={{ fontSize: 14, color: '#555' }}>{user.type}</div>
      </div>
    </div>
  );
}
