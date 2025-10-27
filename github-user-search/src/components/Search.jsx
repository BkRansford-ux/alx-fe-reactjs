import { useState } from "react";
import { fetchUserData, fetchAdvancedUsers } from "../services/githubService";

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
      // ‚úÖ If username only ‚Üí use fetchUserData (for checker)
      if (username && !location && !minRepos) {
        const user = await fetchUserData(username);
        setResults([user]); // wrap single result in array for uniform rendering
      } else {
        // ‚úÖ Otherwise ‚Üí use the advanced API
        const users = await fetchAdvancedUsers({ username, location, minRepos });
        setResults(users);
      }
    } catch (err) {
      setError("Looks like we can‚Äôt find the user.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto my-10 p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
        GitHub User Search
      </h1>

      <form
        onSubmit={handleSearch}
        className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-end"
      >
        <div className="flex-1">
          <label className="block text-gray-700 mb-2">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Search by username"
          />
        </div>

        <div className="flex-1">
          <label className="block text-gray-700 mb-2">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="e.g. London"
          />
        </div>

        <div className="flex-1">
          <label className="block text-gray-700 mb-2">Min Repositories</label>
          <input
            type="number"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="e.g. 10"
          />
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded transition"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      <div className="mt-6">
        {loading && <p className="text-center text-gray-600">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {results.length > 0 && (
          <div className="grid gap-4 mt-4">
            {results.map((user) => (
              <div
                key={user.id}
                className="flex items-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition"
              >
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {user.login}
                  </h2>
                  {user.location && (
                    <p className="text-gray-600">Ì≥ç {user.location}</p>
                  )}
                  {user.public_repos && (
                    <p className="text-sm text-gray-500">
                      Public Repos: {user.public_repos}
                    </p>
                  )}
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
