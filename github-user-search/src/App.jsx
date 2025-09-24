import { useState } from "react";
import Search from "./components/Search";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
   
      {/* Search form */}
      <Search setUsers={setUsers} />

      {/* Results */}
      <div className="mt-8 w-full max-w-3xl">
        {users.length === 0 ? (
          <p className="text-gray-400 text-center">No results yet. Try a search!</p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {users.map((user) => (
              <li
                key={user.id}
                className="bg-gray-800 p-4 rounded-lg shadow hover:scale-105 transform transition"
              >
                <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={user.avatar_url}
                    alt={user.login}
                    className="w-20 h-20 rounded-full mx-auto"
                  />
                  <p className="mt-4 text-center font-semibold">{user.login}</p>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;

