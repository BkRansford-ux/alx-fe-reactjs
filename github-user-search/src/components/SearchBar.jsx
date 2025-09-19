import React, { useState } from 'react';

export default function SearchBar({ onSearch, placeholder = 'Search GitHub users...' }) {
  const [query, setQuery] = useState('');

  function submit(e) {
    e.preventDefault();
    onSearch(query.trim());
  }

  return (
    <form onSubmit={submit} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder={placeholder}
        style={{ padding: '8px 12px', fontSize: 16, flex: 1 }}
      />
      <button type="submit" style={{ padding: '8px 12px', fontSize: 16 }}>
        Search
      </button>
    </form>
  );
}
