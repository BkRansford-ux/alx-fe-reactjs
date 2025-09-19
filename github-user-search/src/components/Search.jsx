import { useState } from "react";
import { fetchUserData } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username..."
        />
        <button type="submit">Search</button>
      </form>

      <div className="results">
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {userData && (
          <div className="user-card">
            <img src={userData.avatar_url} alt={userData.login} width={100} />
            <h2>{userData.name || userData.login}</h2>
            <a href={userData.html_url} target="_blank" rel="noreferrer">
              Visit GitHub Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
