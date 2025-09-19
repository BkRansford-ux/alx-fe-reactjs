import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import { searchUsers } from './services/github';

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSearch(query) {
    setError('');
    if (!query) {
      setUsers([]);
      return;
    }

    try {
      setLoading(true);
      const results = await searchUsers(query);
      setUsers(results);
    } catch (err) {
      console.error(err);
      setError('Error fetching users. See console for details.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ maxWidth: 900, margin: '40px auto', padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      <div style={{ marginTop: 20 }}>
        {loading && <p>Loading…</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <UserList users={users} />
      </div>
    </div>
  );
}
