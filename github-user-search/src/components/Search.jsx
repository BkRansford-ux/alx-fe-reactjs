import { useState } from "react";
import { fetchAdvancedUsers } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResults([]);

    try {
      const users = await fetchAdvancedUsers(username, location, minRepos);
      setResults(users);
    } catch (err) {
      setError("Looks like we can’t find matching users");
    } finally {
      setLoading(false);
    }
  };

  return (
  <div className="p-6 max-w-2xl mx-auto">
    <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">
      GitHub User Search
    </h1>

    {/* Form container */}
    <form
      onSubmit={handleSearch}
      className="bg-white p-6 rounded-xl shadow-lg grid gap-4"
    >
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border rounded-lg p-2 w-full"
      />
      <input
        type="text"
        placeholder="Location (e.g. London)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border rounded-lg p-2 w-full"
      />
      <input
        type="number"
        placeholder="Minimum Repositories"
        value={minRepos}
        onChange={(e) => setMinRepos(e.target.value)}
        className="border rounded-lg p-2 w-full"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700"
      >
        Search
      </button>
    </form>

      {/* Results */}
      <div className="mt-6">
        {loading && <p className="text-gray-600">Loading...</p>}
        {error && <p className="text-red-600">{error}</p>}

        <ul className="space-y-4">
          {results.map((user) => (
            <li
              key={user.id}
              className="p-4 border rounded-lg flex items-center space-x-4"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <p className="font-semibold">{user.login}</p>
                {user.location && <p className="text-sm">📍 {user.location}</p>}
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Profile
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
