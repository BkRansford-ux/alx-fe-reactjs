import { useState } from "react";
import { fetchUsers } from "../services/githubService";
import UserList from "./UserList";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const results = await fetchUsers({ username, location, minRepos });
      setUsers(results);
    } catch (err) {
      setError("Failed to fetch users. Please try again.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">GitHub Advanced User Search</h1>

      <form onSubmit={handleSearch} className="space-y-3">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <input
          type="number"
          placeholder="Minimum Repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* ✅ Conditional rendering using && */}
      {error && <p className="text-red-500 mt-4">{error}</p>}

      {users.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-3">Results</h2>
          <UserList users={users} />
        </div>
      )}
    </div>
  );
};

export default Search;

